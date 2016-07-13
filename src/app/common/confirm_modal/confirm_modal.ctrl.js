(function(){
    'use strict';

    angular.module('marathon').controller('confirmModalController', confirmModalCtrl);

    function confirmModalCtrl($uibModalInstance, message, selectedItem){
        var self = this;

        this.message = message;

        this.ok = function () {
            $uibModalInstance.close(selectedItem);
        };

        this.cancel = function () {
            $uibModalInstance.dismiss();
        };
    }
})();
