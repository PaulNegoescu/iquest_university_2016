(function(){
    'use strict';

    angular.module('marathon').controller('LoginController', LoginController);

    function LoginController(Session, Users, $state){
        var self = this;
        self.user = {};

        this.login = function(){
            Session.login(self.identifier, self.password).then(function(response){
                if(response.status == 200){
                    $state.go('dash');
                }
            });
        };

        this.register = function(){
            $state.go('register');
        };
    }
})();



