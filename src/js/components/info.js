import CreateElement from './createElement';

export default class Info {
  constructor(selector, text) {
    this.selector = selector;
    this.info = null;
    this.text = text;
  }

  start() {
    this.info = new CreateElement('p').create();
    this.info.className = this.selector;
    this.info.innerText = this.text;

    return this.info;
  }
}
