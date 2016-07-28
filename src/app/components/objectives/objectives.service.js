(function() {
    'use strict';

    angular.module('marathon').service('Objectives', Objectives);

    function Objectives(BaseModel) {
        var model = Object.create(BaseModel);
        model.entity = 'objectives';

        model.objectiveFields = [
            {
                key: 'title',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Title',
                    required: true,
                    placeholder: 'Objective title'
                }
            },
            {
                key: 'general',
                type: 'input',
                templateOptions: {
                    type: 'textarea',
                    label: 'Description',
                    required: true,
                    placeholder: 'Objective description'
                }
            },
            {
                key: 'onTarget',
                type: 'input',
                templateOptions: {
                    type: 'textarea',
                    label: 'On target',
                    required: true,
                    placeholder: 'Specify on target meaning'
                }
            },
            {
                key: 'overachieved',
                type: 'input',
                templateOptions: {
                    type: 'textarea',
                    label: 'Overachieved',
                    required: true,
                    placeholder: 'Specify overachieved meaning'
                }
            },
            {
                key: 'underachieved',
                type: 'input',
                templateOptions: {
                    type: 'textarea',
                    label: 'Underachieved',
                    required: true,
                    placeholder: 'Specify underachieved meaning'
                }
            }
        ];
        return model;
    }
})();
