"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _guid = require("guid");

var _guid2 = _interopRequireDefault(_guid);

var _timedPromise = require("../utils/timedPromise");

var _timedPromise2 = _interopRequireDefault(_timedPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// TODO:
// inject a replacement for requestAnimationFrame()


var Game = function () {
  function Game(config, canvas) {
    _classCallCheck(this, Game);

    if (!config) {
      throw new Error("Game needs a config to run");
    }

    if (!canvas) {
      throw new Error("Game needs a canvas to draw to");
    }

    this.canvas = canvas;
    this.config = config;

    this.world = {};

    this._systems = [];

    this._tickTimer = function (callback) {
      return requestAnimationFrame(callback);
    };

    this._setInitialWorldState();
    this._init();
  }

  _createClass(Game, [{
    key: "addSystemAsync",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(system) {
        var world, _systems;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                world = this.world, _systems = this._systems;

                system.id = _guid2.default.raw();
                _context.next = 4;
                return system.prepareToBeAddedAsync(world);

              case 4:
                _systems.push(system);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addSystemAsync(_x) {
        return _ref.apply(this, arguments);
      }

      return addSystemAsync;
    }()
  }, {
    key: "removeSystemAsync",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(system) {
        var _systems;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _systems = this._systems;
                _context2.next = 3;
                return system.prepareToBeRemovedAsync();

              case 3:
                _systems.splice(_systems.indexOf(system), 1);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function removeSystemAsync(_x2) {
        return _ref2.apply(this, arguments);
      }

      return removeSystemAsync;
    }()
  }, {
    key: "addEntityAsync",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(entity) {
        var _systems, world;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _systems = this._systems, world = this.world;

                world.entities.push(entity);
                return _context3.abrupt("return", _systems.reduce(function (previous, current) {
                  return previous.then((0, _timedPromise2.default)(current.entityAddedAsync(entity), 10));
                }, Promise.resolve()));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addEntityAsync(_x3) {
        return _ref3.apply(this, arguments);
      }

      return addEntityAsync;
    }()
  }, {
    key: "removeEntityAsync",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(entity) {
        var _systems, world;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _systems = this._systems, world = this.world;

                world.entities.splice(world.entities.indexOf(entity), 1);
                return _context4.abrupt("return", _systems.reduce(function (previous, current) {
                  return previous.then((0, _timedPromise2.default)(current.entityRemovedAsync(entity), 10));
                }, Promise.resolve()));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function removeEntityAsync(_x4) {
        return _ref4.apply(this, arguments);
      }

      return removeEntityAsync;
    }()
  }, {
    key: "createEntity",
    value: function createEntity(template) {}
  }, {
    key: "start",
    value: function start() {
      var world = this.world,
          _tickTimer = this._tickTimer,
          tick = this.tick;

      world.startTime = performance.now();
      world.isRunning = true;
      _tickTimer(tick);
    }
  }, {
    key: "stop",
    value: function stop() {
      world.isRunning = false;
      // we should do something else here, I'm sure...
    }
  }, {
    key: "pause",
    value: function pause() {
      this.world.isPaused = true;
    }
  }, {
    key: "resume",
    value: function resume() {
      this.world.isPaused = false;
      this._tickTimer(this.tick);
    }
  }, {
    key: "tick",
    value: function tick() {
      var _systems = this._systems,
          world = this.world,
          _tickTimer = this._tickTimer,
          tick = this.tick;

      world.time = performance.now() - world.startTime;
      // Principle 3 says we can't allow a system to hold us up forever.
      // 20 ms for one system is way longer than the total 16ms/frame budget,
      // so this should maybe be smaller, but we'll start here.
      var update = _systems.reduce(function (previous, current) {
        return previous.then((0, _timedPromise2.default)(current, 20));
      }, Promise.resolve());
      update.then(function () {
        if (world.isRunning && !world.isPaused) {
          _tickTimer(tick);
        }
      });
    }
  }, {
    key: "_init",
    value: function _init(config) {}
  }, {
    key: "_setInitialWorldState",
    value: function _setInitialWorldState() {
      this.world = {
        isRunning: false,
        isPaused: false,
        time: 0,
        startTime: 0,
        entities: [],
        systems: []
      };
    }
  }]);

  return Game;
}();

exports.default = Game;