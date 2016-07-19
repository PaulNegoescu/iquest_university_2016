(function() {
    'use strict';

    angular.module('marathon').service('Relations', Relations);

    function Relations(apiService) {

        this.entity = 'relations';
        var self = this;

        this.create = function(user, userList) {
            var memberListId = [];

            for(var i=0; i<userList.length; i++) {
                memberListId.push(userList[i].id);
            };
            return apiService.create(this.entity, {
                "owner_id" : user.id,
                "members_id" : memberListId
            });
        };

        this.getTeamMembers = function() {
            return apiService.read(
                this.entity,
                {view: "members"}
            );
        };

        this.getPfms = function() {
            return apiService.read(
                this.entity,
                {view: "owners"}
            );
        }
    }
})();
