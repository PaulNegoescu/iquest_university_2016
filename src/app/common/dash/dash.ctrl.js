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





