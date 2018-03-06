import Position from './../components/Position';
import Size from './../components/Size';

export default class Camera extends Entity {
  constructor(args) {
    this.super([...args]);
    this.name = "Camera";

    this.addComponent(new Position(0, 0));
    this.addComponent(new Size(200, 200));
  }

}