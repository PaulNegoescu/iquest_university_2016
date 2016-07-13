(function() {
    'use strict';

    angular
        .module('marathon')
        .run(runBlock);

    /** @ngInject */

    function runBlock($log, $state, crAcl) {

        $log.debug('runBlock end');
        crAcl.setInheritanceRoles({
            "ROLE_GUEST" : ["ROLE_GUEST"],
            "ROLE_USER" : ["ROLE_USER"],
            "ROLE_ADMIN" : ["ROLE_ADMIN"]
        });
        crAcl.setRedirect('login');
    }

})();
