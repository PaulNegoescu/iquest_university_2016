(function() {
    'use strict';

    angular.module('marathon').config(function($stateProvider) {

        $stateProvider.state('dash.users', {
            url: '/users',
            template: '<div ui-view>',
            abstract: true
        });

        $stateProvider.state('dash.users.objectives', {
            url:'/objectives/:memberId',
            templateUrl: 'app/components/objectives/users_objectives.view.html',
            controller: 'userObjectivesController as vm'
        });

        $stateProvider.state('dash.users.list', {
            url: '',
            templateUrl: 'app/common/dash/users/users_list.view.html',
            controller: 'usersListController as vm',
            data: {
                //is_granted: ["ROLE_USER","ROLE_ADMIN"]
            }
        });

        $stateProvider.state('dash.users.register', {
            url: '/register',
            templateUrl: 'app/common/dash/users/users_register.view.html',
            controller: 'RegisterController as vm'
        });

        $stateProvider.state('dash.users.manage', {
            url: '/manage/:selectedId',
            templateUrl: 'app/common/dash/users/users_manage.view.html',
            controller: 'ManageController as vm'
        });
    });
})();
