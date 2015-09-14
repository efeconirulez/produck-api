'use strict';

describe('Controller: LaptopsCtrl', function () {

  // load the controller's module
  beforeEach(module('produckWebApp'));

  var LaptopsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LaptopsCtrl = $controller('LaptopsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
