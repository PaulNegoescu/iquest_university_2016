(function() {
	'use strict';

	angular.module('marathon').controller('LandingController', LandingController);

	function LandingController(Users, Session, $uibModal) {
	    var vm = this;
        var user = Session.getStoredUser();
        var userId = user.id;
        console.log('dsdasdasda  ' + userId);

        Users.setUser(user);

        Users.readPfm('pfm').then(function(resp) {
            vm.owners = resp;
        });

        Users.readTm('pfm').then(function(resp) {
            vm.members = resp;
        });

        Users.readObjectives(userId).then(function(result){
            vm.userObjectives = result;
            console.log(vm.userObjectives);
        });

        vm.openHistoryModal = function(id){
            $uibModal.open({
                templateUrl: 'app/common/history_modal/history_modal.view.html',
                controller: 'HistoryModalController as vm',
                size: 'md',
                resolve: {
                    selectedItem: function(){
                        return id;
                    }
                }
            });
        };
	}
})();
