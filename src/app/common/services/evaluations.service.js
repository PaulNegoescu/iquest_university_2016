(function() {
    'use strict';

    angular.module('marathon').service('Evaluations', Evaluations);

    function Evaluations(BaseModel) {
        var model = Object.create(BaseModel);
        model.entity = 'evaluations';

        return model;
    }
})();
