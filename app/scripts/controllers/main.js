'use strict';

/**
 * @ngdoc function
 * @name dnexappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dnexappApp
 */
angular.module('dnexappApp')
  .controller('MainCtrl', function ($scope) {
 	$scope.comment="";
 	$scope.sendMessage = function(){
 		$scope.comment += $scope.messageText+"\n";
 		$scope.messageText = "";
 	};
  });
