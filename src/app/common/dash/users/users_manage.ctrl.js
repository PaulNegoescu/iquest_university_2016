(function() {
    'use strict';

    angular.module('marathon').controller('ManageController', ManageController);

    function ManageController(Session, Users, $state, $stateParams) {
        var vm = this;
        vm.user = {};

        var userId = $stateParams.selectedId;

        getUser(userId);

        function getUser(id) {
            Users.findById(id).then(function(resp) {
                vm.user = resp;
            })
        }

        vm.reset = function() {
            vm.user = {};
        };

        vm.token = Session.getStoredToken();

        vm.manage = function() {
            delete vm.user.password;
            delete vm.user.controlPass;

            Users.update(vm.user).then(function(resp, $log) {
                if(resp.status === 200 && resp.statusText === "OK") {
                    $state.go('dash.users');
                } else {
                    $log.warn(resp);
                }
            })
        };

        vm.formFields = Users.registerFields;
    }
})();
