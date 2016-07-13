(function() {
    'use strict';

    angular.module('marathon').controller('RegisterController', ctrl);

    function ctrl(Users, $state) {
        var self = this;
        self.user = {};

        this.register = function() {
            delete self.user.controlPass;

            Users.create(self.user).then(function(resp, $log) {
                if(resp.status === 200 && resp.statusText === "OK") {
                    $state.go('login');
                } else {
                    $log.warn(resp);
                }
            });
        };

        this.reset = function() {
            self.user = {};
        };

        self.formFields = Users.registerFields;
    }
})();
