(function() {
  'use strict';

  angular
    .module('marathon')
    .controller('DashController', DashController);

  function DashController(Session, $state, crAcl) {
    var self = this;

    this.shouldShowMenuContent = false;

    this.logout = function() {
      Session.logout().then(function() {
        crAcl.setRole("ROLE_GUEST");
        Session.removeStoredUser();
        $state.go('login');
      });
    };


    this.firstname = Session.getStoredUser();

    this.toggleMenuVisibility = function() {
      self.shouldShowMenuContent = !self.shouldShowMenuContent;
    };
  }
})();





