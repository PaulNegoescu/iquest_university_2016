(function() {
    'use strict';

    angular.module('marathon').controller('RegisterController', ctrl);

    function ctrl(RolesService, Users, $state) {
        var vm = this;

        RolesService.getRoles().then(function(resp) {
            Users.configureFields(resp);
            vm.formFields = Users.registerFields;
        });

        vm.reset = function() {
            vm.user = {};
        };

        vm.register = function() {
            delete vm.user.controlPass;

            Users.create(vm.user).then(function() {
                    $state.go('dash.users.list');
            });
        };
    }
})();
