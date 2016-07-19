(function() {
    'use strict';

    angular.module('marathon').controller('ManageController', ManageController);

    function ManageController(Session, Users, $state) {
        var vm = this;

        vm.reset = function() {
            vm.user = {};
        };

        vm.token = Session.getStoredToken();

        vm.manage = function() {
            delete vm.user.password;
            delete vm.user.controlPass;

            Users.update(vm.user).then(function(resp, $log) {
                if(resp.status === 200 && resp.statusText === "OK") {
                    $state.go('users');
                } else {
                    $log.warn(resp);
                }
            });
        };

        vm.formFields = Users.registerFields;
    }
})();
