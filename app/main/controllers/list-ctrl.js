'use strict';
angular.module('main')
  .controller('ListCtrl', function ($log, $timeout, Main) {
    var _this = this;

    $log.log('Hello from your Controller: ListCtrl in module main:. This is your controller:', this);

    this.qes = [];

    this.deleteQe = function (qe) {
      Main.deleteQe(qe);
    };

    (function init () {
      $timeout(function () {
        _this.qes = Main.getQes();
      }, 500);
    })();
  });
