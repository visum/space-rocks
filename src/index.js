import init from "./utils/init";
import game from "./game/";

const {canvas, width, height} = init(document.querySelector("#game"), document);
const canvasContext = canvas.getContext('2d');
