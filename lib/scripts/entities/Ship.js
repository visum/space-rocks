"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Entity2 = require("./Entity");

var _Entity3 = _interopRequireDefault(_Entity2);

var _Position = require("../components/Position");

var _Position2 = _interopRequireDefault(_Position);

var _Size = require("../components/Size");

var _Size2 = _interopRequireDefault(_Size);

var _KeyboardInput = require("../components/KeyboardInput");

var _KeyboardInput2 = _interopRequireDefault(_KeyboardInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ship = function (_Entity) {
  _inherits(Ship, _Entity);

  function Ship() {
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0 };
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { width: 20, height: 20 };

    _classCallCheck(this, Ship);

    var _this = _possibleConstructorReturn(this, (Ship.__proto__ || Object.getPrototypeOf(Ship)).call(this));

    _this.name = "Ship";

    _this.addComponent(new _Position2.default(position.x, position.y));
    _this.addComponent(new _Size2.default(size.width, size.height));
    _this.addComponent(new _KeyboardInput2.default());

    return _this;
  }

  return Ship;
}(_Entity3.default);

exports.default = Ship;
;