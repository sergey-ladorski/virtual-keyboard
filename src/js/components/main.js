import ButtonList from './buttonList';
import CreateElement from './createElement';
import Keyboard from './keyboard';

export default class Main {
  constructor(data) {
    this.data = data;
    this.main = null;
    this.keyboard = null;
  }

  start() {
    this.main = new CreateElement('main').create();
    this.main.className = this.data.main;

    this.keyboard = new Keyboard(this.data).start();

    this.main.append(this.keyboard);

    new ButtonList(this.data, this.keyboard).start();

    return this.main;
  }
}
