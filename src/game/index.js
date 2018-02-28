import Guid from "guid";

export default class Game {
  constructor(config, canvas) {
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

    this._setInitialWorldState();
    this._init();
  }

  async addSystemAsync(system) {
    const {world, _systems} = this;
    system.id = Guid.raw();
    await system.prepareToBeAddedAsync(world);
    _systems.push(system);
  }

  async removeSystemAsync() {

  }

  async addEntityAsync() {

  }

  async removeEntityAsync() {
    
  }

  createEntity(template) {

  }

  start() {
    const {world} = this;
    world.startTime = performance.now();
    // start ticking!
  }
  
  stop() {

  }

  pause() {

  }

  resume() {

  }

  tick() {
    const { _systems, world } = this;
    world.time = performance.now() = world.startTime;
    // As per Principle 3: don't allow any system to hold us up forever.
    // 20 ms for one system is way longer than the total 16ms/frame budget,
    // so this should maybe be smaller, but we'll start here.
    let result = _systems.reduce((previous, current) => {
      return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
          current.updateAsync().then(() => {
            clearTimeout(timeoutId);
          });
        }, 20);
      });
    });
  }

  _init(config) {
    
  }

  _setInitialWorldState() {
    this.world = {
      running: false,
      paused: false,
      time: 0,
      startTime: 0,
      entities: [],
      systems: []
    };
  }

}
