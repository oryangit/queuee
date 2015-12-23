'use strict';
angular.module('main')
.controller('CreateQeCtrl', function ($log, Main, $state) {

  $log.log('Hello from your Controller: CreateQeCtrl in module main:. This is your controller:', this);

  this.name = '';
  this.color = 'blue';
  this.create = function (name, color) {
    // validate
    if (!name || name.length === 0) {
      $log.error('name is not defined');
      return;
    }
    if (!color || color.length === 0) {
      $log.error('color is not defined');
      return;
    }

    var qe = Main.createQe(name, color);
    if (qe) {
      $state.go('main.list');
    } else {
      $log.error('could not create new QE');
    }
  };
});
