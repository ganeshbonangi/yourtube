'use strict';

angular.module('workerManagementSystemApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'client/app/main/main.html',
        controller: 'MainCtrl'
      });
  });