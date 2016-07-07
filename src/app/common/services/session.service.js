(function(){
    'use strict';

    angular.module('marathon').service('Session', Session);

    function Session(apiService){

        this.entity = 'session';

        this.login = function(identifier, password){
            return apiService.create(this.entity, {identifier:identifier, password:password});
        };

        this.logout = function(){
            return apiService.delete(this.entity);
        };
    }
})();
