(function() {
  'use strict';

  angular
    .module('marathon')
    .config(config);

  /** @ngInject */
  function config($logProvider, formlyConfigProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    formlyConfigProvider.setWrapper({
        name: 'validation',
        types: ['input'],
        template:'<formly-transclude></formly-transclude><div ng-messages="fc.$error" ng-if="form.$submitted || options.formControl.$touched" class="error-messages"><div ng-message="{{ ::name }}" ng-repeat="(name, message) in ::options.validation.messages" class="message">{{ message(fc.$viewValue, fc.$modelValue, this)}}</div></div>'
    });
  }

})();
