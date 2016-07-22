(function() {
    'use strict';

    angular.module('marathon').service('Objectives', Objectives);

    function Objectives(apiService) {

        this.entity = 'objectives';

        this.createObjectives = function(data) {

            return apiService.create(this.entity, data);
        }

        this.updateObjective = function(data) {

            return apiService.update(this.entity, data);
        }

        this.getObjectives = function() {

            return apiService.read(this.entity);
        }

        this.findObjectives = function(memberId) {

            return apiService.read(this.entity + '/' + memberId);
        }
    }
})();
