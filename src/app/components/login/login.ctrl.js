(function(){
    'use strict';

    angular.module('marathon').controller('LoginController', LoginController);

    function LoginController(Session, $state, crAcl){
        var self = this;
        crAcl.setRole("ROLE_GUEST");

        this.login = function(){
            Session.login(self.identifier, self.password).then(function(response){
                if(response.status == 200){
                    Session.storeToken(response.data.token);

                    crAcl.setRole("ROLE_USER");
                    
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



