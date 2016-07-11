(function(){
    'use strict';

    angular.module('marathon').controller('LoginController', LoginController);

    function LoginController(Session, $state){
        var self = this;
<<<<<<< Updated upstream
=======
        self.user = {};

>>>>>>> Stashed changes
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

        self.userFields = [
            {
                key: 'username',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'User Name',
                    required: true,
                    minlength: 1,
                    maxlength: 100,
                    placeholder: 'User Name'
                }
            },
            {
                key: 'password',
                type: 'input',
                templateOptions: {
                    type: 'password',
                    label: 'Password',
                    required: true,
                    minlength: 5,
                    maxlength: 100,
                    placeholder: 'Password must be at least 5 characters long'
                }
            }
        ]
    }
})();



