(function(){
    'use strict';

    angular.module('marathon').service('Session', Session);

    function Session(apiService, localStorageService, Users, crAcl) {
        this.entity = 'session';
        var self = this;

        this.login = function(username, password) {
            crAcl.setRole("ROLE_USER");
            return apiService.create(this.entity, {username:username, password:password})
                    .then(function (response) {
                        storeUser(response.data.user);
                        start(response.data.token);
                        console.log(response.data);
                        apiService.setToken(response.data.token);
                    });
        };

        this.logout = function() {
            emptyLocalStorage();
            crAcl.setRole("ROLE_GUEST");
            apiService.removeToken();
            return apiService.delete(this.entity);
        };

        function storeUser(user) {
            localStorageService.set('userObject', user.user);
        }

        this.getStoredUser = function() {
            return localStorageService.get('userObject');
        };

        function start(token) {
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
