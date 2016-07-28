(function(){
    'use strict';

    angular.module('marathon').controller('EvaluationModalController', EvaluationModalController);

    function EvaluationModalController($uibModalInstance, Evaluations, memberId, objective, Users) {
        var vm = this;
        vm.objective = objective;
        vm.evaluation = {};

        Users.findById(memberId).then(function(response){
            vm.member = response;
        });

        vm.save = function () {
            vm.evaluation.objectiveId = vm.objective.id;
            Evaluations.createObjective(vm.evaluation);
            $uibModalInstance.close();
        };

        vm.cancel = function () {
            $uibModalInstance.dismiss();
        };

    }
})();
