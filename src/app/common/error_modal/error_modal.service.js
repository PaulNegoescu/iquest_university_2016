(function(){
    'use strict';

    angular.module('marathon').service('ErrorModalService', ErrorService);

    function ErrorService($uibModal) {
        this.openModal = function(message) {
            var modalInstance = $uibModal.open({
                templateUrl: 'app/common/error_modal/error_modal.view.html',
                controller: 'errorModalController as vm',
                windowTopClass: 'modal--danger',
                size: 'md',
                resolve: {
                    message: function () {
                        return message;
                    }
                }
            });
            return modalInstance;
        }
    }
})();
