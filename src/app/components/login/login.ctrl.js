(function(){
    'use strict';

    angular.module('marathon').controller('LoginController', LoginController);

    function LoginController(Session, $state){
        var self = this;

        this.login = function(){
            console.log(this.user.username, this.user.password);
            Session.login(self.user.username, self.user.password).then(function(response){
                if(response.status == 200){

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



