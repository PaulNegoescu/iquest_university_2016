(function() {
    'use strict';

    angular.module('marathon').service('Evaluations', Evaluations);

    function Evaluations(BaseModel) {
        var model = Object.create(BaseModel);
        model.entity = 'evaluations';

        model.getObjective = function (objectiveId) {

            return BaseModel.read(this.entity + '/' + objectiveId);
        };

        model.createObjective = function(objective) {

            return BaseModel.create(this.entity, objective);
        };

        return model;
    }
})();
