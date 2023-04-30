import CreateElement from './createElement';
import TextArea from './textArea';
import ActiveButton from './activeButton';
import AnimateKey from './animateKey';
import keyboardData from '../data/keyboardData';

export default class ButtonList {
  constructor(
    data,
    container,
  ) {
    this.data = data;
    this.buttonClassName = this.data.buttonList.button;
    this.systemButtonClassName = this.data.buttonList.functionType;
    this.activeClassName = this.data.buttonList.active;
    this.container = container;
    this.pressing = new ActiveButton('active');

    this.instanceOfTextarea = new TextArea('text-area');
    this.textArea = this.instanceOfTextarea.start();

    this.elements = this.container.children;
    this.isShift = false;
    this.isCapsLock = false;

    this.container.parentElement.append(this.textArea);
  }

  start() {
    this.activeButton = new ActiveButton(this.data.buttonList.active);

    this.addKeyToKeyboard(keyboardData);
    this.activeButton.handleKeyDown(this.elements);
  }

  addKeyToKeyboard(array) {
    array.forEach((item) => {
      const {
        keyEn, keyRu, code,
      } = item;

      const button = new CreateElement('button').create();

      if (item.system) {
        button.classList.add(this.systemButtonClassName);
        button.classList.add(code);
        button.system = true;
      } else {
        button.classList.add(this.buttonClassName);
      }

      button.code = code;

      button.addEventListener('click', () => {
        if (!button.system) {
          this.instanceOfTextarea.setValue(button.innerText);
        } else {
          this.textArea.focus();
        }
      });

      if (!localStorage.getItem('language')) {
        localStorage.setItem('language', 'en');
      } else {
        button.innerText = localStorage.getItem('language') === 'en'
          ? keyEn
          : keyRu;
      }

      this.container.append(button);
    });

    this.animateKey = new AnimateKey(this.elements, this.activeClassName);
  }
}
