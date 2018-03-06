"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var System = function () {
  function System(world) {
    _classCallCheck(this, System);

    this.world = world;
    this.entities = {};
    this.suspended = false;
    this.id = null;
  }

  _createClass(System, [{
    key: "entityAddedAsync",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(entity) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.entities[entity.id] = entity;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function entityAddedAsync(_x) {
        return _ref.apply(this, arguments);
      }

      return entityAddedAsync;
    }()
  }, {
    key: "entityRemovedAsync",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(entity) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.entities[entity.id] = undefined;

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function entityRemovedAsync(_x2) {
        return _ref2.apply(this, arguments);
      }

      return entityRemovedAsync;
    }()
  }, {
    key: "prepareToBeAddedAsync",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function prepareToBeAddedAsync() {
        return _ref3.apply(this, arguments);
      }

      return prepareToBeAddedAsync;
    }()
  }, {
    key: "prepareToBeRemovedAsync",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function prepareToBeRemovedAsync() {
        return _ref4.apply(this, arguments);
      }

      return prepareToBeRemovedAsync;
    }()
  }, {
    key: "updateAsync",
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                throw new Error("updateAsync is an abstract method must be overridden.");

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function updateAsync() {
        return _ref5.apply(this, arguments);
      }

      return updateAsync;
    }()
  }]);

  return System;
}();

exports.default = System;