(function(){
	'use strict';

	angular.module('marathon').service('RolesService', RolesService);

	function RolesService(apiService) {
		this.entity = 'roles';

		this.read = function() {
			return apiService.read(this.entity);
		};

        this.getRoles = function() {
            var roles = [];

            if(Object.keys(roles).length == 0) {
                return apiService.read(this.entity).then(function(resp) {
                    roles = resp;
                    return roles;
                })
            }
            return roles;
        }
	}
})();
