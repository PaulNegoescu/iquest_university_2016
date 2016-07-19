(function(){
    'use strict';

    angular.module('marathon').controller('confirmModalController', confirmModalCtrl);

    function confirmModalCtrl($uibModalInstance, message, selectedItem){
        var vm = this;

        vm.message = message;

        vm.ok = function () {
            $uibModalInstance.close(selectedItem);
        };

        vm.cancel = function () {
            $uibModalInstance.dismiss();
        };
    }
})();
