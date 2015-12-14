angular
  .module('satellizerApp')
  .controller('AuthController', AuthController);

AuthController.$inject = ['$auth'];
function AuthController($auth) {

  this.authenticate = function(provider) {
    console.log("PROVIDER" + provider)
    $auth.authenticate(provider);
  }

}