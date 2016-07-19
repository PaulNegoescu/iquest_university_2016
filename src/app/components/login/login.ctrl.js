(function(){
    'use strict';

    angular.module('marathon').controller('LoginController', LoginController);

    function LoginController(Session, $state){
        var self = this;

        this.login = function(){
            Session.login(self.user.username, self.user.password)
        };

        self.userFields = Session.loginFields;
    }
})();



