import CreateElement from './createElement';

export default class TextArea {
  constructor(className) {
    this.textArea = null;
    this.className = className;
    this.caretPosition = 0;
  }

  start() {
    this.textArea = new CreateElement('textArea').create();
    this.textArea.className = this.className;
    this.textArea.autofocus = true;
    return this.textArea;
  }
}
