(function() {
    'use strict';

    angular.module('marathon').controller('assignTeamController', ctrl);

    function ctrl(Users, Relations, $uibModalInstance, $log, selectedItem) {
        var vm = this;
        var relType = "pfm";
        vm.user = selectedItem;

        function getUserList(user) {
            getMembers(vm.user);
            Users.read().then(function(result) {
                for(var i=0; i<result.length; i++) {
                    if(result[i].username != user.username) {
                        vm.userList.push(result[i]);
                        filterUserList();
                    }
                }
            })
        }

        function getMembers(owner) {
            return Relations.getTeamMembers(owner.id).then(function(result) {
                for(var i=0; i<result.length; i++) {
                    if(result[i].owner.id == owner.id) {
                        var obj = {
                            id: result[i].id,
                            member: result[i].member
                        };
                        vm.selectedUsers.push(obj);
                    }
                }
            })
        }

        function filterUserList() {
            for(var i=0; i<vm.userList.length; i++) {
                for(var j=0; j<vm.selectedUsers.length; j++) {
                    if(angular.equals(vm.userList[i], vm.selectedUsers[j].member)) {
                        var index = vm.userList.indexOf(vm.userList[i]);
                        vm.userList.splice(index,1);
                    }
                }
            }
        }

        vm.reset = function() {
            vm.selectedUsers = [];
            vm.userList = [];
            getUserList(vm.user);
        };

        vm.dismiss = function() {
            $uibModalInstance.dismiss();
        };

        vm.addUser = function(owner, member) {
            var index = vm.userList.indexOf(member);
            Relations.create(owner.id, member.id, relType).then(function(resp) {
                $log.warn(resp.status, resp.statusText);
                vm.userList.splice(index, 1);
                vm.selectedUsers.push(member);
                vm.reset();
            });
        };

        vm.removeUser = function(owner, memberObj) {
            var index = vm.selectedUsers.indexOf(memberObj.member);
            Relations.deleteMember(memberObj.id).then(function(resp) {
                $log.warn(resp.status, resp.statusText);
                vm.selectedUsers.splice(index, 1);
                vm.userList.push(memberObj.member);
            })
        };
        vm.reset();
    }
})();
