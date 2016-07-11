(function() {
    'use strict';

    angular.module('marathon').factory('Users', Users)

    function Users(BaseModel) {

        var model = Object.create(BaseModel);
        model.entity = 'users';

        model.registerFields = [
            {
                key: 'firstName',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'First Name',
                    required: true,
                    minlength: 1,
                    maxlength: 100,
                    placeholder: 'First Name'
                }
            },
            {
                key: 'lastName',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Last Name',
                    required: true,
                    minlength: 1,
                    maxlength: 100,
                    placeholder: 'Last Name'
                }
            },
            {
                key: 'userName',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Username',
                    required: true,
                    minlength: 3,
                    maxlength: 100,
                    placeholder: 'Username'
                }
            },
            {
                key: 'email',
                type: 'input',
                templateOptions: {
                    type: 'email',
                    label: 'Email address',
                    required: true,
                    placeholder: 'Enter email'
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
            },
            {
                key: 'controlPass',
                type: 'input',
                templateOptions: {
                    type: 'password',
                    label: 'Confirm your password',
                    required: true,
                    minlength: 5,
                    maxlength: 100,
                    placeholder: 'Re-enter password'
                },
                 validators: {
                    passwordMatch: {
                        expression: function(viewValue, modelValue, scope){
                            return modelValue === scope.model["password"];
                        }
                    }
                }
            }
        ];

        return model;
    }
})();
