(function() {
	'use strict';

	angular.module('marathon').service('ConfirmationModal', ConfirmationModal);

	function ConfirmationModal($uibModal) {
		var self = this;

		this.openModal = function(message, index) {
            var modalInstance = $uibModal.open({
                templateUrl: 'app/common/confirm_modal/confirm_modal.view.html',
                controller: 'confirmModalController as vm',
                size: 'md',
                resolve: {
                    message: function () {
                        return message;
                    },
                    selectedItem: function(){
                        return index;
                    }
                }
            }); 
            return modalInstance;
        }
	}
})();