(function() {
  'use strict';

  angular
    .module('marathon')
    .controller('DashController', DashController);

  function DashController(Session, $state) {
    var self = this;

    this.showContent = false;

    this.logout = function() {
      Session.logout().then(function() {
        $state.go('login');
      });
    };

    this.showMenu = function() {
      self.showContent = !self.showContent;
    };
  }
})();





