(function() {
    'use strict';

    angular.module('marathon').controller('assignTeamController', ctrl);

    function ctrl(Users, Relations, $uibModalInstance, $log, selectedItem) {
        var vm = this;
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
            Relations.getTeamMembers(owner.id).then(function(result) {
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

        vm.submit = function(user, selectedList) {
            Relations.create(user, selectedList).then(function(resp){
                if(resp.status === 200) {
                    alert('Saved');
                }
            })
        };

        vm.reset = function() {
            vm.selectedUsers = [];
            getMembers(vm.user);
            vm.userList = [];
            getUserList(vm.user);
        };

        vm.dismiss = function() {
            $uibModalInstance.dismiss();
        };

        vm.moveUser = function(user, fr, to) {
            var index = fr.indexOf(user);
            fr.splice(index, 1);
            to.push(user);
        }
    }
})();
