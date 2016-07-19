(function() {
	'use strict';

	angular.module('marathon').service('apiService', apiService);
	function apiService($http, config_api) {
		var url = config_api + '/';

        this.setToken = function (token) {
            $http.defaults.headers.common = {
                'Session-Token': token
            };
        };

        this.removeToken = function () {
            $http.defaults.headers.common = {};
        };

		this.create = function(endpoint, data) {
			return $http.post(url + endpoint, data);
		};

		this.read = function(endpoint, data) {
            var config = {
                params:data
            };
			return $http.get(url + endpoint, config).then(extractData);
		};

		this.update = function(endpoint, data) {
			return $http.put(url + endpoint, data);
		};

		this.delete = function(endpoint) {
            console.log(endpoint);
			return $http.delete(url + endpoint);
		};

		function extractData(response) {
			return response.data;
		}
	}
})();
