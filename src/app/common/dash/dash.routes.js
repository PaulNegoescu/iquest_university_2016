(function() {
    'use strict';

    angular.module('marathon').config(function($stateProvider) {
        $stateProvider.state('dash', {
            url: '/dash',
            templateUrl: 'app/common/dash/dash.view.html',
            controller: 'DashController as vm',
            abstract: true,
            data: {
                //is_granted: ["ROLE_USER","ROLE_ADMIN"]
            }
        });
    });
})();
