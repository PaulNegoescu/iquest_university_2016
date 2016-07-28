(function() {
    'use strict';

    angular.module('marathon').service('Objectives', Objectives);

    function Objectives(apiService) {

        this.entity = 'objectives';

        this.createObjective = function(owner, memberId, objective) {
            var data = {
                title: objective.title,
                ownerId: owner.id,
                memberId: memberId,
                descriptions: [
                    {
                        type: 'general',
                        text: objective.general
                    },
                    {
                        type: 'on target',
                        text: objective.onTarget
                    },
                    {
                        type: 'overachieved',
                        text: objective.overachieved
                    },
                    {
                        type: 'underachieved',
                        text: objective.underachieved
                    }
                ]
            };

            return apiService.create(this.entity, data);
        };

        this.updateObjective = function(data) {

            return apiService.update(this.entity, data);
        };

        this.objectiveFields = [
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
    }
})();
