'use strict';

describe('Service: soundvisualizer', function () {

  // load the service's module
  beforeEach(module('flockingInsightsApp'));

  // instantiate service
  var soundmeter;
  beforeEach(inject(function (_soundmeter_) {
    soundmeter = _soundmeter_;
  }));

  it('should do something', function () {
    expect(!!soundmeter).toBe(true);
  });

});
