(function() {
    'use strict';

    angular.module('marathon').controller('RegisterController', ctrl);

    function ctrl(Users, $state) {
        var vm = this;

        vm.reset = function() {
            vm.user = {};
        };

        vm.register = function() {
            delete vm.user.controlPass;

            Users.create(vm.user).then(function() {
                $state.go('users');
            });
        };

        vm.formFields = Users.registerFields;
    }
})();
