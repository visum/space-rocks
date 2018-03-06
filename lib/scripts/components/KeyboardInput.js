"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeyboardInput =
// watch is an array of keyCodes that should be attached to the component
function KeyboardInput() {
  var watch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  _classCallCheck(this, KeyboardInput);

  this.type = "keyboard-input";
  this.watch = watch;
};

exports.default = KeyboardInput;