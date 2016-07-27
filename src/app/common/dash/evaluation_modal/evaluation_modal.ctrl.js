(function(){
    'use strict';

    angular.module('marathon').controller('evaluationModalController', evaluationModalCtrl);

    function evaluationModalCtrl($uibModalInstance, $state, Evaluations) {
        var vm = this;

        vm.save = function () {
            Evaluations.create().then(function() {
                $state.go('dash.landing');
            });
            $uibModalInstance.close();
        };

        vm.cancel = function () {
            $uibModalInstance.dismiss();
        };


    }
})();
