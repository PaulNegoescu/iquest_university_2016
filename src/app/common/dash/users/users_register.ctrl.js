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

            Users.create(vm.user).then(function(resp, $log) {
                if(resp.status === 200 && resp.statusText === "OK") {
                    $state.go('dash.users');
                } else {
                    $log.warn(resp);
                }
            });
        };

        vm.formFields = Users.registerFields;
    }
})();
