(function() {
    'use strict';

    angular
        .module('marathon')
        .run(runBlock);

    /** @ngInject */

    function runBlock($log, $state, crAcl, editableThemes, editableOptions) {

        $log.debug('runBlock end');
        crAcl.setInheritanceRoles({
            "ROLE_GUEST" : ["ROLE_GUEST"],
            "ROLE_USER" : ["ROLE_USER"],
            "ROLE_ADMIN" : ["ROLE_ADMIN"]
        });
        crAcl.setRedirect('login');

        editableThemes.bs3.inputClass = 'input-sm';
        editableThemes.bs3.buttonsClass = 'btn-sm';
        editableOptions.theme = 'bs3';
    }
})();
