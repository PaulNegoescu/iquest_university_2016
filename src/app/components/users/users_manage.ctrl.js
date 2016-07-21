(function() {
    'use strict';

    angular.module('marathon').controller('ManageController', ManageController);

    function ManageController(Session, RolesService, Users, $state, $q, $stateParams) {
        var vm = this;
        var deffered = $q.defer();
        vm.user = {};

         RolesService.getRoles().then(function(resp){
            deffered.resolve(resp);
            var data = deffered.promise.$$state.value;
            Users.configureFields(data);
            vm.formFields = Users.registerFields;
        });

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
                    $state.go('users');
                } else {
                    $log.warn(resp);
                }
            })
        }
    }
})();
