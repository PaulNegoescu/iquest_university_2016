(function(){
    'use strict';

    angular.module('marathon').controller('usersListController', usersListCtrl);

    function usersListCtrl(ConfirmationModal, Users, RolesService, $log, $state, $timeout) {
        var vm = this;

        vm.searchUser = '';
        vm.successMessage = '';

        Users.read().then(function(result) {
            vm.users = result;
        });

        vm.manage = function(user) {
            $state.go('manage', {selectedId : user.id});
        };

        vm.openAssignView = function(user){
            $uibModal.open({
                templateUrl: 'app/components/users/assign_team.view.html',
                controller: 'assignTeamController as vm',
                size: 'md',
                resolve: {
                    selectedItem: function(){
                        return user;
                    }
                }
            });
        };

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

        function removeUser() {
            var id = deleteUser.id;
            var index = vm.users.indexOf(deleteUser);
            Users.delete(id).then(function() {
                vm.users.splice(index, 1);
                vm.successMessage = "The user has been removed successfully!";
                $timeout(function() {
                    vm.hidden = true;
                }, 5000);
            }, function(err) {
                if (err.message) {
                    vm.errorMessage = err.message;
                }
            });
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
