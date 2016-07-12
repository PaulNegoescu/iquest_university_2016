(function() {
    'use strict';

    angular.module('marathon').config(function($stateProvider) {

        $stateProvider.state('users', {
            url: '/users',
            templateUrl: 'app/components/users/users_list.view.html',
            controller: 'usersListController as vm'
        });
    });
})();
