(function(){
    'use strict';

    angular.module('marathon').controller('LoginController', LoginController);

    function LoginController(Session, $state){
        var vm = this;

        vm.login = function(){
            Session.login(vm.user.username, vm.user.password);
            $state.go('dash.landing');
        };

        vm.userFields = Session.loginFields;
    }
})();



