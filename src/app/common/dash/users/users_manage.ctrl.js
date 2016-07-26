(function() {
    'use strict';

    angular.module('marathon').controller('ManageController', ManageController);

    function ManageController(Session, RolesService, Users, $state, $stateParams) {
        var vm = this;
        vm.user = {};

        RolesService.getRoles().then(function(resp){

            Users.configureFields(resp);
            vm.formFields = Users.registerFields;
        });

        var userId = $stateParams.selectedId;

        getUser(userId);

        function getUser(id) {
            Users.findById(id).then(function(resp) {
                vm.user = resp;
            });
        }

        vm.reset = function() {
            vm.user = {};
        };

        vm.token = Session.getStoredToken();

        vm.manage = function() {
            delete vm.user.password;
            delete vm.user.controlPass;

            var obj = {};

            if(vm.user.role == 1) {
                obj = {
                    firstName: vm.user.firstName,
                    lastName: vm.user.lastName,
                    username: vm.user.username,
                    email: vm.user.email,
                    password: vm.user.password,
                    role: {
                        id: vm.user.role,
                        name: 'user'
                    }
                }
            } else if (vm.user.role == 2) {
                obj = {
                    firstName: vm.user.firstName,
                    lastName: vm.user.lastName,
                    username: vm.user.username,
                    email: vm.user.email,
                    password: vm.user.password,
                    role: {
                        id: vm.user.role,
                        name: 'admin'
                    }
                }
            }

            Users.update(obj).then(function(resp) {
                    $state.go('dash.users');
            });
        };

        vm.formFields = Users.registerFields;
    }
})();
