(function() {
    'use strict';

    angular.module('marathon').controller('userObjectivesController', utc)

    function utc(Objectives) {
        var vm = this;
        vm.newObjective = {};

        Objectives.findObjectives(1).then(function(resp) {
            vm.objectives = resp;
        });

        vm.add = function(title, description, on, over, under) {
            console.log(title, description, on, over, under);

            vm.newObjective = {};
        }

        vm.addObjective = function() {
            vm.newObjective = {
                title: ''
            };
        };

        vm.removeObjective = function() {
            vm.newObjective = {};
        };
    }
})();
