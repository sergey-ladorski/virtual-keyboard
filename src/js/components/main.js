import ButtonList from './buttonList';
import CreateElement from './createElement';
import Keyboard from './keyboard';

export default class Main {
  constructor(classData, keyboardData) {
    this.classData = classData;
    this.keyboardData = keyboardData;
    this.main = null;
    this.keyboard = null;
  }

  start() {
    this.main = new CreateElement('main').create();
    this.main.className = this.classData.main;

    this.keyboard = new Keyboard(this.classData).start();

    this.main.append(this.keyboard);

    new ButtonList(this.classData, this.keyboardData, this.keyboard).start();

    return this.main;
  }
}
