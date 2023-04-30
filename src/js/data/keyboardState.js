function getLocalLang() {
  return localStorage.getItem('language') || 'en';
}
const keyboardState = {
  lang: getLocalLang(),
  isCapsLock: false,
  isShift: false,
};

export default keyboardState;
