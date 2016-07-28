(function() {
    'use strict';

    angular.module('marathon').service('BaseModel', BaseModel);

    function BaseModel(apiService) {
        this.entity = '';

        this.create = function(data) {

            return apiService.create(data || this.entity);
        };

        this.read = function(url) {

            return apiService.read(url || this.entity);
        };

        this.findById = function(id) {

            return apiService.read(this.entity +'/'+ id);
        };

        this.update = function(data) {

            return apiService.update(this.entity, data);
        };

        this.delete = function(id) {
            return apiService.delete(this.entity + '/' + id);
        };
    }
})();
