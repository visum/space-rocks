"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entity = function () {
  function Entity() {
    _classCallCheck(this, Entity);

    this.name = "Entity";
    this.components = [];
  }

  _createClass(Entity, [{
    key: "addComponent",
    value: function addComponent(component) {
      this.components.push(component);
    }
  }, {
    key: "removeComponent",
    value: function removeComponent(component) {
      this.components.splice(this.components.indexOf(component), 1);
    }
  }, {
    key: "getComponentsByType",
    value: function getComponentsByType(type) {
      return this.components.filter(function (component) {
        return component.type === type;
      });
    }
  }]);

  return Entity;
}();

exports.default = Entity;