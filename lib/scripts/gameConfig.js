"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Entity = require("./entities/Entity");

var _Entity2 = _interopRequireDefault(_Entity);

var _Ship = require("./entities/Ship");

var _Ship2 = _interopRequireDefault(_Ship);

var _position = require("./components/position");

var _position2 = _interopRequireDefault(_position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Systems


exports.default = {
  entities: [_Ship2.default],
  components: [_position2.default],
  systems: []
};

// Components
// Entities