(function() {
  'use strict';

  angular
    .module('marathon')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
