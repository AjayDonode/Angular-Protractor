'use strict';

describe('Service: TodoStore', function () {

  // load the service's module
  beforeEach(module('dnexappApp'));

  // instantiate service
  var TodoStore;
  beforeEach(inject(function (_TodoStore_) {
    TodoStore = _TodoStore_;
  }));

  it('should do something', function () {
    expect(!!TodoStore).toBe(true);
  });

});
