const keyboardData = [
  {
    keyEn: '`',
    keyEnShift: '~',
    keyRu: 'ё',
    keyRuShift: 'Ё',
    code: 'Backquote',
  },
  {
    keyEn: '1',
    keyEnShift: '!',
    keyRu: '1',
    keyRuShift: '!',
    code: 'Digit1',
  },
  {
    keyEn: '2',
    keyEnShift: '@',
    keyRu: '2',
    keyRuShift: '"',
    code: 'Digit2',
  },
  {
    keyEn: '3',
    keyEnShift: '#',
    keyRu: '3',
    keyRuShift: '№',
    code: 'Digit3',
  },
  {
    keyEn: '4',
    keyEnShift: '$',
    keyRu: '4',
    keyRuShift: ';',
    code: 'Digit4',
  },
  {
    keyEn: '5',
    keyEnShift: '%',
    keyRu: '5',
    keyRuShift: '%',
    code: 'Digit5',
  },
  {
    keyEn: '6',
    keyEnShift: '^',
    keyRu: '6',
    keyRuShift: ':',
    code: 'Digit6',
  },
  {
    keyEn: '7',
    keyEnShift: '&',
    keyRu: '7',
    keyRuShift: '?',
    code: 'Digit7',
  },
  {
    keyEn: '8',
    keyEnShift: '*',
    keyRu: '8',
    keyRuShift: '*',
    code: 'Digit8',
  },
  {
    keyEn: '9',
    keyEnShift: '(',
    keyRu: '9',
    keyRuShift: '(',
    code: 'Digit9',
  },
  {
    keyEn: '0',
    keyEnShift: ')',
    keyRu: '0',
    keyRuShift: ')',
    code: 'Digit0',
  },
  {
    keyEn: '-',
    keyEnShift: '_',
    keyRu: '-',
    keyRuShift: '_',
    code: 'Minus',
  },
  {
    keyEn: '=',
    keyEnShift: '+',
    keyRu: '=',
    keyRuShift: '+',
    code: 'Equal',
  },
  {
    keyEn: 'Backspace',
    keyEnShift: 'Backspace',
    keyRu: 'Backspace',
    keyRuShift: 'Backspace',
    code: 'Backspace',
    functionType: true,
  },
  {
    keyEn: 'Tab',
    keyEnShift: 'Tab',
    keyRu: 'Tab',
    keyRuShift: 'Tab',
    code: 'Tab',
    functionType: true,
  },
  {
    keyEn: 'q',
    keyEnShift: 'Q',
    keyRu: 'й',
    keyRuShift: 'Й',
    code: 'KeyQ',
  },
  {
    keyEn: 'w',
    keyEnShift: 'W',
    keyRu: 'ц',
    keyRuShift: 'Ц',
    code: 'KeyW',
  },
  {
    keyEn: 'e',
    keyEnShift: 'E',
    keyRu: 'у',
    keyRuShift: 'У',
    code: 'KeyE',
  },
  {
    keyEn: 'r',
    keyEnShift: 'R',
    keyRu: 'к',
    keyRuShift: 'К',
    code: 'KeyR',
  },
  {
    keyEn: 't',
    keyEnShift: 'T',
    keyRu: 'е',
    keyRuShift: 'Е',
    code: 'KeyT',
  },
  {
    keyEn: 'y',
    keyEnShift: 'Y',
    keyRu: 'н',
    keyRuShift: 'Н',
    code: 'KeyY',
  },
  {
    keyEn: 'u',
    keyEnShift: 'U',
    keyRu: 'г',
    keyRuShift: 'Г',
    code: 'KeyU',
  },
  {
    keyEn: 'i',
    keyEnShift: 'I',
    keyRu: 'ш',
    keyRuShift: 'Ш',
    code: 'KeyI',
  },
  {
    keyEn: 'o',
    keyEnShift: 'O',
    keyRu: 'щ',
    keyRuShift: 'Щ',
    code: 'KeyO',
  },
  {
    keyEn: 'p',
    keyEnShift: 'P',
    keyRu: 'з',
    keyRuShift: 'З',
    code: 'KeyP',
  },
  {
    keyEn: '[',
    keyEnShift: '{',
    keyRu: 'х',
    keyRuShift: 'Х',
    code: 'BracketLeft',
  },
  {
    keyEn: ']',
    keyEnShift: '}',
    keyRu: 'ъ',
    keyRuShift: 'Ъ',
    code: 'BracketRight',
  },
  {
    keyEn: '\\',
    keyEnShift: '|',
    keyRu: '\\',
    keyRuShift: '/',
    code: 'Backslash',
  },
  {
    keyEn: 'Del',
    keyEnShift: 'Del',
    keyRu: 'Del',
    keyRuShift: 'Del',
    code: 'Delete',
    functionType: true,
  },
  {
    keyEn: 'Caps Lock',
    keyEnShift: 'Caps Lock',
    keyRu: 'Caps Lock',
    keyRuShift: 'Caps Lock',
    code: 'CapsLock',
    functionType: true,
  },
  {
    keyEn: 'a',
    keyEnShift: 'A',
    keyRu: 'ф',
    keyRuShift: 'Ф',
    code: 'KeyA',
  },
  {
    keyEn: 's',
    keyEnShift: 'S',
    keyRu: 'ы',
    keyRuShift: 'Ы',
    code: 'KeyS',
  },
  {
    keyEn: 'd',
    keyEnShift: 'D',
    keyRu: 'в',
    keyRuShift: 'В',
    code: 'KeyD',
  },
  {
    keyEn: 'f',
    keyEnShift: 'F',
    keyRu: 'а',
    keyRuShift: 'А',
    code: 'KeyF',
  },
  {
    keyEn: 'g',
    keyEnShift: 'G',
    keyRu: 'п',
    keyRuShift: 'П',
    code: 'KeyG',
  },
  {
    keyEn: 'h',
    keyEnShift: 'H',
    keyRu: 'р',
    keyRuShift: 'Р',
    code: 'KeyH',
  },
  {
    keyEn: 'j',
    keyEnShift: 'J',
    keyRu: 'о',
    keyRuShift: 'О',
    code: 'KeyJ',
  },
  {
    keyEn: 'k',
    keyEnShift: 'K',
    keyRu: 'л',
    keyRuShift: 'Л',
    code: 'KeyK',
  },
  {
    keyEn: 'l',
    keyEnShift: 'L',
    keyRu: 'д',
    keyRuShift: 'Д',
    code: 'KeyL',
  },
  {
    keyEn: ';',
    keyEnShift: ':',
    keyRu: 'ж',
    keyRuShift: 'Ж',
    code: 'Semicolon',
  },
  {
    keyEn: "'",
    keyEnShift: '"',
    keyRu: 'э',
    keyRuShift: 'Э',
    code: 'Quote',
  },
  {
    keyEn: 'Enter',
    keyEnShift: 'Enter',
    keyRu: 'Enter',
    keyRuShift: 'Enter',
    code: 'Enter',
    functionType: true,
  },
  {
    keyEn: 'Shift',
    keyEnShift: 'Shift',
    keyRu: 'Shift',
    keyRuShift: 'Shift',
    code: 'ShiftLeft',
    functionType: true,
  },
  {
    keyEn: 'z',
    keyEnShift: 'Z',
    keyRu: 'я',
    keyRuShift: 'Я',
    code: 'KeyZ',
  },
  {
    keyEn: 'x',
    keyEnShift: 'X',
    keyRu: 'ч',
    keyRuShift: 'Ч',
    code: 'KeyX',
  },
  {
    keyEn: 'c',
    keyEnShift: 'C',
    keyRu: 'с',
    keyRuShift: 'С',
    code: 'KeyC',
  },
  {
    keyEn: 'v',
    keyEnShift: 'V',
    keyRu: 'м',
    keyRuShift: 'М',
    code: 'KeyV',
  },
  {
    keyEn: 'b',
    keyEnShift: 'B',
    keyRu: 'и',
    keyRuShift: 'И',
    code: 'KeyB',
  },
  {
    keyEn: 'n',
    keyEnShift: 'N',
    keyRu: 'т',
    keyRuShift: 'Т',
    code: 'KeyN',
  },
  {
    keyEn: 'm',
    keyEnShift: 'M',
    keyRu: 'ь',
    keyRuShift: 'Ь',
    code: 'KeyM',
  },
  {
    keyEn: ',',
    keyEnShift: '<',
    keyRu: 'б',
    keyRuShift: 'Б',
    code: 'Comma',
  },
  {
    keyEn: '.',
    keyEnShift: '>',
    keyRu: 'ю',
    keyRuShift: 'Ю',
    code: 'Period',
  },
  {
    keyEn: '/',
    keyEnShift: '?',
    keyRu: '.',
    keyRuShift: ',',
    code: 'Slash',
  },
  {
    keyEn: '↑',
    keyEnShift: '↑',
    keyRu: '↑',
    keyRuShift: '↑',
    code: 'ArrowUp',
  },
  {
    keyEn: 'Shift',
    keyEnShift: 'Shift',
    keyRu: 'Shift',
    keyRuShift: 'Shift',
    code: 'ShiftRight',
    functionType: true,
  },
  {
    keyEn: 'Ctrl',
    keyEnShift: 'Ctrl',
    keyRu: 'Ctrl',
    keyRuShift: 'Ctrl',
    code: 'ControlLeft',
    functionType: true,
  },
  {
    keyEn: 'Win',
    keyEnShift: 'Win',
    keyRu: 'Win',
    keyRuShift: 'Win',
    code: 'MetaLeft',
    functionType: true,
  },
  {
    keyEn: 'Alt',
    keyEnShift: 'Alt',
    keyRu: 'Alt',
    keyRuShift: 'Alt',
    code: 'AltLeft',
    functionType: true,
  },
  {
    keyEn: ' ',
    keyEnShift: ' ',
    keyRu: ' ',
    keyRuShift: ' ',
    code: 'Space',
    functionType: true,
  },
  {
    keyEn: 'Alt',
    keyEnShift: 'Alt',
    keyRu: 'Alt',
    keyRuShift: 'Alt',
    code: 'AltRight',
    functionType: true,
  },
  {
    keyEn: '←',
    keyEnShift: '←',
    keyRu: '←',
    keyRuShift: '←',
    code: 'ArrowLeft',
  },
  {
    keyEn: '↓',
    keyEnShift: '↓',
    keyRu: '↓',
    keyRuShift: '↓',
    code: 'ArrowDown',
  },
  {
    keyEn: '→',
    keyEnShift: '→',
    keyRu: '→',
    keyRuShift: '→',
    code: 'ArrowRight',
  },
  {
    keyEn: 'Ctrl',
    keyEnShift: 'Ctrl',
    keyRu: 'Ctrl',
    keyRuShift: 'Ctrl',
    code: 'ControlRight',
    functionType: true,
  },
];
export default keyboardData;
