'use strict';

describe('Service: bufferloader', function () {

  // load the service's module
  beforeEach(module('flockingInsightsApp'));

  // instantiate service
  var bufferloader;
  beforeEach(inject(function (_bufferloader_) {
    bufferloader = _bufferloader_;
  }));

  it('should do something', function () {
    expect(!!bufferloader).toBe(true);
  });

});
