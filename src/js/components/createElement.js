export default class CreateElement {
  constructor(tagName) {
    this.element = null;
    this.tagName = tagName;
  }

  create() {
    this.element = document.createElement(this.tagName);

    return this.element;
  }
}
