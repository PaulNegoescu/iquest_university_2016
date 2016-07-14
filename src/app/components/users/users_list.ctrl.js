(function(){
    'use strict';

    angular.module('marathon').controller('usersListController', usersListCtrl);

    function usersListCtrl(ConfirmationModal, Users, $log) {
        var self = this;

        this.searchUser = '';

        this.shouldShowButtonPfm = true;

        this.shouldShowButtonAdmin = true;

        Users.read().then(function(result) {
            self.users = result;
        });

        function openConfirmation(message, index, cb) {
            ConfirmationModal.openModal(message, index).result.then(function (selectedItem) {
                if(typeof cb === 'function') {
                    cb(selectedItem);
                }
                $log.info('Modal dismissed with OK at:' + new Date());
            }, function () {
                $log.info('Modal dismissed with Cancel at: ' + new Date());
            });
        };

        this.openDeleteConfirmation = function(user, index) {
            openConfirmation('Are you sure you want to delete user ' + user.firstname + ' ' + user.lastname + '?', index, removeUser);
        };

        this.openPfmConfirmation = function(user, index, action) {
            this.shouldShowButtonPfm = false;
            openConfirmation('Are you sure you want to ' + action + ' ' + user.firstname + ' ' + user.lastname + ' as PFM?', index, function(selectedUser) { toggleRole(selectedUser, 'pfm'); });
        };

        this.openAdminConfirmation = function(user, index, action) {
            this.shouldShowButtonAdmin = false;
            openConfirmation('Are you sure you want to ' + action + ' ' + user.firstname + ' ' + user.lastname + ' as ADMIN?', index, function(selectedUser) { toggleRole(selectedUser, 'admin'); });
        };

        function toggleRole(selectedUser, role) {
            var index = self.users[selectedUser].roles.indexOf(role);
            if (index >= 0) {
                self.users[selectedUser].roles.splice(index, 1);
                Users.update(self.users[selectedUser]);
            } else {
                self.users[selectedUser].roles.push(role);
                Users.update(self.users[selectedUser]);
            }
        }

        function removeUser(selectedUser) {
            self.users.splice(selectedUser, 1);
        }

        this.search = function(row) {
            var excludeFromSearch = ['id', '$$hashKey'];
            var result = false;
            for (var key in row) {
                if(excludeFromSearch.indexOf(key) === -1 && !result) {
                    result = (angular.lowercase(row[key]).indexOf(angular.lowercase(self.searchUser) || '') !== -1);
                }
            }
            return result;
        };
    }
})();

