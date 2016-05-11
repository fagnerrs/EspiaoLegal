'use strict';

angular.module('espiaoApp')
.controller('loginCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.credentials = { username:"", password:"" };
    $scope.isLoginError = false;
    $scope.sendData = function()
    {

      $scope.isLoginError = false;

      var request = {
         method: 'POST',
         url: $location.host() + '/User/login',
         headers: {
           'Content-Type': 'application/json'
         },
         data: $scope.credentials
      };

      $http(request).then(
        function(response){
        alert('fine');

      }, function(response){
            $scope.isLoginError = true;
      });

    };

}]);
