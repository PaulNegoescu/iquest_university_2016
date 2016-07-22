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
            });
        }

        vm.reset = function() {
            vm.user = {};
        };

        vm.token = Session.getStoredToken();

        vm.manage = function() {
            delete vm.user.password;
            delete vm.user.controlPass;

            Users.update(vm.user).then(function() {
                $state.go('users');
            });
        }

        vm.formFields = Users.registerFields;
    }
})();
