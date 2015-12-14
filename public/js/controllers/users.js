angular
  .module('satellizerApp')
  .controller('UsersController', UsersController);

UsersController.$inject = [];
function UsersController(){
  var self = this;
  self.sanity = "Sanity Check";
}