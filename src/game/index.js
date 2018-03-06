import Guid from "guid";
import timedPromise from "../utils/timedPromise";


export default class Game {
  constructor(config, canvas, timer) {
    if (!config) {
      throw new Error("Game needs a config to run");
    }

    if (!canvas) {
      throw new Error("Game needs a canvas to draw to");
    }

    this.canvas = canvas;
    this.config = config;
    this.timer = new timer();

    this.world = {};

    this._systems = [];

    this._tickTimer = (callback) => {
      timer.getTick(callback);
    };

    this._setInitialWorldState();
    this._init();
  }

  async addSystemAsync(system) {
    const {world, _systems} = this;
    system.id = Guid.raw();
    await system.prepareToBeAddedAsync(world);
    _systems.push(system);
  }

  async removeSystemAsync(system) {
    const {_systems} = this;
    await system.prepareToBeRemovedAsync();
    _systems.splice(_systems.indexOf(system),1);
  }

  async addEntityAsync(entity) {
    const {_systems, world} = this;
    world.entities.push(entity);
    return _systems.reduce((previous, current) => {
      return previous.then(timedPromise(current.entityAddedAsync(entity), 10));
    }, Promise.resolve());
  }

  async removeEntityAsync(entity) {
    const {_systems, world} = this;
    world.entities.splice(world.entities.indexOf(entity), 1);
    return _systems.reduce((previous, current) => {
      return previous.then(timedPromise(current.entityRemovedAsync(entity), 10));
    }, Promise.resolve());
  }

  createEntity(template) {

  }

  start() {
    const {world, _tickTimer, tick} = this;
    world.startTime = performance.now();
    world.isRunning = true;
    _tickTimer(tick);
  }
  
  stop() {
    world.isRunning = false;
    // we should do something else here, I'm sure...
  }

  pause() {
    this.world.isPaused = true;
  }

  resume() {
    this.world.isPaused = false;
    this._tickTimer(this.tick);
  }

  tick() {
    const { _systems, world, _tickTimer, tick } = this;
    world.time = performance.now() - world.startTime;
    // Principle 3 says we can't allow a system to hold us up forever.
    // 20 ms for one system is way longer than the total 16ms/frame budget,
    // so this should maybe be smaller, but we'll start here.
    const update = _systems.reduce((previous, current) => {
      return previous.then(timedPromise(current, 20));
    }, Promise.resolve());
    update.then(() => {
      if (world.isRunning && !world.isPaused) {
        _tickTimer(tick);
      }
    });
  }

  _init(config) {
    
  }

  _setInitialWorldState() {
    this.world = {
      isRunning: false,
      isPaused: false,
      time: 0,
      startTime: 0,
      entities: [],
      systems: []
    };
  }

}
