(function(){
    'use strict';

    angular.module('marathon').controller('LoginController', LoginController);

    function LoginController(Session, $state){
        var vm = this;

        vm.login = function(){
            Session.login(vm.user.username, vm.user.password).then(function(resp) {
                if(resp.status == 200) {
                    $state.go('dash');
                }
            })
        };

        vm.userFields = Session.loginFields;
    }
})();



