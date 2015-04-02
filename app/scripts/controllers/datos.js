'use strict';

/**
 * @ngdoc function
 * @name meanApp1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the meanApp1App
 */
angular.module('meanApp1App')
  .controller('DatosCtrl', 
  	function ($scope,$http,$location,$rootScope,$routeParams) {

    //
    $rootScope.token = {};
          
          //alert($routeParams.accessToken);
        
          var urlParams = $location.path().substr(1).split('&');
          
         
          var params = {};

          for (var i = 0; i < urlParams.length; i++) {
            
            var param  = urlParams[i].split('=');
            var key    = param[0];
            var value  = param[1];
            params[key] = value;
            
          }
          $rootScope.token=params;
          //$location.path("/datos");
    //  
    $scope.root=$rootScope;     
          
    $scope.getEmail = function() {
      

      //https://www.googleapis.com/plus/v1/people/me?access_token={YOUR_API_KEY}
      //llamando al API de google usando token oauth 2.0
      $http.get('https://www.googleapis.com/plus/v1/people/me?access_token='+$scope.root.token.access_token).
        success(function(data, status, headers, config) {
          $scope.data = data;
        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert(data);
        });
              
    };      
    
    $scope.getDatosLogin = function() {
    
        $scope.user = {};
        $http.get('https://www.googleapis.com/plus/v1/people/me', { headers: {'Authorization': 'Bearer ' + $scope.root.token.access_token} }).
        success(function(data, status, headers, config) {
          $scope.user = data;
        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log(data);
        });
              
    };  

     $scope.desconectar = function() {
  
        
        $http.get('https://accounts.google.com/o/oauth2/revoke?token='+$scope.root.token.access_token).
        success(function(data, status, headers, config) {
          $scope.disconnectUserData = data;
        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log("disconnect : " + data);
        });
              
    };    

  });
/*

*/