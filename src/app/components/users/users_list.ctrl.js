(function(){
    'use strict';

    angular.module('marathon').controller('usersListController', usersListCtrl);

    function usersListCtrl(Users, $uibModal, $log){
        var self = this;

        Users.read().then(function(result){
            self.users = result;
        });

        this.openConfirmationModal = function(user){
            var modalInstance = $uibModal.open({
                templateUrl: 'app/common/confirm_modal/confirm_modal.view.html',
                controller: 'confirmModalController as vm',
                size: 'md',
                resolve: {
                    message: function () {
                        return 'Are you sure you want to delete user ' + user.firstname + ' ' + user.lastname + '?';
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $log.info('Modal dismissed with OK at:' + new Date());
            }, function () {
                $log.info('Modal dismissed with Cancel at: ' + new Date());
            });
        };
    }

})();
