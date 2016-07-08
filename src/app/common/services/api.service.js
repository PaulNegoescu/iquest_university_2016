(function() {
	'use strict';

	angular.module('marathon').service('apiService', ['$http', 'config_api', apiService]);
	function apiService($http, config_api) {
		var url = config_api + '/';

		this.create = function(endpoint, data) {
			return $http.post(url + endpoint, data);
		};

		this.read = function(endpoint) {
			return $http.get(url + endpoint).then(extractData);
		};

		this.update = function(endpoint, data) {
			return $http.put(url + endpoint, data);
		};

		this.delete = function(endpoint) {
			return $http.delete(url + endpoint);
		};

		function extractData(response) {
			return response.data;
		}
	}
})();