(function() {
    'use strict';

    angular.module('marathon').controller('RegisterController', ctrl);

    function ctrl(RolesService, Users, $state) {
        var vm = this;

        RolesService.getRoles().then(function(resp){

            Users.configureFields(resp);
            vm.formFields = Users.registerFields;
        });

        vm.reset = function() {
            vm.user = {};
        };

        vm.register = function() {
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

            Users.create(obj).then(function(resp, $log) {
                if(resp.status === 200) {
                    $state.go('dash.users');
                } else {
                    $log.warn(resp);
                }
            });
        };
    }
})();
