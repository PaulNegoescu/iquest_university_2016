(function(){
    'use strict';

    angular.module('marathon').controller('LoginController', LoginController);

    function LoginController(Session, $state){
        var self = this;

        this.login = function(){
            Session.login(self.identifier, self.password).then(function(response){
                if(response.status == 200){

                    crAcl.setRole("ROLE_USER");
                    Session.start(response.token);
                    $state.go('dash');
                }
            });
        };

        this.register = function(){
            $state.go('register');
        };
        self.userFields = Session.loginFields;
    }
})();



