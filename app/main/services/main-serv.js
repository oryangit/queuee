'use strict';
angular.module('main')
.service('Main', function ($log, QeFactory, Db) {
  var _this = this;
  this.qes = [];

  this.getQes = function () {
    return this.qes;
  };

  this.getQe = function (id) {
    return _.findWhere(this.qes, {id: id});
  };

  this.save = function () {
    Db.save(this.qes);
  };

  this.createQe = function (name, color) {
    var qe = QeFactory.build(this, name, color);
    this.qes.push(qe);

    // save the data
    this.save();

    return qe;
  };

  this.deleteQe = function (qe) {
    this.qes.splice(_.indexOf(_this.qes, qe), 1);

    // save the data
    this.save();
  };

  (function init () {
    var data = Db.getQes();
    _.each(data, function (qeData) {
      _this.qes.push(QeFactory.buildFromDb(_this, qeData));
    });
  })();

});
