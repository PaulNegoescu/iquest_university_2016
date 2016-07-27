(function() {
    'use strict';

    angular.module('marathon').controller('userObjectivesController', utc)

    function utc(Objectives, Session, $stateParams, $uibModal) {
        var vm = this;
        vm.newObjective = {};
        vm.memberId = $stateParams.memberId;
        vm.owner = Session.getStoredUser();

        vm.addObjective = function(){
            $uibModal.open({
                templateUrl: 'app/components/objectives/add_objective_modal.view.html',
                controller: 'AddObjectiveController as vm',
                size: 'md',
                resolve:{
                    memberId: function() {
                        return vm.memberId;
                    },
                    owner: function() {
                        return vm.owner;
                    }
                }
            });
        };
    }
})();
