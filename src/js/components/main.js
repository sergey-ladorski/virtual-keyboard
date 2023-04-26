import CreateElement from './createElement';
import Keyboard from './keyboard';

export default class Main {
  constructor(data) {
    this.data = data;
    this.main = null;
    this.keyboard = null;
  }

  start() {
    const { main } = this.data;

    this.main = new CreateElement('main').create();
    this.main.className = main;

    this.keyboard = new Keyboard(this.data).start();

    this.main.append(this.keyboard);

    return this.main;
  }
}
