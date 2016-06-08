'use strict';

/**
 * @ngdoc directive
 * @name dnexappApp.directive:date
 * @description
 * # date
 */
angular.module('dnexappApp')
  .directive('datePicker', function () {
    return {
      template: '<div class="input-group"><input type="text" class="form-control" ><span class="input-group-btn"><button class="btn btn-default" type="button" ng-click="addTodo()"><span class="glyphicon glyphicon-calendar"></span></button></span></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the date directive');
        scope.name = attrs.name;
      }
    };
  });
