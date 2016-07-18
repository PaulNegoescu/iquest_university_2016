(function() {
    'use strict';

    angular.module('marathon').factory('Users', Users);

    function Users(BaseModel, $timeout) {

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
                },
                validation: {
                    messages: {
                        required: function(viewValue, modelValue, scope) {
                            return scope.to.label + ' is required';
                        }
                    }
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
                },
                validation: {
                    messages: {
                        required: function(viewValue, modelValue, scope) {
                            return scope.to.label + ' is required';
                        }
                    }
                }
            },
            {
                key: 'username',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Username',
                    required: true,
                    minlength: 3,
                    maxlength: 100,
                    placeholder: 'Username'
                },
                validation: {
                    messages: {
                        required: function(viewValue, modelValue, scope) {
                            return scope.to.label + ' is required';
                        }
                    }
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
                },
                validation: {
                    messages: {
                        required: function(viewValue, modelValue, scope) {
                            return scope.to.label + ' is required';
                        },
                        email: function(viewValue, modelValue, scope) {
                            return "Your entered email is not valid!";
                        }
                    }
                }
            },
            {
                key: 'password',
                type: 'input',
                templateOptions: {
                    type: 'password',
                    label: 'Password',
                    required: true,
                    minlength: 6,
                    maxlength: 100,
                    placeholder: 'Password must be at least 6 characters long'
                },
                validation: {
                    messages: {
                        required: function(viewValue, modelValue, scope) {
                            return scope.to.label + ' is required';
                        },
                        minlength: function(viewValue, modelValue, scope) {
                            return 'Password must be ' + scope.to.minlength + ' characters long';
                        }
                    }
                }
            },
            {
                key: 'controlPass',
                type: 'input',
                templateOptions: {
                    type: 'password',
                    label: 'Confirm your password',
                    required: true,
                    minlength: 6,
                    maxlength: 100,
                    placeholder: 'Re-enter password'
                },
                expressionProperties: {
                    "templateOptions.disabled" : function(viewValue, modelValue, scope) {
                        return $timeout(function() {
                            return !scope.model.password;
                        }, 1000);
                    }
                },
                validators: {
                    passwordMatch: {
                        expression: function(viewValue, modelValue, scope){
                            return modelValue === scope.model["password"];
                        },
                        message: function() {
                            return "Passwords don't match!"
                        }
                    }
                }
            }
        ];

        return model;
    }
})();
