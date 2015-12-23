'use strict';

describe('module: main, service: Db', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Db;
  beforeEach(inject(function (_Db_) {
    Db = _Db_;
  }));

  it('should do something', function () {
    expect(!!Db).toBe(true);
  });

});
