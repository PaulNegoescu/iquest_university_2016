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

        this.getTeamMembers = function(ownerId) {

            return apiService.read(
                this.entity + '/' + 'owner', {id: ownerId}
            )
        };

        this.getPfms = function(memberId) {

            return apiService.read(
                this.entity + '/' + 'member', {id: memberId}
            )
        };

        this.deleteMember = function(relId) {

            return apiService.delete(this.entity + '/' + relId);
        }
    }
})();
