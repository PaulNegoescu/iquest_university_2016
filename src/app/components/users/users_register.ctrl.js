(function() {
    'use strict';

    angular.module('marathon').controller('RegisterController', ctrl);

    function ctrl(RolesService, Users, $state, $q) {
        var vm = this;
        var deffered = $q.defer();

        RolesService.getRoles().then(function(resp){
            deffered.resolve(resp);
            var data = deffered.promise.$$state.value;
            Users.configureFields(data);
            vm.formFields = Users.registerFields;
        });

        vm.reset = function() {
            vm.user = {};
        };

        vm.register = function() {
            delete vm.user.controlPass;

            Users.create(vm.user).then(function(resp, $log) {
                if(resp.status === 200 && resp.statusText === "OK") {
                    $state.go('users');
                } else {
                    $log.warn(resp);
                }
            });
        };
    }
})();
