(function() {
    'use strict';

    myApp.module.controller('contactsListCtrl', ctrl);

    function ctrl(Contacts){
        var self = this;
        var oldSortField = '';
        Contacts.read().then(function(result) {
            self.contacts = result;
        });

        this.sort = function(field) {
            this.sortBy = field;
            
            if(oldSortField === field) {
                this.sortAsc = !this.sortAsc;
            }else {
                this.sortAsc = false;
            }
            oldSortField = field;
        }
    }
})();