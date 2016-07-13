(function(){
    'use strict';

    angular.module('marathon').service('Session', Session);

    function Session(apiService, localStorageService, Users) {
        this.entity = 'session';
        var self = this;

        Users.read().then(function(resp) {
                self.user = resp[0];    
        });

        this.login = function(identifier, password) {
            return apiService.create(this.entity, {identifier:identifier, password:password})
                    .then(storeUser(self.user));
        };

        this.logout = function() {
            return apiService.delete(this.entity);
        };

        function storeUser(user) {
            localStorageService.set('userObject', user);
        }

        this.getStoredUser = function() {
            return localStorageService.get('userObject');
        }

        this.storeToken = function(token) {
            localStorageService.set('token', token);
        }

        this.getStoredToken = function() {
            return localStorageService.get('token');
        }

         this.emptyLocalStorage = function() {
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
                    placeholder: 'Password must be at least 5 characters long'
                }
            }
        ];
    }
})();
