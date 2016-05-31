'use strict';

/**
 * @ngdoc overview
 * @name dnexappApp
 * @description
 * # dnexappApp
 *
 * Main module of the application.
 */
angular
  .module('dnexappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/todo', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl',
        controllerAs: 'todo'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
