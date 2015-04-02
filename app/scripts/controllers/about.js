'use strict';

/**
 * @ngdoc function
 * @name meanApp1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the meanApp1App
 */
angular.module('meanApp1App')
  .controller('AboutCtrl', function ($scope,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
   
  });
