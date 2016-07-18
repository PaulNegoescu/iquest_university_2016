(function() {
	'use strict';

	angular.module('marathon').controller('LandingCtrl', LandingCtrl);

	function LandingCtrl(Relations) {
		var self = this;

		Relations.getTeamMembers().then(function(result) {
            self.members = result;
            console.log(self.members);
        });

        Relations.getPfms().then(function(result) {
            self.owners = result;
            console.log(self.owners);
        });
	}
})();