(function() {
    'use strict';

    angular
        .module('marathon')
        .controller('DashController', DashController);

    function DashController(Session, $state) {
        var vm = this;

        vm.shouldShowMenuContent = false;

        vm.logout = function() {
            Session.logout().then(function() {
                $state.go('login');
            });
        };

        vm.user = Session.getStoredUser();
        vm.token = Session.getStoredToken();

        vm.toggleMenuVisibility = function() {
            vm.shouldShowMenuContent = !vm.shouldShowMenuContent;
        };
    }
})();




