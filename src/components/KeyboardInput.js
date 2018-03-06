export default class KeyboardInput {
  // watch is an array of keyCodes that should be attached to the component
  constructor(watch = []) {
    this.type = "keyboard-input";
    this.watch = watch;
  }
}