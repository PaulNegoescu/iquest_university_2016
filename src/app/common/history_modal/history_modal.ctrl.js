(function(){
    'use strict';

    angular.module('marathon').controller('HistoryModalController', HistoryModalController);

    function HistoryModalController($uibModalInstance, selectedItem, Evaluations){
        var vm = this;

        Evaluations.findById(selectedItem).then(function(response){
            vm.evaluations = response;
        });

        vm.ok = function () {
            $uibModalInstance.close();
        };

    }
})();
