import Entity from "./Entity";
import Position from "../components/Position";
import Size from "../components/Size";
import KeyboardInput from "../components/KeyboardInput";

export default class Ship extends Entity {
  constructor(position = {x:0, y:0}, size={width:20, height: 20}) {
    super();
    this.name = "Ship";

    this.addComponent(new Position(position.x, position.y));
    this.addComponent(new Size(size.width, size.height));
    this.addComponent(new KeyboardInput());
    
  }
};