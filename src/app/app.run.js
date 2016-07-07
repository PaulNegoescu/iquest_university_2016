(function() {
  'use strict';

  angular
    .module('marathon')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
