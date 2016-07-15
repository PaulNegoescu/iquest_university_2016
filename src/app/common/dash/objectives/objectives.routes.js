(function(){
    'use strict';

    angular.module('marathon').config(function($stateProvider) {
        $stateProvider.state('objectives', {
            url:'/dash/objectives',
            templateUrl: 'app/common/dash/objectives/objectives.view.html',
            controller:'ObjectivesController as vm'
        });
    });
})();

