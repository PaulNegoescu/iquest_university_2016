(function() {
	'use strict';

	angular.module('marathon').controller('LandingController', LandingController);

	function LandingController(Users, Session, $uibModal) {
        var vm = this;
        var user = Session.getStoredUser();
        var userId = user.id;

        var objType = {
            type: 'pfm'
        };

        Users.setUser(user);

        Users.readPfm(objType).then(function(resp) {
            vm.owners = resp;
        });

        Users.readTm(objType).then(function(resp) {
            vm.members = resp;
        });

        Users.readObjectives(userId).then(function(result){
            vm.userObjectives = result;
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
