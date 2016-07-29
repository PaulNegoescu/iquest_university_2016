(function() {
    'use strict';

    angular.module('marathon').controller('userObjectivesController', utc);

    function utc(Users, Objectives, Session, $stateParams, $uibModal, ConfirmationModal, $log) {
        var vm = this;
        vm.newObjective = {};
        vm.memberId = $stateParams.memberId;
        vm.owner = Session.getStoredUser();

        getObjectives();

        Users.findById(vm.memberId).then(function(resp) {
            vm.member = resp;
        });

        vm.addObjective = function(){
            var modalInstance = $uibModal.open({
                templateUrl: 'app/components/objectives/add_objective_modal.view.html',
                controller: 'AddObjectiveController as vm',
                size: 'md',
                resolve:{
                    member: function() {
                        return vm.member;
                    },
                    owner: function() {
                        return vm.owner;
                    }
                }
            });

            modalInstance.result.then(function() {
                getObjectives();
            });
        };

        function getObjectives() {
            Users.readObjectives(vm.memberId).then(function(resp){
                vm.objectives = [];
                vm.objectives = resp;
            });
        }

        vm.updateObjective = function(data) {
            data.closed = false;
            delete data.lastEvaluation;
            Objectives.update(data);
        };

        function openConfirmation(message, cb) {
            ConfirmationModal.openModal(message).result.then(function (selectedItem) {
                if(angular.isFunction(cb)) {
                    cb(selectedItem);
                }
                $log.info('Modal dismissed with OK at:' + new Date());
            }, function () {
                $log.info('Modal dismissed with Cancel at: ' + new Date());
            });
        }

        var closeObj = {};

        vm.openDeleteConfirmation = function(objective) {
            closeObj = objective;
            openConfirmation('Are you sure you want to close ' + objective.title + ' for ' + vm.member.firstName + ' ' + vm.member.lastName + '?', closeObjective);
        };

        function closeObjective() {

            closeObj.closed = true;
            Objectives.update(closeObj);
        }
        vm.openEvaluationModal = function(obj, memberId) {
            $uibModal.open({
                templateUrl: 'app/common/dash/evaluation_modal/evaluation_modal.view.html',
                controller: 'EvaluationModalController as vm',
                size: 'md',
                resolve: {
                    objective: function () {
                        return obj;
                    },
                    memberId: function() {
                        return memberId;
                    }
                }
            });
        }

        vm.openEditEvalModal = function(id){
            $uibModal.open({
                templateUrl: 'app/common/edit_evaluation_modal/edit_evaluation_modal.view.html',
                controller: 'EditEvaluationModalController as vm',
                size: 'md',
                resolve: {
                    selectedItem: function() {
                        return id;
                    }
                }
            });
        };

    }
})();
