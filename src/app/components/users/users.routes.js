(function() {
    'use strict';

    angular.module('marathon').config(function($stateProvider) {

        $stateProvider.state('register', {
            url: '/register',
            templateUrl: 'app/components/users/users_register.view.html',
            controller: 'RegisterController as vm'
         });
        $stateProvider.state('manage', {
            url: '/manage',
            templateUrl: 'app/components/users/users_manage.view.html',
            controller: 'ManageController as vm'
        });
        $stateProvider.state('users', {
            url: '/users',
            templateUrl: 'app/components/users/users_list.view.html',
            controller: 'usersListController as vm',
            data: {
                //is_granted: ["ROLE_ADMIN"]
            }
        });
    });
})();
