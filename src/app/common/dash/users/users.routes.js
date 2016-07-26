(function() {
    'use strict';

    angular.module('marathon').config(function($stateProvider) {
        $stateProvider.state('dash.register', {
            url: '/register',
            templateUrl: 'app/common/dash/users/users_register.view.html',
            controller: 'RegisterController as vm'
         });
        $stateProvider.state('dash.manage', {
            url: '/manage/:selectedId',
            templateUrl: 'app/common/dash/users/users_manage.view.html',
            controller: 'ManageController as vm'
        });
        $stateProvider.state('dash.users', {
            url: '/users',
            templateUrl: '/app/common/dash/users/users_list.view.html',
            controller: 'usersListController as vm',
            data: {
                //is_granted: ["ROLE_USER","ROLE_ADMIN"]
            }
        });
    });
})();
