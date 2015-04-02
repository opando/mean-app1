'use strict';

/**
 * @ngdoc function
 * @name meanApp1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meanApp1App
 */
angular.module('meanApp1App')
  .controller('MainCtrl', ["$scope", function ($scope) {
    $scope.task = {name:""};
    
    $scope.mostrarMsj = function(){
    		alert($scope.task.name);
    };
    $scope.login=function() {
      var client_id="499738190577-klouoal2k5ubmdrt5fusejhfuv902r0k.apps.googleusercontent.com";
      var scope="https://www.googleapis.com/auth/userinfo.email";
      var redirect_uri="http://localhost:9000";
      var response_type="token";
      var url="https://accounts.google.com/o/oauth2/auth?scope="+scope+"&client_id="+client_id+"&redirect_uri="+redirect_uri+
      "&response_type="+response_type;
      window.location.replace(url);
    };


    $scope.login2=function() {
      var client_id="499738190577-klouoal2k5ubmdrt5fusejhfuv902r0k.apps.googleusercontent.com";
      var scope="https://www.googleapis.com/auth/plus.login";
      var redirect_uri="http://localhost:9000";
      var response_type="token";
      var url="https://accounts.google.com/o/oauth2/auth?scope="+scope+"&client_id="+client_id+"&redirect_uri="+redirect_uri+
      "&response_type="+response_type;
      window.location.replace(url);
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  }]);
