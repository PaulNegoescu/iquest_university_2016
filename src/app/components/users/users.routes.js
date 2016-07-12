(function() {
    'use strict';

    angular.module('marathon').config(function($stateProvider) {
         $stateProvider.state('register', {
            url: '/register',
            templateUrl: 'app/components/users/users_register.view.html',
            controller: 'RegisterController as vm'
        });
    });
})();
