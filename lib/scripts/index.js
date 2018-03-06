"use strict";

var _init2 = require("./utils/init");

var _init3 = _interopRequireDefault(_init2);

var _game = require("./game/");

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _init = (0, _init3.default)(document.querySelector("#game"), document),
    canvas = _init.canvas,
    width = _init.width,
    height = _init.height;

var canvasContext = canvas.getContext('2d');

var thing = "stuff and other things";