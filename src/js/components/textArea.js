import CreateElement from './createElement';

export default class TextArea {
  constructor(className) {
    this.textArea = null;
    this.className = className;
  }

  start() {
    this.textArea = new CreateElement(this.className).create();
    this.textArea.autofocus = true;

    return this.textArea;
  }
}
