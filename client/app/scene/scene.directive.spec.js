'use strict';

describe('Directive: scene', function () {

  // load the directive's module and view
  beforeEach(module('flockingInsightsApp'));
  beforeEach(module('app/scene/scene.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scene></scene>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the scene directive');
  }));
});