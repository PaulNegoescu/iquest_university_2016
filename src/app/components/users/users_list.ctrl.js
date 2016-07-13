(function(){
    'use strict';

    angular.module('marathon').controller('usersListController', usersListCtrl);

    function usersListCtrl(Users, $uibModal, $log){
        var self = this;

        this.searchUser = '';

        Users.read().then(function(result){
            self.users = result;
        });

        this.openConfirmationModal = function(user, index){
            var modalInstance = $uibModal.open({
                templateUrl: 'app/common/confirm_modal/confirm_modal.view.html',
                controller: 'confirmModalController as vm',
                size: 'md',
                resolve: {
                    message: function () {
                        return 'Are you sure you want to delete user ' + user.firstname + ' ' + user.lastname + '?';
                    },
                    selectedItem: function(){
                        return index;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                removeUser(selectedItem);
                $log.info('Modal dismissed with OK at:' + new Date());
            }, function () {
                $log.info('Modal dismissed with Cancel at: ' + new Date());
            });
        };

        function removeUser(selectedUser){
            self.users.splice(selectedUser, 1);
        }

        this.search = function(row){
            var excludeFromSearch = ['id', '$$hashKey'];
            var result = false;
            for (var key in row) {
                if(excludeFromSearch.indexOf(key) === -1 && !result) {
                    result = (angular.lowercase(row[key]).indexOf(angular.lowercase(self.searchUser) || '') !== -1);
                }
            }
            return result;
        }
    }


})();
