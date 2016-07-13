(function() {
    'use strict';

    angular.module('marathon').factory('Users', Users);

    function Users(BaseModel) {

        var model = Object.create(BaseModel);
        model.entity = 'users';

        return model;
    }
})();
