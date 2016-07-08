(function() {
	'use strict';

	angular.module('marathon').service('apiService', ['$http', 'config_api', apiService]);
	function apiService($http, config_api) {
		var url = 'config_api' + '/';

		this.create = function(endpoint, data) {
			return this.post(url + endpoint, data);
		};

		this.read = function(endpoint) {
			return this.get(url + endpoint).then(extractData);
		};

		this.update = function(endpoint, data) {
			return this.put(url + endpoint, data);
		};

		this.delete = function(endpoint) {
			return this.delete(url + endpoint);
		};

		function extractData(response) {
			return response.data;
		}
	}
})();
