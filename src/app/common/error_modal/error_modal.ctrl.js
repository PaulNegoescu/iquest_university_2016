(function(){
    'use strict';

    angular.module('marathon').controller('errorModalController', errorModalCtrl);

    function errorModalCtrl($uibModalInstance, message){
        var vm = this;

        vm.message = message;

        vm.ok = function () {
            $uibModalInstance.close();
        };
    }
})();
