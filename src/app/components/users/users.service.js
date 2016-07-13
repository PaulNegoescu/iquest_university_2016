(function() {
    'use strict';

    angular.module('marathon').factory('Users', Users);

    function Users(BaseModel) {

        var model = Object.create(BaseModel);
        model.entity = 'users';

        model.loginFields = [
            {
                key: 'username',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'User Name',
                    required: true,
                    minlength: 1,
                    maxlength: 100,
                    placeholder: 'User Name'
                }
            },
            {
                key: 'password',
                type: 'input',
                templateOptions: {
                    type: 'password',
                    label: 'Password',
                    required: true,
                    minlength: 5,
                    maxlength: 100,
                    placeholder: 'Password must be at least 5 characters long'
                }
            }
        ];
        return model;
    }
})();
