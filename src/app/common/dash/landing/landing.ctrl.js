(function() {
	'use strict';

	angular.module('marathon').controller('LandingCtrl', LandingCtrl);

	function LandingCtrl(Relations, Objectives) {
		var vm = this;

		Relations.getTeamMembers().then(function(result) {
            vm.members = result;
        });

        Relations.getPfms().then(function(result) {
            vm.owners = result;
        });

        Objectives.read().then(function(result) {
            vm.objectives = result;
        });
	}
})();
