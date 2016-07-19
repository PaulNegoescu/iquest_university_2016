(function(){
    'use strict';

    angular.module('marathon').service('Session', Session);

    function Session(apiService, localStorageService, Users, crAcl) {
        this.entity = 'session';
        var vm = this;

        vm.login = function(username, password) {
            crAcl.setRole("ROLE_USER");
            return apiService.create(vm.entity, {username:username, password:password})
                    .then(function (response) {
                        storeUser(response.data.user);
                        start(response.data.token);
                        apiService.setToken(response.data.token);
                        return response;
                    });
        };

        vm.logout = function() {
            emptyLocalStorage();
            crAcl.setRole("ROLE_GUEST");
            apiService.removeToken();
            return apiService.delete(vm.entity);
        };

        function storeUser(user) {
            localStorageService.set('userObject', user);
        }

        vm.getStoredUser = function() {
            return localStorageService.get('userObject');
        };

        function start(token) {
            localStorageService.set('token', token);
            crAcl.setRole("ROLE_USER");
        }

        vm.getStoredToken = function() {
            return localStorageService.get('token');
        };

        function emptyLocalStorage() {
            localStorageService.clearAll();
        }

        vm.loginFields = [
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
