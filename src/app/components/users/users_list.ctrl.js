(function(){
    'use strict';

    angular.module('marathon').controller('usersListController', usersListCtrl);

    function usersListCtrl(ConfirmationModal, Users, RolesService, $log, $state) {
        var vm = this;

        vm.searchUser = '';

        Users.read().then(function(result) {
            vm.users = result;
        });

        vm.manage = function(user) {
            $state.go('manage', {selectedId : user.id});
        };

        RolesService.read().then(function(result) {
            vm.roles = result;
        });

        function openConfirmation(message, index, cb) {
            ConfirmationModal.openModal(message, index).result.then(function (selectedItem) {
                if(angular.isFunction(cb)) {
                    cb(selectedItem);
                }
                $log.info('Modal dismissed with OK at:' + new Date());
            }, function () {
                $log.info('Modal dismissed with Cancel at: ' + new Date());
            });
        }
        var deleteUser;
        vm.openDeleteConfirmation = function(user, index) {
            deleteUser = user;
            openConfirmation('Are you sure you want to delete user ' + user.firstName + ' ' + user.lastName + '?', index, removeUser);
        };

        vm.openAdminConfirmation = function(user, index, action) {
            openConfirmation('Are you sure you want to ' + action + ' ' + user.firstName + ' ' + user.lastName + ' as ADMIN?', index, function(selectedUser) { toggleRole(selectedUser, vm.roles[0].id, vm.roles[0].name, vm.roles[1].id, vm.roles[1].name); });
        };

        function toggleRole(selectedUser, id, role, modified_id, modified_role) {
            var user_id = vm.users[selectedUser].role.id;
            var user_role = vm.users[selectedUser].role.name;

            if (user_id == id && user_role == role) {
                vm.users[selectedUser].role = {
                    "id": modified_id,
                    "name": modified_role
                };
                Users.update(vm.users[selectedUser]);
            } else {
                vm.users[selectedUser].role = {
                    "id": id,
                    "name": role
                };
                Users.update(vm.users[selectedUser]);
            }
        }

        function removeUser() {
            var id = deleteUser.id;
            var index = vm.users.indexOf(deleteUser);
            Users.delete(id).then(function(resp) {
                if(resp.status == 200) {
                    vm.users.splice(index, 1);
                }
            })
        }

        vm.search = function(row) {
            var excludeFromSearch = ['id', '$$hashKey'];
            var result = false;
            for (var key in row) {
                if(excludeFromSearch.indexOf(key) === -1 && !result) {
                    result = (angular.lowercase(row[key]).indexOf(angular.lowercase(vm.searchUser) || '') !== -1);
                }
            }
            return result;
        };

        vm.register = function(){
            $state.go('register');
        };
    }
})();

