(function() {
    'use strict';

    angular
        .module('marathon')
        .run(runBlock);

    /** @ngInject */
    function run(crAcl) {

    }

    function runBlock($log, $state, crAcl) {
        console.log($state.get());
        $log.debug('runBlock end');
        crAcl.setInheritanceRoles({
            /*"ROLE_ADMIN" : ["ROLE_ADMIN"],
            "ROLE_CUSTOMER" : ["ROLE_ADMIN","ROLE_USER"],
            "ROLE_CLIENT" : ["ROLE_ADMIN","ROLE_CUSTOMER","ROLE_USER"]*/
            "ROLE_GUEST" : ["ROLE_GUEST"],
            "ROLE_USER" : ["ROLE_USER"],
            "ROLE_ADMIN" : ["ROLE_ADMIN"]
        });
        crAcl.setRedirect('login');
    }

})();
