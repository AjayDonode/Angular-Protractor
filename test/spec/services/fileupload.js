'use strict';

describe('Service: fileupload', function () {

  // load the service's module
  beforeEach(module('dnexappApp'));

  // instantiate service
  var fileupload;
  beforeEach(inject(function (_fileupload_) {
    fileupload = _fileupload_;
  }));

  it('should do something', function () {
    expect(!!fileupload).toBe(true);
  });

});
