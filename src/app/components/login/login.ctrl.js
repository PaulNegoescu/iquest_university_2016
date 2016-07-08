(function(){
    'use strict';

    angular.module('marathon').controller('LoginController', LoginController);

    function LoginController(Session, $state){
        var self = this;
        console.log("kdsjhfskjhf");
        this.login = function(){
            Session.login(self.identifier, self.password).then(function(response){
                if(response['token']){
                    $state.go('dash');
                }
            });
        };
    }

})();


//cand fac click pe login, se face submit la formular (fac ng-submit pe form)
//trebuie verificat daca au fost completate campurile, si daca nu, ar trebui sa afisez ng-show un mesaj
//daca autentificarea s-a facut cu succes, user-ul este redirectionat catre homepage (/dash) -> trebuie sa stabilesc ruta
// (dar nu stiu unde...in app.route???)
//cum validam daca au fost completate ambele campuri inainte de a face request?
//unde facem validarile in functie de raspunsul pe care il primim de la server?

