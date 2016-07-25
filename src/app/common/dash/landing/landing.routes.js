(function() {
	'use strict';

	angular.module('marathon').config(function($stateProvider) {
		$stateProvider.state('dash.landing', {
			url: '',
			templateUrl: 'app/common/dash/landing/landing.view.html',
			controller: 'LandingController as vm',
			data: {
				//is_granted: ["ROLE_USER","ROLE_ADMIN"]
			}
		});
	});
})();
