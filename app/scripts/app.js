'use strict';

/**
 * @ngdoc overview
 * @name meanApp1App
 * @description
 * # meanApp1App
 *
 * Main module of the application.
 oauth2callback

 */
angular
  .module('meanApp1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/datos', {
        templateUrl: 'views/datos.html',
        controller: 'DatosCtrl'
      })
      .when('/access_token=:accessToken', {
        templateUrl: 'views/datos.html',
        controller: 'DatosCtrl'
      })
      /*.when('/access_token=:accessToken', {
        template: '',
        controller: function ($location,$rootScope,$routeParams) {
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
          $location.path("/datos");
        }
      })*/
      .otherwise({
        redirectTo: '/'
      });
      /*$locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });*/
  });
/*
http://localhost:9000#access_token=ya29.SAEsM7fGZ5n30hcQl7LiTyG_m3IoRGHeXIfYyqy8gHQUHkI3VKjEso-yUMdB1Ghq-zVh_wgdeL-qxw&token_type=Bearer&expires_in=3600

/access_token=ya29.SAH2Sbmr2wxrzfRqvij8yzMPgZ32sDGzZ3qLQP-o9GNp9oU_QjY4NtN5plhbPhayangEdPNjPgnP8A
              ya29.SAECx_yabcFwgmNwhTNqrDGVLA1NIH02kIqHlhmRbwlVIh6HlkLtvESa1I-vAJY_521ggUmQZkFOfw&
&token_type=Bearer
&expires_in=3600
*/