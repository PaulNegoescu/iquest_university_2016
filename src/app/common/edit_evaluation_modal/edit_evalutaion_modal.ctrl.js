(function(){
    'use strict';

    angular.module('marathon').controller('EditEvaluationModalController', ctrl);

    function ctrl($uibModalInstance, selectedItem, Evaluations){
        var vm = this;

        vm.statuses = [
            {type: 'on target', text: 'On target'},
            {type: 'underachieved', text: 'Underachieved'},
            {type: 'overachieved', text: 'Overachieved'}
        ];

        Evaluations.findById(selectedItem).then(function(response){
            vm.evaluations = response;
            var element = vm.evaluations.splice(-1,1);
            vm.lastElement = element[0];
        });

        vm.updateEval = function() {
            var data = {
                id: selectedItem,
                comment: vm.lastElement.comment,
                status: vm.lastElement.status
            }
            Evaluations.update(data);
        }

        vm.ok = function () {
            $uibModalInstance.close();
        };

    }
})();
