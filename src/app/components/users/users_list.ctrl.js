(function(){
    'use strict';

    angular.module('marathon').controller('usersListController', usersListCtrl);

    function usersListCtrl(ConfirmationModal, Users, RolesService, $log) {
        var self = this;

        this.searchUser = '';

        Users.read().then(function(result) {
            self.users = result;
        });

        RolesService.read().then(function(result) {
            self.roles = result;
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
            openConfirmation('Are you sure you want to delete user ' + user.firstName + ' ' + user.lastName + '?', index, removeUser);
        };

        this.openAdminConfirmation = function(user, index, action) {
            openConfirmation('Are you sure you want to ' + action + ' ' + user.firstName + ' ' + user.lastName + ' as ADMIN?', index, function(selectedUser) { toggleRole(selectedUser, self.roles[0].id, self.roles[0].name, self.roles[1].id, self.roles[1].name); });
        };

        function toggleRole(selectedUser, id, role, modified_id, modified_role) {
            var user_id = self.users[selectedUser].role.id;
            var user_role = self.users[selectedUser].role.name;

            if (user_id == id && user_role == role) {
                self.users[selectedUser].role = {
                    "id": modified_id,
                    "name": modified_role 
                };
                Users.update(self.users[selectedUser]);
            } else {
                self.users[selectedUser].role = {
                    "id": id,
                    "name": role 
                };
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

