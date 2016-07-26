(function(){
    'use strict';

    angular.module('marathon').controller('LoginController', LoginController);

    function LoginController(Session, $state){
        var vm = this;

        vm.errorMessage = '';

        vm.login = function(){
            Session.login(vm.user.username, vm.user.password).then(function() {
                $state.go('dash.landing');
            }, function(err) {
                if (err.message) {
                    vm.errorMessage = err.message;
                }
            });
        };

        vm.userFields = Session.loginFields;
    }
})();



