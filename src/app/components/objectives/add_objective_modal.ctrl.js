(function() {
    'use strict';

    angular.module('marathon').controller('AddObjectiveController', ctrl);

    function ctrl(Objectives, memberId, owner, $uibModalInstance) {
        var vm = this;
        vm.owner = owner;
        vm.memberId = memberId;

        vm.addObjective = function(owner, memberId, objective) {
            Objectives.createObjective(owner, memberId, objective);
            $uibModalInstance.close();
        };

        vm.reset = function() {
            vm.objective = {};
        };

        vm.dismiss = function() {
            $uibModalInstance.dismiss();
        };

        vm.objectiveFields = Objectives.objectiveFields;
    }
})();
