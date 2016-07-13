(function() {
  'use strict';

  angular
    .module('marathon')
    .controller('DashController', DashController);

  function DashController(Session, $state) {
    var self = this;

    this.shouldShowMenuContent = false;

    this.logout = function() {
      Session.logout().then(function() {
        $state.go('login');
      });
    };

    this.user = Session.getStoredUser();

    this.token = Session.getStoredToken();

    this.toggleMenuVisibility = function() {
      self.shouldShowMenuContent = !self.shouldShowMenuContent;
    };
  }
})();




