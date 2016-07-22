(function() {
    'use strict';

    angular.module('marathon').service('apiService', apiService);
    function apiService($http, config_api, $log, ErrorModalService) {
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
            $log.info('[apiService] API call initiated with method %s, to endpoint: %s with data:', 'POST', endpoint, data);
            return $http.post(url + endpoint, data).then(handleSuccess, handleErrors);
        };

        this.read = function(endpoint, data) {
            var config = {
                params:data
            };
            $log.info('[apiService] API call initiated with method %s, to endpoint: %s with data:', 'GET', endpoint, data);
            return $http.get(url + endpoint, config).then(handleSuccess, handleErrors);
        };

        this.update = function(endpoint, data) {
            $log.info('[apiService] API call initiated with method %s, to endpoint: %s with data:', 'PUT', endpoint, data);
            return $http.put(url + endpoint, data).then(handleSuccess, handleErrors);
        };

        this.delete = function(endpoint) {
            $log.info('[apiService] API call initiated with method %s, to endpoint: %s:', 'DELETE', endpoint);
            return $http.delete(url + endpoint).then(handleSuccess, handleErrors);
        };

        function extractData(response) {
            return response.data;
        }

        function handleSuccess(response) {
            return extractData(response);
        }

        function handleErrors(response) {
            switch(response.status) {
                case 404:
                case 500:
                    ErrorModalService.openModal('There was a problem comunicating with the server, please try again later.');
                    break;
            }

            $log.warn('[apiService] Error during http call:', response);
            response = extractData(response);
            throw response;
        }
    }
})();
