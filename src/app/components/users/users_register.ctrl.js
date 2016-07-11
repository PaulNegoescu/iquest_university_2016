(function() {
    'use strict';

    angular.module('marathon').controller('RegisterController', ctrl);

    function ctrl(Users, $state) {
        var self = this;
        self.user = {};

        this.register = function() {
             console.log(self.user);
             Users.create(self.user).then(function(resp){
                 //console.log(resp);
                 if(resp.status = 200 && resp.statusText == "OK") {
                     $state.go('login');
                 } else {
                     alert('Some freaking error');
                 }
            });
        }


        self.userFields = Users.registerFields;
    };
})();
