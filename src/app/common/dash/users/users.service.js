(function() {
    'use strict';

    angular.module('marathon').factory('Users', Users);

    function Users(BaseModel, $timeout) {

        var model = Object.create(BaseModel);
        model.entity = 'users';

        model.setUser = function(param) {
            model.userId = param.id;
        };

        model.readPfm = function(type) {
            return this.read(this.entity + '/' + model.userId + '/owners', type);
        };

        model.readTm = function(type) {
            return this.read(this.entity + '/' + model.userId + '/members', type);
        };

        model.readObjectives = function(id){
            return this.read(this.entity + '/' + id + '/objectives');
        };

        model.configureFields = function(roles) {
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
                            email: function() {
                                return "Your entered email is not valid!";
                            }
                        }
                    }
                },
                {
                    key: "role",
                    type: "select",
                    defaultValue: roles[0],
                    templateOptions: {
                        label: "Role",
                        required: true,
                        options: roles,
                        ngOptions: "option as option.name for option in to.options track by option.id"
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
                    validators: {
                        password: function(viewValue, modelValue) {
                            var val = viewValue || modelValue;
                            if(val) {
                                return validatePass(val);
                            }
                        }
                    },
                    validation: {
                        messages: {
                            required: function(viewValue, modelValue, scope) {
                                return scope.to.label + ' is required';
                            },
                            minlength: function(viewValue, modelValue, scope) {
                                return 'Password must be ' + scope.to.minlength + ' characters long';
                            },
                            password: function () {
                                return 'Password must contain A-z, 0-9';
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
                                var value = viewValue || modelValue;
                                    if(value) {
                                        return modelValue === scope.model["password"];
                                    }
                            },
                            message: function() {
                                return "Passwords don't match!"
                            }
                        }
                    }
                }
            ];

            function validatePass(val) {
                return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/.test(val);
            }
        };

    return model;
    }
})();
