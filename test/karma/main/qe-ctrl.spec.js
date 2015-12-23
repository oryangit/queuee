'use strict';

describe('module: main, controller: QeCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var QeCtrl;
  beforeEach(inject(function ($controller) {
    QeCtrl = $controller('QeCtrl');
  }));

  it('should do something', function () {
    expect(!!QeCtrl).toBe(true);
  });

});
