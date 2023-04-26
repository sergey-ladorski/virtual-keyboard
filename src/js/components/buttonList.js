// import CreateElement from './createElement';
import TextArea from './textArea';

export default class ButtonList {
  constructor(
    data,
    container,
  ) {
    this.data = data;
    this.container = container;
    this.textArea = null;
  }

  start() {
    this.textArea = new TextArea('textArea').start();
    this.textArea.className = this.data.textArea;

    this.container.prepend(this.textArea);
  }
}
