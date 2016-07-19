(function(){
	'use strict';

	angular.module('marathon').service('RolesService', RolesService);

	function RolesService(apiService) {
		this.entity = 'roles';

		this.read = function() {
			return apiService.read(this.entity);
		};
	}
})();