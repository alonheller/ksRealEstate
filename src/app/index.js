'use strict';
var directives = angular.module('ksRealEstate.directives', []);
var services = angular.module('ksRealEstate.services', []);
angular.module('ksRealEstate', ['ngResource', 'ui.router', 'ksRealEstate.services', 'ksRealEstate.directives'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
    .run(function() {
        Parse.initialize("GenTnwhUx8NzPzrgDLYjRTNHGaFEE6tRHaDZw1Wp", "22e3VWPeROFBhfBOc7xKZ2AuHmGqvHP3csvGDt7W");
    })
;
