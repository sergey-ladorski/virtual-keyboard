import CreateElement from './createElement';

export default class Keyboard {
  constructor(data) {
    this.container = null;
    this.keyboard = null;
    this.data = data;
  }

  start() {
    this.keyboard = new CreateElement('div').create();
    this.keyboard.className = this.data.keyboard;

    return this.keyboard;
  }
}
