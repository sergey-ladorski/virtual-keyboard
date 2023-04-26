function getLocalLang() {
  return localStorage.getItem('lang') || 'en';
}
const keyboardState = {
  lang: getLocalLang(),
  isCapsLock: false,
  isShift: false,
};

export default keyboardState;
