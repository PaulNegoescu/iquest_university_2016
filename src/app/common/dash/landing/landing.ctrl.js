(function() {
	'use strict';

	angular.module('marathon').controller('LandingController', LandingController);

	function LandingController(Relations) {
		var vm = this;

		Relations.getTeamMembers().then(function(result) {
            vm.members = result;
        });

        Relations.getPfms().then(function(result) {
            vm.owners = result;
        });
	}
})();