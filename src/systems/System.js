export default class System {
  constructor(world) {
    this.world = world;
    this.entities = {};
    this.suspended = false;
    this.id = null;
  }

  async entityAddedAsync(entity) {
    this.entities[entity.id] = entity;
  }

  async entityRemovedAsync(entity) {
    this.entities[entity.id] = undefined;
  }

  async prepareToBeAddedAsync() {

  }

  async prepareToBeRemovedAsync() {

  }

  async updateAsync() {
    throw new Error("updateAsync is an abstract method must be overridden.");
  }
}