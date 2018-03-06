export default class ManualTimer {
  constructor() {
    this.ticksRemaining = 0;
    this.nextCallback = null;
  }

  getTick(callback) {
    this.nextCallback = callback;
  }

  oneTick() {
    if (typeof this.nextCallback === "function") {
      this.nextCallback();
    }
  }

  xTicks(ticks, delay = 300) {
    this.ticksRemaining = ticks;
    this.oneTick();
    this.ticksRemaining--;
    this.tickInterval = setInterval(() => {
      if (this.ticksRemaining > 0) {
        this.ticksRemaining--;
        this.oneTick();
      } else {
        clearInterval(this.tickInterval);
      }
    }, delay);
  }
}