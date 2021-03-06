'use strict';

angular.module('workerManagementSystemApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider.
      when('/signup', {
        templateUrl: 'client/app/account/signup/signup.html',
        controller: 'SignupCtrl',
        settings: 'hide'
      }).
      when('/login', {
        templateUrl: 'client/app/account/login/login.html',
        controller: 'LoginCtrl'
      }).
      when('/vod', {
        templateUrl: 'templates/vod.html',
        controller: 'VodCtrl',
        settings: 'hide'
      }).
      when('/play', {
        templateUrl: 'templates/play.html'/*,
        controller: 'PhoneDetailCtrl'*/
      }).
      when('/news', {
        templateUrl: 'templates/news.html',
        controller: 'NewsCtrl'
      }).when('/willget', {
        templateUrl: 'client/app/account/willget/willget.html',
        controller: 'WillgetCtrl'
      }).when('/about', {
        templateUrl: 'client/app/account/about/about.html',
        controller: 'AboutCtrl'
      }).when('/help', {
        templateUrl: 'client/app/account/help/help.html',
        controller: 'HelpCtrl'
      }).when('/contact', {
        templateUrl: 'client/app/account/contact/contact.html',
        controller: 'ContactCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
    
    });
  });