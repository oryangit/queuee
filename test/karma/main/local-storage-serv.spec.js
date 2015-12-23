'use strict';

describe('module: main, service: LocalStorage', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var LocalStorage;
  beforeEach(inject(function (_LocalStorage_) {
    LocalStorage = _LocalStorage_;
  }));

  it('should do something', function () {
    expect(!!LocalStorage).toBe(true);
  });

});
