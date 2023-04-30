import CreateElement from './createElement';
import TextArea from './textArea';
import ActiveButton from './activeButton';
import AnimateKey from './animateKey';

export default class ButtonList {
  constructor(
    classData,
    keyboardData,
    container,
  ) {
    this.classData = classData;
    this.keyboardData = keyboardData;
    this.buttonSelector = this.classData.buttonList.button;
    this.buttonTypeFunctionSelector = this.classData.buttonList.functionType;
    this.activeSelector = this.classData.buttonList.active;
    this.container = container;

    this.instanceOfTextarea = new TextArea('text-area');
    this.textArea = this.instanceOfTextarea.start();

    this.elements = this.container.children;
    this.isShift = false;
    this.isCapsLock = false;

    this.container.parentElement.append(this.textArea);
  }

  start() {
    this.addKeyToKeyboard(this.keyboardData);

    this.activeButton = new ActiveButton(this.classData.buttonList.active);
    this.activeButton.handleKeyDown(this.elements);

    this.handleKeyboardInput();
    this.handleShift();
    this.handleCapsLock();
  }

  addKeyToKeyboard(data) {
    data.forEach((item) => {
      const {
        keyEn, keyRu, code,
      } = item;

      const button = new CreateElement('button').create();

      if (item.functionType) {
        button.classList.add(this.buttonSelector, this.buttonTypeFunctionSelector, code);
        button.system = true;
      } else {
        button.classList.add(this.buttonSelector);
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

    this.animateKey = new AnimateKey(this.elements, this.activeSelector);

    this.switchLanguage(this.elements);
    this.handleVirtualInput(this.elements);
  }

  handleVirtualInput(data) {
    const buttons = [...data];
    buttons.forEach((button) => {
      if (button.code === 'ShiftLeft' || button.code === 'ShiftRight') {
        button.addEventListener('mousedown', () => {
          this.shift = true;

          this.changeRegister(this.elements);

          button.addEventListener('mouseleave', () => {
            this.shift = false;
            this.changeRegister(this.elements);
          });
        });
        button.addEventListener('mouseup', () => {
          this.shift = false;

          this.changeRegister(this.elements);
        });
      } else if (button.code === 'CapsLock') {
        button.addEventListener('click', () => {
          this.caps = !this.caps;
          this.changeRegister(this.elements);
        });
      } else if (button.code === 'Enter') {
        button.addEventListener('click', () => {
          this.instanceOfTextarea.setValue('\n');
        });
      } else if (button.code === 'Space') {
        button.addEventListener('click', () => {
          this.instanceOfTextarea.setValue(' ');
        });
      } else if (button.code === 'Tab') {
        button.addEventListener('click', () => {
          this.instanceOfTextarea.setValue('\t');
        });
      } else if (button.code === 'Backspace') {
        button.addEventListener('click', () => {
          this.instanceOfTextarea.deleteSymbol(1, 0);
        });
      } else if (button.code === 'Delete') {
        button.addEventListener('click', () => {
          this.instanceOfTextarea.deleteSymbol(0, 1);
        });
      }
    });
  }

  handleKeyboardInput() {
    document.addEventListener('keydown', (event) => {
      this.textArea.focus();
      if (event.code === 'Backspace') {
        this.instanceOfTextarea.updateCaretOnKey(-1);
      } else if (event.code === 'Delete') {
        this.instanceOfTextarea.updateCaretOnKey(0);
      } else if (event.code === 'Tab') {
        event.preventDefault();
        this.instanceOfTextarea.setValue('\t');
      } else if (event.code === 'Space') {
        event.preventDefault();
        this.instanceOfTextarea.setValue(' ');
      } else if (event.code === 'Enter') {
        event.preventDefault();
        this.instanceOfTextarea.setValue('\n');
      } else if (event.code === 'AltLeft') {
        event.preventDefault();
      } else if (event.code === 'AltRight') {
        event.preventDefault();
      } else if (event.key.length === 1) {
        event.preventDefault();
        const buttons = [...this.elements];
        buttons.forEach((button) => {
          if (button.code === event.code) {
            this.instanceOfTextarea.setValue(button.innerText);
          }
        });
      }
      this.textArea.focus();
    });
  }

  changeRegister(data) {
    const buttons = [...data];
    buttons.forEach((item, i) => {
      const isEng = localStorage.getItem('language') === 'en';

      if (!this.caps) {
        if (this.shift) {
          buttons[i].innerText = isEng
            ? this.keyboardData[i].keyEnShift
            : this.keyboardData[i].keyRuShift;
        } else {
          buttons[i].innerText = isEng
            ? this.keyboardData[i].keyEn
            : this.keyboardData[i].keyRu;
        }
      } else if (this.shift && this.caps) {
        buttons[i].innerText = isEng
          ? this.keyboardData[i].keyEnShift
          : this.keyboardData[i].keyRuShift;
        buttons[i].innerText = buttons[i].system
          ? buttons[i].innerText
          : buttons[i].innerText.toLowerCase();
      } else {
        buttons[i].innerText = isEng
          ? this.keyboardData[i].keyEn
          : this.keyboardData[i].keyRu;
        buttons[i].innerText = buttons[i].system
          ? buttons[i].innerText
          : buttons[i].innerText.toUpperCase();
      }
    });
  }

  handleShift() {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        this.shift = true;
        this.changeRegister(this.elements);
      }
    });

    document.addEventListener('keyup', (event) => {
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        this.shift = false;
        this.changeRegister(this.elements);
      }
    });
  }

  handleCapsLock() {
    document.addEventListener('keyup', (event) => {
      if (event.code === 'CapsLock') {
        this.caps = !this.caps;
        this.changeRegister(this.elements);
      }
    });
  }

  switchLanguage(data) {
    window.addEventListener('keydown', (event) => {
      if (event.altKey && event.ctrlKey) {
        localStorage.setItem('language', localStorage.getItem('language') === 'en'
          ? 'ru'
          : 'en');

        this.changeRegister(data);
      }
    });
  }
}
