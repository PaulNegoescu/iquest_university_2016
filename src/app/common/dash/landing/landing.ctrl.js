(function() {
	'use strict';

	angular.module('marathon').controller('LandingController', LandingController);

	function LandingController(Users, Objectives, Session) {
	    var vm = this;
        var type = "pfm";

        var user = Session.getStoredUser();
        var userId = user.id;

        Users.readPfm(userId, type).then(function(resp) {
            vm.owners = resp;
        });

        Users.readTm(userId, type).then(function(resp) {
            vm.members = resp;
        });

        Objectives.read().then(function(result) {
            vm.objectives = result;
        });
	}
})();
