'use strict';

/**
 * @ngdoc function
 * @name dnexappApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the dnexappApp
 */
angular.module('dnexappApp')
  .controller('TodoCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.todolist = [];
    $scope.todotxt = "";
//var todoItem = {"id":0, "text":"", "marked":false};

    $scope.addTodo = function(){
    	var item = {"id":$scope.todolist.length, "text":$scope.todotxt, "marked":false};
    	$scope.todolist.push(item);
    	$scope.todotxt = "";
    };

     $scope.removeTodo = function(){
    	$scope.todolist.pop();
    };

    $scope.removeMarked = function(){
    	
    	for(var i=0; i<$scope.todolist.length; i++) {
    		var item = $scope.todolist[i]
    		if(item.marked) delete $scope.todolist[i];
    	}
    	
    };


  });
