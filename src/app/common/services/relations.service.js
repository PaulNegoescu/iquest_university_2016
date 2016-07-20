(function() {
    'use strict';

    angular.module('marathon').service('Relations', Relations);

    function Relations(apiService) {

        this.entity = 'relations';

        this.create = function(ownerId, memberId, type) {

            return apiService.create(this.entity, {
                "owner_id" : ownerId,
                "member_id" : memberId,
                "type" : type
            })
        };

        this.getTeamMembers = function(ownerId, relType) {

            return apiService.read(
                this.entity,
                {owner_id: ownerId, type: relType}
            )
        };

        this.getPfms = function(memberId, relType) {

            return apiService.read(
                this.entity,
                {member_id: memberId, type: relType}
            )
        };

        this.deleteMember = function(ownerId, memberId, type) {

            return apiService.delete(this.entity, {
                "owner_id": ownerId,
                "member_id": memberId,
                "type": type
            }
            );
        }
    }
})();
