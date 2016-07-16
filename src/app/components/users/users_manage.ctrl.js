(function() {
    'use strict';

    angular.module('marathon').controller('ManageController', ManageController);

    function ManageController(Session, Users, $state) {
        var self = this;

        this.reset = function() {
            self.user = {};
        };

        this.token = Session.getStoredToken();

        this.manage = function() {
            delete self.user.password;
            delete self.user.controlPass;

            Users.update(this.token, self.user).then(function(resp, $log) {
                if(resp.status === 200 && resp.statusText === "OK") {
                    $state.go('users');
                } else {
                    $log.warn(resp);
                }
            });
        };

        self.formFields = Users.registerFields;
    }
})();
