'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('dnexappApp'));

    var $scope;

   beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller('MainCtrl', {$scope: $scope});
    }));

  it('should have blank message when initialized ', function () {
    expect($scope.comment.length).toBe(0);
  });

 it('should have populate message when sent message ', function () {
    $scope.messageText = "Test Text Message";
    $scope.sendMessage();
    expect($scope.messageText.length).toBe(0);
    expect($scope.comment).toBe('Test Text Message\n');
  });


});
