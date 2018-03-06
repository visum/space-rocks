"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (promise, timeLimit) {
  var timeout = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject();
    }, timeLimit);
  });

  return Promise.race(promise, timeout);
};