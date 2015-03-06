'use strict';

describe('Controller: FlockCtrl', function () {

  // load the controller's module
  beforeEach(module('flockingInsightsApp'));

  var FlockCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FlockCtrl = $controller('FlockCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
