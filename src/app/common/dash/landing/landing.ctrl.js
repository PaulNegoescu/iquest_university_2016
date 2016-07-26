(function() {
	'use strict';

	angular.module('marathon').controller('LandingController', LandingController);

	function LandingController(Users, Objectives, Session) {
	    var vm = this;

        var user = Session.getStoredUser();

        Users.setUser(user);

        Users.readPfm('pfm').then(function(resp) {
            vm.owners = resp;
        });

        Users.readTm('pfm').then(function(resp) {
            vm.members = resp;
        });

        Objectives.read().then(function(result) {
            vm.objectives = result;
        });
	}
})();
