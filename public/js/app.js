angular
  .module('satellizerApp', ['satellizer'])
  .config(oauthConfig);

oauthConfig.$inject = ['$authProvider'];
function oauthConfig($authProvider){
  $authProvider.facebook({
    clientId: 'Facebook App ID'
  });
}