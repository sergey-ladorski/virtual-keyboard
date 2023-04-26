import Header from './header';
import Main from './main';

export default class App {
  constructor(data) {
    this.data = data;
    this.page = null;
    this.container = null;
  }

  start() {
    this.page = document.querySelector(`.${this.data.page}`);
    this.header = new Header(this.data).start();
    this.main = new Main(this.data).start();

    this.page.append(this.header);
    this.page.append(this.main);
  }
}
