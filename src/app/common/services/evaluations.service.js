(function() {
    'use strict';

    angular.module('marathon').service('Evaluations', Evaluations);

    function Evaluations(apiService) {

        this.entity = 'evaluations';

        this.read = function(objectiveId) {
            return apiService.read(this.entity + '/' + objectiveId);
        };
    }
})();
