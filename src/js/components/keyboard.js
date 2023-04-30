import CreateElement from './createElement';

export default class Keyboard {
  constructor(classData) {
    this.container = null;
    this.keyboard = null;
    this.classData = classData;
  }

  start() {
    this.keyboard = new CreateElement('div').create();
    this.keyboard.className = this.classData.keyboard;

    return this.keyboard;
  }
}
