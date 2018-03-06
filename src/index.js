import init from "./utils/init";
import Game from "./game/";
import GameTimer from "./utils/AnimationFrameGameTimer";

const timer = new GameTimer();

const {canvas, width, height} = init(document.querySelector("#game"), document);
const canvasContext = canvas.getContext('2d');

