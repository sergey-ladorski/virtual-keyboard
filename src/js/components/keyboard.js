import CreateElement from './createElement';
import ButtonList from './buttonList';

export default class Keyboard {
  constructor(data) {
    this.container = null;
    this.keyboard = null;
    this.data = data;
  }

  start() {
    const { keyboard, keyboardContainer } = this.data;

    this.container = new CreateElement('div').create();
    this.keyboard = new CreateElement('div').create();

    this.container.className = keyboard;
    this.keyboard.className = keyboardContainer;

    new ButtonList(this.data, this.container).start();

    this.container.append(this.keyboard);
    return this.container;
  }
}
