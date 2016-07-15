(function(){
    'use strict';

    angular.module('marathon').service('Session', Session);

    function Session(apiService, localStorageService, Users, crAcl) {
        this.entity = 'session';
        var self = this;

        Users.read().then(function(resp) {
            self.user = resp;
        });

        this.login = function(username, password) {
            crAcl.setRole("ROLE_USER");
            return apiService.create(this.entity, {username:username, password:password})
                    .then(storeUser(self.user));
        };

        this.logout = function() {
            emptyLocalStorage();
            crAcl.setRole("ROLE_GUEST");
            return apiService.delete(this.entity);
        };

        function storeUser(user) {
            localStorageService.set('userObject', user);
        }

        this.getStoredUser = function() {
            return localStorageService.get('userObject');
        };

        this.start = function(token) {
            localStorageService.set('token', token);
            crAcl.setRole("ROLE_USER");
        };

        this.getStoredToken = function() {
            return localStorageService.get('token');
        };

        function emptyLocalStorage() {
            localStorageService.clearAll();
        }

        this.loginFields = [
            {
                key: 'username',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Username',
                    required: true,
                    placeholder: 'Username'
                }
            },
            {
                key: 'password',
                type: 'input',
                templateOptions: {
                    type: 'password',
                    label: 'Password',
                    required: true,
                    placeholder: 'Password must be at least 6 characters long'
                }
            }
        ];
    }
})();
