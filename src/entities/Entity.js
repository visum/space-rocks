export default class Entity {
  constructor() {
    this.name = "Entity";
    this.components = [];
  }

  addComponent(component) {
    this.components.push(component);
  }

  removeComponent(component) {
    this.components.splice(this.components.indexOf(component), 1);
  }

  getComponentsByType(type) {
    return this.components.filter((component) => {
      return component.type === type;
    });
  }
}