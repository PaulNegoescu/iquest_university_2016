(function() {
  'use strict';

  angular
    .module('structure')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
