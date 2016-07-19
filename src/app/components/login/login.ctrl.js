(function(){
    'use strict';

    angular.module('marathon').controller('LoginController', LoginController);

    function LoginController(Session, $state){
        var vm = this;

        vm.login = function(){
            Session.login(vm.user.username, vm.user.password).then(function(response){
                if(response.status == 200){
                    Session.start(response.token);
                    $state.go('dash');
                }
            });
        };
        
        vm.userFields = Session.loginFields;
    }
})();



