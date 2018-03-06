export default class GameTimer {
  constructor() {
    if (!window || !window.requestAnimationFrame) {
      throw new Error("GameTimer must run in a browser with window.requestAnimatinoFrame");
    }
  }

  getTick(cb) {
    window.requestAnimationFrame(cb);
  }
}