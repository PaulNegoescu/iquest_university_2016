(function() {
    'use strict';

    angular.module('marathon').service('BaseModel', BaseModel);

    function BaseModel(apiService) {
        this.entity = '';

        this.create = function(data) {

            return apiService.create(this.entity, data);
        };

        this.read = function() {

            return apiService.read(this.entity);
        };

        this.findById = function(id) {

            return apiService.read(this.entity +'/'+ id);
        };

        this.update = function(data) {
            console.log({
                "user": data
            });
            return apiService.update(this.entity, {
                "user": data
            });
        };

        this.delete = function(id) {
            console.log('baseModel',this.entity + '/' + id);
            return apiService.delete(this.entity + '/' + id);
        };
    }
})();
