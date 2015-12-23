'use strict';
angular.module('main')
.service('Db', function ($log, localStorage) {

  this.getQes = function () {
    return localStorage.getObject('qes', []);
  };

  this.save = function (qes) {
    var items = [];
    _.each(qes, function (qe) {
      items.push(qe.toJsonObj());
    });
    localStorage.setObject('qes', items);
  };

});
