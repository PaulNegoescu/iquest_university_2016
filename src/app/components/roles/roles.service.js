(function(){
	'use strict';

	angular.module('marathon').service('RolesService', RolesService);

	function RolesService(apiService, $q) {
		this.entity = 'roles';

		this.read = function() {
			return apiService.read(this.entity);
		};

        this.getRoles = function() {
            var roles = [];
            var deffered = $q.defer();

            if(Object.keys(roles).length == 0) {
                return apiService.read(this.entity).then(function(resp) {
                    deffered.resolve(resp);
                    roles = deffered.promise;
                    return roles;
                })
            }
        }
	}
})();
