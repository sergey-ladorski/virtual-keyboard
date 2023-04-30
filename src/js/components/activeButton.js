export default class ActiveButton {
  constructor(active) {
    this.active = active;
    this.isReapeated = true;
  }

  handleKeyDown(elements) {
    const buttons = [...elements];
    this.handleKeyUp(buttons);
    document.addEventListener('keydown', (event) => {
      if (event.repeat !== undefined) {
        this.isReapeated = !event.repeat;
      }

      if (!this.isReapeated) {
        return;
      }

      buttons.forEach((button) => {
        if (button.code === 'CapsLock' && button.code === event.code) {
          button.classList.toggle(this.active);
        } else if (button.code === event.code) {
          button.classList.add(this.active);
        }
      });
    });
  }

  handleKeyUp(elements) {
    document.addEventListener('keyup', (event) => {
      elements.forEach((button) => {
        if (button.code !== 'CapsLock' && button.code === event.code) {
          button.classList.remove(this.active);
        }
      });
      this.isReapeated = true;
    });
  }
}
