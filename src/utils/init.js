export default function(container, doc) {
  const {width, height} = container.getBoundingClientRect();
  const mainCanvas = doc.createElement("canvas");
  mainCanvas.width = width;
  mainCanvas.height = height;

  container.appendChild(mainCanvas);
  return {canvas: mainCanvas, width: width, height: height};
};
