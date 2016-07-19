(function() {
    'use strict';

    angular.module('marathon').factory('Objectives', Objectives);

    function Objectives(BaseModel) {

        var model = Object.create(BaseModel);
        model.entity = 'objectives';

        return model;
    }
})();
