'use strict';

describe('Controller: TodoCtrl', function () {

  // load the controller's module
  beforeEach(module('dnexappApp'));

  var TodoCtrl,
    $scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    TodoCtrl = $controller('TodoCtrl', {
      $scope: $scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TodoCtrl.awesomeThings.length).toBe(3);
  });

  it('should have initial todolist set to zero', function () {
    expect($scope.todolist.length).toBe(0);
  });

  it('should add todolist item', function () {
    $scope.todotxt = "first TODO text"
    $scope.addTodo()
    expect($scope.todolist.length).toBe(1);
  });

   it('should remove todolist item', function () {
   // $scope.todotxt = "first TODO text"
    $scope.removeTodo()
    expect($scope.todolist.length).toBe(0);
  });

});
