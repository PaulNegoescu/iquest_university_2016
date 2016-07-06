(function() {
    'use strict';

    myApp.module.controller('contactsEditCtrl', ctrl);

    function ctrl(Contacts, $stateParams){
        var self = this;
        
        Contacts.findById($stateParams.contactId).then(function(result) { //state params get contact id
            self.contact = result[0];// se returneaza un array de contacte
        });
    }
})();