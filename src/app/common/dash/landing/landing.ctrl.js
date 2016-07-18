(function() {
	'use strict';

	angular.module('marathon').controller('LandingCtrl', LandingCtrl);

	function LandingCtrl(Relations) {
		var self = this;

		Relations.getTeamMembers().then(function(result) {
            self.members = result;
        });

        Relations.getPfms().then(function(result) {
            self.owners = result;
        });
	}
})();