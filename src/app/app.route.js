(function() {
  'use strict';

  angular
    .module('marathon')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');
  }

})();
