(function(){
    'use strict';

    angular.module('marathon').controller('LoginController', LoginController);

    function LoginController(Session){
        var vm = this;

        vm.login = function(){
            Session.login(vm.user.username, vm.user.password);
        };

        vm.userFields = Session.loginFields;
    }
})();



