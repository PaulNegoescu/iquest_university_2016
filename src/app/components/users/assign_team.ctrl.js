(function() {
    'use strict';

    angular.module('marathon').controller('assignTeamController', ctrl);

    function ctrl(Users, Relations, $uibModalInstance, $log, selectedItem) {
        var vm = this;
        var relType = "pfm";
        vm.user = selectedItem;
        vm.userList = [];
        vm.selectedUsers = [];

        getMembers(vm.user);
        getUserList(vm.user);

        function getUserList(user) {
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
            Relations.getTeamMembers(owner.id, relType).then(function(result) {
                for(var i=0; i<result.length; i++) {
                    if(result[i].username != owner.username) {
                        vm.selectedUsers.push(result[i]);
                    }
                }
            })
        }

        function filterUserList() {
             for(var i=0; i<vm.userList.length; i++) {
                for(var j=0; j<vm.selectedUsers.length; j++) {
                    if(angular.equals(vm.userList[i], vm.selectedUsers[j])) {
                        var index = vm.userList.indexOf(vm.userList[i]);
                        vm.userList.splice(index,1);
                    }
                }
            }
        }

        vm.reset = function() {
            vm.selectedUsers = [];
            getMembers(vm.user);
            vm.userList = [];
            getUserList(vm.user);
        };

        vm.dismiss = function() {
            $uibModalInstance.dismiss();
        };

        vm.moveUser = function(owner, member, fr, to) {
            var index = fr.indexOf(member);

            if(fr == vm.userList) {
                Relations.create(owner.id, member.id, relType);
            } else if(fr == vm.selectedUsers) {
                Relations.deleteMember(owner.id, member.id, relType);

            }
            fr.splice(index, 1);
            to.push(member);
        }
    }
})();
