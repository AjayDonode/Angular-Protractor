'use strict';

/**
 * @ngdoc function
 * @name dnexappApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the dnexappApp
 */
angular.module('dnexappApp')
    .controller('TodoCtrl', function($scope, TodoStore) {


        $scope.todolist = [];
        $scope.todotxt = "";
        $scope.isVisible = false;
        //var todoItem = {"id":0, "text":"", "marked":false};

        $scope.enterTodo = function() {
            if (event.keyCode == 13 && $scope.todotxt) {
                this.addTodo();
            }
        };

        $scope.addTodo = function() {
            var item = {
                "id": $scope.todolist.length,
                "text": $scope.todotxt,
                "marked": false
            };

            $scope.todolist.push(item);
            $scope.todotxt = "";
            isVisibleFn();
        };

        $scope.removeTodo = function() {
            TodoStore.remove();
        };

        $scope.removeMarked = function() {
            var tempTodos = $scope.todolist;
            $scope.todolist = [];
            for (var i = 0; i < tempTodos.length; i++) {
                var item = tempTodos[i];
                if (!item.marked) $scope.todolist.push(tempTodos[i]);
            }

            isVisibleFn();

        };

        $scope.checkAll = function() {

            for (var i = 0; i < $scope.todolist.length; i++) {
                var item = $scope.todolist[i]
                item.marked = true;
            }

        };

        var isVisibleFn = function() {
            if ($scope.todolist.length > 0) {
                $scope.isVisible = true;
            } else {
                $scope.isVisible = false;
            }
        }


    });
