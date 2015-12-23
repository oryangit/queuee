'use strict';
angular.module('main')
  .controller('QeCtrl', function ($log, $stateParams, Main) {
    var _this = this;
    this.newText = '';

    $log.log('Hello from your Controller: QeCtrl in module main:. This is your controller:', this);

    this.insertText = function (text) {
      // validate
      if (!text && text.length === 0) {
        return;
      }

      this.qe.addText(text);
      this.newText = '';
    };

    (function init () {
      // get the qe by given id
      _this.qe = Main.getQe($stateParams.id);
    })();
  });
