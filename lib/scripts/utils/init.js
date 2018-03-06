"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (container, doc) {
  var _container$getBoundin = container.getBoundingClientRect(),
      width = _container$getBoundin.width,
      height = _container$getBoundin.height;

  var mainCanvas = doc.createElement("canvas");
  mainCanvas.width = width;
  mainCanvas.height = height;

  container.appendChild(mainCanvas);
  return { canvas: mainCanvas, width: width, height: height };
};

;