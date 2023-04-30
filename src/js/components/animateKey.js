export default class AnimateKey {
  constructor(array, active) {
    const buttons = [...array];
    buttons.forEach((button) => {
      button.addEventListener('mousedown', () => {
        if (button.code !== 'CapsLock') {
          button.classList.add(active);
        }
      });

      button.addEventListener('mouseup', () => {
        if (button.code !== 'CapsLock') {
          button.classList.remove(active);
        }
      });

      button.addEventListener('mouseleave', () => {
        if (button.code !== 'CapsLock') {
          button.classList.remove(active);
        }
      });

      button.addEventListener('click', () => {
        if (button.code === 'CapsLock') {
          button.classList.toggle(active);
        }
      });
    });
  }
}
