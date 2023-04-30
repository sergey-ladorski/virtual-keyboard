import CreateElement from './createElement';

export default class TextArea {
  constructor(selector) {
    this.textArea = null;
    this.selector = selector;
    this.caretPosition = 0;
  }

  start() {
    this.textArea = new CreateElement('textArea').create();
    this.textArea.className = this.selector;
    this.textArea.autofocus = true;

    this.updateCaretOnClick();

    return this.textArea;
  }

  updateCaretOnClick() {
    this.textArea.addEventListener('click', () => {
      this.caretPosition = this.getCaretPosition(this.textArea);
    });
  }

  updateCaretOnKey(n) {
    this.caretPosition += n;
    this.caretPosition = this.caretPosition < 0 ? 0 : this.caretPosition;
  }

  setValue(value) {
    const start = this.textArea.value.slice(0, this.caretPosition);
    const end = this.textArea.value.slice(this.caretPosition);

    this.textArea.value = `${start}${value}${end}`;
    this.caretPosition += value.length;
    this.textArea.focus();
    this.textArea.setSelectionRange(this.caretPosition, this.caretPosition);
  }

  deleteSymbol(rangeStart, rangeEnd) {
    if (rangeStart === 1 && this.caretPosition === 0) {
      this.textArea.focus();
      return;
    }
    const start = this.textArea.value.slice(0, this.caretPosition - rangeStart);
    const end = this.textArea.value.slice(this.caretPosition + rangeEnd);
    this.textArea.value = `${start}${end}`;

    this.caretPosition = start.length;
    this.textArea.setSelectionRange(this.caretPosition, this.caretPosition);
    this.textArea.focus();
  }

  getCaretPosition(element) {
    element.focus();
    if (element.selectionStart) {
      return element.selectionStart;
    }
    if (document.selection) {
      const selection = document.selection.createRange();
      const duplicate = selection.duplicate();
      selection.collapse(true);
      duplicate.moveToElementText(element);
      duplicate.setEndPoint('EndToEnd', selection);
      this.caretPosition = duplicate.text.length;
      return this.caretPosition;
    }
    return 0;
  }
}
