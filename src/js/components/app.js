import Header from './header';
import Main from './main';

export default class App {
  constructor(classData, keyboardData) {
    this.classData = classData;
    this.keyboardData = keyboardData;
    this.page = null;
    this.container = null;
  }

  start() {
    this.page = document.querySelector(`.${this.classData.page}`);
    this.header = new Header(this.classData).start();
    this.main = new Main(this.classData, this.keyboardData).start();

    this.page.append(this.header);
    this.page.append(this.main);
  }
}
