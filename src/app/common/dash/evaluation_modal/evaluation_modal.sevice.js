(function() {
    'use strict';

    angular.module('marathon').service('EvaluationModal', EvaluationModal);

    function EvaluationModal(BaseModel) {
        var model = Object.create(BaseModel);

        model.entity = 'evaluations';

        model.readObjectivesForEvaluation = function(id){
            return this.read(this.entity + '/' + id + '/objectives');
        };
    }
})();
