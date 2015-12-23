'use strict';

describe('module: main, controller: CreateQeCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var CreateQeCtrl;
  beforeEach(inject(function ($controller) {
    CreateQeCtrl = $controller('CreateQeCtrl');
  }));

  it('should do something', function () {
    expect(!!CreateQeCtrl).toBe(true);
  });

});
