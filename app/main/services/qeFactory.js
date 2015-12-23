'use strict';
angular.module('main')
  .factory('QeFactory', function (rfc4122) {

    function Qe (manager, name, color, id, createdOn, items) {
      this.manager = manager;
      this.name = name;
      this.color = color;
      this.id = id || rfc4122.v4();
      this.createdOn = createdOn || new Date();
      this.items = items || [];
    }

    Qe.prototype.count = function () {
      return this.items.length;
    };

    Qe.prototype.addText = function (text) {
      this.add({ text: text });
      this.manager.save();
    };

    Qe.prototype.add = function (item) {
      this.items.push(item);
      this.manager.save();
    };

    Qe.prototype.peak = function () {
      return _.first(this.items);
    };

    Qe.prototype.poll = function () {

      // get the tail
      var first = _.first(this.items);

      // remove the tail
      this.items = _.rest(this.items);

      // save data
      this.manager.save();

      // return the tail
      return first;
    };

    Qe.prototype.toJsonObj = function () {
      var _this = this;

      return {
        name: _this.name,
        color: _this.color,
        id: _this.id,
        createdOn: _this.createdOn,
        items: _this.items
      };
    };

    Qe.build = function (main, name, color) {
      return new Qe(main, name, color);
    };

    Qe.buildFromDb = function (main, data) {
      return new Qe(main, data.name, data.color, data.id, data.createdOn, data.items);
    };

    return Qe;
  });
