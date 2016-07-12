(function(){
    'use strict';

    angular.module('marathon').service('Session', Session);

    function Session(apiService, localStorageService){
        this.entity = 'session';

        this.login = function(identifier, password){
            return apiService.create(this.entity, {identifier:identifier, password:password})
                    .then(storeUser(identifier));
        };

        this.logout = function(){
            return apiService.delete(this.entity);
        };

        function storeUser(firstname) {
            localStorageService.set('firstname', firstname);
            //console.log(localStorageService.get('firstname'));
        }

        this.getStoredUser = function() {
            return localStorageService.get('firstname');
        }

        this.removeStoredUser = function() {
            localStorageService.clearAll();
            //console.log('Removed:' + localStorageService.get('firstname'));
        }
    } 
})();
