(function() {
	'use strict';

	angular.module('marathon').config(function($stateProvider) {
		$stateProvider.state('dash', {
			url: '/dash',
			templateUrl: 'app/common/dash/dash.view.html',
			controller: 'DashController as vm'
		});
	});
})();