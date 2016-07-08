(function(){
    'use strict';

    angular.module('marathon').config(function($stateProvider) {
        $stateProvider.state('login', {
            url:'/login',
            templateUrl: 'app/components/login/login.view.html',
            controller:'LoginController as vm'
        });
    });
})();
