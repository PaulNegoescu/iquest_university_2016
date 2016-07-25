(function() {
	'use strict';

	angular.module('marathon').config(function($stateProvider) {
		$stateProvider.state('dash', {
			url: '/dash',
			templateUrl: 'app/common/dash/dash.view.html',
			controller: 'DashController as vm',
			//abstract: true,
            data: {
                //is_granted: ["ROLE_USER","ROLE_ADMIN"]
            }
		}).state('users', {
            url: '/users',
            templateUrl: 'app/components/users/users_list.view.html',
            controller: 'usersListController as vm',
            data: {
                //is_granted: ["ROLE_ADMIN"]
            }
        }).state('objectives', {
            url:'/objectives',
            templateUrl: 'app/components/users/users_objectives.view.html',
            controller: 'userObjectivesController as vm'
        });
	});
})();
