const keyboardData = {
  numberRow: [
    {
      code: 'Backquote',
      value: {
        en: ['`', '~'],
        ru: ['ё'],
      },
      isSymbol: true,
    },
    {
      code: 'Digit1',
      value: {
        en: [1, '!'],
      },
      isSymbol: true,
    },
    {
      code: 'Digit2',
      value: {
        en: [2, '@'],
        ru: [2, '"'],
      },
      isSymbol: true,
    },
    {
      code: 'Digit3',
      value: {
        en: [3, '#'],
        ru: [3, '№'],
      },
      isSymbol: true,
    },
    {
      code: 'Digit4',
      value: {
        en: [4, '$'],
        ru: [4, ';'],
      },
      isSymbol: true,
    },
    {
      code: 'Digit5',
      value: {
        en: [5, '%'],
      },
      isSymbol: true,
    },
    {
      code: 'Digit6',
      value: {
        en: [6, '^'],
        ru: [6, ':'],
      },
      isSymbol: true,
    },
    {
      code: 'Digit7',
      value: {
        en: [7, '&'],
        ru: [7, '?'],
      },
      isSymbol: true,
    },
    {
      code: 'Digit8',
      value: {
        en: [8, '*'],
      },
      isSymbol: true,
    },
    {
      code: 'Digit9',
      value: {
        en: [9, '('],
      },
      isSymbol: true,
    },
    {
      code: 'Digit0',
      value: {
        en: [0, ')'],
      },
      isSymbol: true,
    },
    {
      code: 'Minus',
      value: {
        en: ['-', '_'],
      },
      isSymbol: true,
    },
    {
      code: 'Equal',
      value: {
        en: ['=', '+'],
      },
      isSymbol: true,
    },
    {
      code: 'Backspace',
      value: {
        en: ['Backspace'],
      },
      isSymbol: false,
    },
  ],
  firstRow: [
    {
      code: 'Tab',
      value: {
        en: ['Tab'],
      },
      isSymbol: false,
    },
    {
      code: 'KeyQ',
      value: {
        en: ['q'],
        ru: ['й'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyW',
      value: {
        en: ['w'],
        ru: ['ц'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyE',
      value: {
        en: ['e'],
        ru: ['у'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyR',
      value: {
        en: ['r'],
        ru: ['к'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyT',
      value: {
        en: ['t'],
        ru: ['е'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyY',
      value: {
        en: ['y'],
        ru: ['н'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyU',
      value: {
        en: ['u'],
        ru: ['г'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyI',
      value: {
        en: ['i'],
        ru: ['ш'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyO',
      value: {
        en: ['o'],
        ru: ['щ'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyP',
      value: {
        en: ['p'],
        ru: ['з'],
      },
      isSymbol: true,
    },
    {
      code: 'BracketLeft',
      value: {
        en: ['[', '{'],
        ru: ['х'],
      },
      isSymbol: true,
    },
    {
      code: 'BracketRight',
      value: {
        en: [']', '}'],
        ru: ['ъ'],
      },
      isSymbol: true,
    },
    {
      code: 'Backslash',
      value: {
        en: ['\\', '|'],
        ru: ['\\', '/'],
      },
      isSymbol: true,
    },
    {
      code: 'Delete',
      value: {
        en: ['DEL'],
      },
      isSymbol: false,
    },
  ],
  secondRow: [
    {
      code: 'CapsLock',
      value: {
        en: ['Caps Lock'],
      },
      isSymbol: false,
    },
    {
      code: 'KeyA',
      value: {
        en: ['a'],
        ru: ['ф'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyS',
      value: {
        en: ['s'],
        ru: ['ы'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyD',
      value: {
        en: ['d'],
        ru: ['в'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyF',
      value: {
        en: ['f'],
        ru: ['а'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyG',
      value: {
        en: ['g'],
        ru: ['п'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyH',
      value: {
        en: ['h'],
        ru: ['р'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyJ',
      value: {
        en: ['j'],
        ru: ['о'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyK',
      value: {
        en: ['k'],
        ru: ['л'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyL',
      value: {
        en: ['l'],
        ru: ['д'],
      },
      isSymbol: true,
    },
    {
      code: 'Semicolon',
      value: {
        en: [';', ':'],
        ru: ['ж'],
      },
      isSymbol: true,
    },
    {
      code: 'Quote',
      value: {
        en: ['\'', '"'],
        ru: ['э'],
      },
      isSymbol: true,
    },
    {
      code: 'Enter',
      value: {
        en: ['Enter'],
      },
      isSymbol: false,
    },
  ],
  thirdRow: [
    {
      code: 'ShiftLeft',
      value: {
        en: ['Shift'],
      },
      isSymbol: false,
    },
    {
      code: 'KeyZ',
      value: {
        en: ['z'],
        ru: ['я'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyX',
      value: {
        en: ['x'],
        ru: ['ч'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyC',
      value: {
        en: ['c'],
        ru: ['с'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyV',
      value: {
        en: ['v'],
        ru: ['м'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyB',
      value: {
        en: ['b'],
        ru: ['и'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyN',
      value: {
        en: ['n'],
        ru: ['т'],
      },
      isSymbol: true,
    },
    {
      code: 'KeyM',
      value: {
        en: ['m'],
        ru: ['ь'],
      },
      isSymbol: true,
    },
    {
      code: 'Comma',
      value: {
        en: [',', '<'],
        ru: ['б'],
      },
      isSymbol: true,
    },
    {
      code: 'Period',
      value: {
        en: ['.', '>'],
        ru: ['ю'],
      },
      isSymbol: true,
    },
    {
      code: 'Slash',
      value: {
        en: ['/', '?'],
        ru: ['.', ','],
      },
      isSymbol: true,
    },
    {
      code: 'ArrowUp',
      value: {
        en: ['↑'],
      },
      isSymbol: false,
    },
    {
      code: 'ShiftRight',
      value: {
        en: ['Shift'],
      },
      isSymbol: false,
    },
  ],
  functionalRow: [
    {
      code: 'ControlLeft',
      value: {
        en: ['Ctrl'],
      },
      isSymbol: false,
    },
    {
      code: 'MetaLeft',
      value: {
        en: ['Win'],
      },
      isSymbol: false,
    },
    {
      code: 'AltLeft',
      value: {
        en: ['Alt'],
      },
      isSymbol: false,
    },
    {
      code: 'Space',
      value: {
        en: [' '],
      },
      isSymbol: true,
    },
    {
      code: 'AltRight',
      value: {
        en: ['Alt'],
      },
      isSymbol: false,
    },
    {
      code: 'ArrowLeft',
      value: {
        en: ['←'],
      },
      isSymbol: false,
    },
    {
      code: 'ArrowDown',
      value: {
        en: ['↓'],
      },
      isSymbol: false,
    },
    {
      code: 'ArrowRight',
      value: {
        en: ['→'],
      },
      isSymbol: false,
    },
    {
      code: 'ControlRight',
      value: {
        en: ['Ctrl'],
      },
      isSymbol: false,
    },
  ],
};

export default keyboardData;
