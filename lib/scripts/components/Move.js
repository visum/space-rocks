"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Move = function Move() {
  _classCallCheck(this, Move);

  this.type = "move";
  this.dx = 0;
  this.dy = 0;
};

exports.default = Move;