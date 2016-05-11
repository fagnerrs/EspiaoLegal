'use strict';

angular.module('espiaoApp')
.controller('loginCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.credentials = { username:"", password:"" };
    $scope.sendData = function()
    {

      var request = {
         method: 'POST',
         url: 'http://localhost:3000/User/login/',
         headers: {
           'Content-Type': 'application/json'
         },
         data: $scope.credentials
      };

      $http(request).then(
        function(response){
        alert('fine');

      }, function(response){
        debugger;
            alert('erro');
      });

    };

}]);
