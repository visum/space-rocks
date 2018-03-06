"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Size = function Size() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  _classCallCheck(this, Size);

  this.type = "size";
  this.width = width;
  this.height = height;
};

exports.default = Size;