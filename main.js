/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/activeButton.js":
/*!***************************************!*\
  !*** ./js/components/activeButton.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ActiveButton)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar ActiveButton = /*#__PURE__*/function () {\n  function ActiveButton(active) {\n    _classCallCheck(this, ActiveButton);\n\n    this.active = active;\n    this.isReapeated = true;\n  }\n\n  _createClass(ActiveButton, [{\n    key: \"handleKeyDown\",\n    value: function handleKeyDown(elements) {\n      var _this = this;\n\n      var buttons = _toConsumableArray(elements);\n\n      this.handleKeyUp(buttons);\n      document.addEventListener('keydown', function (event) {\n        if (event.repeat !== undefined) {\n          _this.isReapeated = !event.repeat;\n        }\n\n        if (!_this.isReapeated) {\n          return;\n        }\n\n        buttons.forEach(function (button) {\n          if (button.code === 'CapsLock' && button.code === event.code) {\n            button.classList.toggle(_this.active);\n          } else if (button.code === event.code) {\n            button.classList.add(_this.active);\n          }\n        });\n      });\n    }\n  }, {\n    key: \"handleKeyUp\",\n    value: function handleKeyUp(elements) {\n      var _this2 = this;\n\n      document.addEventListener('keyup', function (event) {\n        elements.forEach(function (button) {\n          if (button.code !== 'CapsLock' && button.code === event.code) {\n            button.classList.remove(_this2.active);\n          }\n        });\n        _this2.isReapeated = true;\n      });\n    }\n  }]);\n\n  return ActiveButton;\n}();\n\n\n\n//# sourceURL=webpack:///./js/components/activeButton.js?");

/***/ }),

/***/ "./js/components/animateKey.js":
/*!*************************************!*\
  !*** ./js/components/animateKey.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimateKey)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar AnimateKey = /*#__PURE__*/_createClass(function AnimateKey(array, active) {\n  _classCallCheck(this, AnimateKey);\n\n  var buttons = _toConsumableArray(array);\n\n  buttons.forEach(function (button) {\n    button.addEventListener('mousedown', function () {\n      if (button.code !== 'CapsLock') {\n        button.classList.add(active);\n      }\n\n      button.addEventListener('mouseleave', function () {\n        if (button.code !== 'CapsLock') {\n          button.classList.remove(active);\n        }\n      });\n    });\n    button.addEventListener('mouseup', function () {\n      if (button.code !== 'CapsLock') {\n        button.classList.remove(active);\n      }\n    });\n    button.addEventListener('click', function () {\n      if (button.code === 'CapsLock') {\n        button.classList.toggle(active);\n      }\n    });\n  });\n});\n\n\n\n//# sourceURL=webpack:///./js/components/animateKey.js?");

/***/ }),

/***/ "./js/components/app.js":
/*!******************************!*\
  !*** ./js/components/app.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./js/components/header.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./js/components/main.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\nvar App = /*#__PURE__*/function () {\n  function App(classData, keyboardData) {\n    _classCallCheck(this, App);\n\n    this.classData = classData;\n    this.keyboardData = keyboardData;\n    this.page = null;\n    this.container = null;\n  }\n\n  _createClass(App, [{\n    key: \"start\",\n    value: function start() {\n      this.page = document.querySelector(\".\".concat(this.classData.page));\n      this.header = new _header__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.classData).start();\n      this.main = new _main__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.classData, this.keyboardData).start();\n      this.page.append(this.header);\n      this.page.append(this.main);\n    }\n  }]);\n\n  return App;\n}();\n\n\n\n//# sourceURL=webpack:///./js/components/app.js?");

/***/ }),

/***/ "./js/components/buttonList.js":
/*!*************************************!*\
  !*** ./js/components/buttonList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ButtonList)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./js/components/createElement.js\");\n/* harmony import */ var _textArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textArea */ \"./js/components/textArea.js\");\n/* harmony import */ var _activeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activeButton */ \"./js/components/activeButton.js\");\n/* harmony import */ var _animateKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animateKey */ \"./js/components/animateKey.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\n\n\nvar ButtonList = /*#__PURE__*/function () {\n  function ButtonList(classData, keyboardData, container) {\n    _classCallCheck(this, ButtonList);\n\n    this.classData = classData;\n    this.keyboardData = keyboardData;\n    this.buttonSelector = this.classData.buttonList.button;\n    this.buttonTypeFunctionSelector = this.classData.buttonList.functionType;\n    this.activeSelector = this.classData.buttonList.active;\n    this.container = container;\n    this.instanceOfTextarea = new _textArea__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('text-area');\n    this.textArea = this.instanceOfTextarea.start();\n    this.elements = this.container.children;\n    this.isShift = false;\n    this.isCapsLock = false;\n    this.container.parentElement.append(this.textArea);\n  }\n\n  _createClass(ButtonList, [{\n    key: \"start\",\n    value: function start() {\n      this.addKeyToKeyboard(this.keyboardData);\n      this.activeButton = new _activeButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.classData.buttonList.active);\n      this.activeButton.handleKeyDown(this.elements);\n      this.handleKeyboardInput();\n      this.handleShift();\n      this.handleCapsLock();\n    }\n  }, {\n    key: \"addKeyToKeyboard\",\n    value: function addKeyToKeyboard(data) {\n      var _this = this;\n\n      data.forEach(function (item) {\n        var keyEn = item.keyEn,\n            keyRu = item.keyRu,\n            code = item.code;\n        var button = new _createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('button').create();\n\n        if (item.functionType) {\n          button.classList.add(_this.buttonSelector, _this.buttonTypeFunctionSelector, code);\n          button.system = true;\n        } else {\n          button.classList.add(_this.buttonSelector);\n        }\n\n        button.code = code;\n        button.addEventListener('click', function () {\n          if (!button.system) {\n            _this.instanceOfTextarea.setValue(button.innerText);\n          } else {\n            _this.textArea.focus();\n          }\n        });\n\n        if (!localStorage.getItem('language')) {\n          localStorage.setItem('language', 'en');\n        } else {\n          button.innerText = localStorage.getItem('language') === 'en' ? keyEn : keyRu;\n        }\n\n        _this.container.append(button);\n      });\n      this.animateKey = new _animateKey__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.elements, this.activeSelector);\n      this.switchLanguage(this.elements);\n      this.handleVirtualInput(this.elements);\n    }\n  }, {\n    key: \"handleVirtualInput\",\n    value: function handleVirtualInput(data) {\n      var _this2 = this;\n\n      var buttons = _toConsumableArray(data);\n\n      buttons.forEach(function (button) {\n        if (button.code === 'ShiftLeft' || button.code === 'ShiftRight') {\n          button.addEventListener('mousedown', function () {\n            _this2.shift = true;\n\n            _this2.changeRegister(_this2.elements);\n\n            button.addEventListener('mouseleave', function () {\n              _this2.shift = false;\n\n              _this2.changeRegister(_this2.elements);\n            });\n          });\n          button.addEventListener('mouseup', function () {\n            _this2.shift = false;\n\n            _this2.changeRegister(_this2.elements);\n          });\n        } else if (button.code === 'CapsLock') {\n          button.addEventListener('click', function () {\n            _this2.caps = !_this2.caps;\n\n            _this2.changeRegister(_this2.elements);\n          });\n        } else if (button.code === 'Enter') {\n          button.addEventListener('click', function () {\n            _this2.instanceOfTextarea.setValue('\\n');\n          });\n        } else if (button.code === 'Space') {\n          button.addEventListener('click', function () {\n            _this2.instanceOfTextarea.setValue(' ');\n          });\n        } else if (button.code === 'Tab') {\n          button.addEventListener('click', function () {\n            _this2.instanceOfTextarea.setValue('\\t');\n          });\n        } else if (button.code === 'Backspace') {\n          button.addEventListener('click', function () {\n            _this2.instanceOfTextarea.deleteSymbol(1, 0);\n          });\n        } else if (button.code === 'Delete') {\n          button.addEventListener('click', function () {\n            _this2.instanceOfTextarea.deleteSymbol(0, 1);\n          });\n        }\n      });\n    }\n  }, {\n    key: \"handleKeyboardInput\",\n    value: function handleKeyboardInput() {\n      var _this3 = this;\n\n      document.addEventListener('keydown', function (event) {\n        _this3.textArea.focus();\n\n        if (event.code === 'Backspace') {\n          _this3.instanceOfTextarea.updateCaretOnKey(-1);\n        } else if (event.code === 'Delete') {\n          _this3.instanceOfTextarea.updateCaretOnKey(0);\n        } else if (event.code === 'Tab') {\n          event.preventDefault();\n\n          _this3.instanceOfTextarea.setValue('\\t');\n        } else if (event.code === 'Space') {\n          event.preventDefault();\n\n          _this3.instanceOfTextarea.setValue(' ');\n        } else if (event.code === 'Enter') {\n          event.preventDefault();\n\n          _this3.instanceOfTextarea.setValue('\\n');\n        } else if (event.code === 'AltLeft') {\n          event.preventDefault();\n        } else if (event.code === 'AltRight') {\n          event.preventDefault();\n        } else if (event.key.length === 1) {\n          event.preventDefault();\n\n          var buttons = _toConsumableArray(_this3.elements);\n\n          buttons.forEach(function (button) {\n            if (button.code === event.code) {\n              _this3.instanceOfTextarea.setValue(button.innerText);\n            }\n          });\n        }\n\n        _this3.textArea.focus();\n      });\n    }\n  }, {\n    key: \"changeRegister\",\n    value: function changeRegister(data) {\n      var _this4 = this;\n\n      var buttons = _toConsumableArray(data);\n\n      buttons.forEach(function (item, i) {\n        var isEng = localStorage.getItem('language') === 'en';\n\n        if (!_this4.caps) {\n          if (_this4.shift) {\n            buttons[i].innerText = isEng ? _this4.keyboardData[i].keyEnShift : _this4.keyboardData[i].keyRuShift;\n          } else {\n            buttons[i].innerText = isEng ? _this4.keyboardData[i].keyEn : _this4.keyboardData[i].keyRu;\n          }\n        } else if (_this4.shift && _this4.caps) {\n          buttons[i].innerText = isEng ? _this4.keyboardData[i].keyEnShift : _this4.keyboardData[i].keyRuShift;\n          buttons[i].innerText = buttons[i].system ? buttons[i].innerText : buttons[i].innerText.toLowerCase();\n        } else {\n          buttons[i].innerText = isEng ? _this4.keyboardData[i].keyEn : _this4.keyboardData[i].keyRu;\n          buttons[i].innerText = buttons[i].system ? buttons[i].innerText : buttons[i].innerText.toUpperCase();\n        }\n      });\n    }\n  }, {\n    key: \"handleShift\",\n    value: function handleShift() {\n      var _this5 = this;\n\n      document.addEventListener('keydown', function (event) {\n        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {\n          _this5.shift = true;\n\n          _this5.changeRegister(_this5.elements);\n        }\n      });\n      document.addEventListener('keyup', function (event) {\n        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {\n          _this5.shift = false;\n\n          _this5.changeRegister(_this5.elements);\n        }\n      });\n    }\n  }, {\n    key: \"handleCapsLock\",\n    value: function handleCapsLock() {\n      var _this6 = this;\n\n      document.addEventListener('keyup', function (event) {\n        if (event.code === 'CapsLock') {\n          _this6.caps = !_this6.caps;\n\n          _this6.changeRegister(_this6.elements);\n        }\n      });\n    }\n  }, {\n    key: \"switchLanguage\",\n    value: function switchLanguage(data) {\n      var _this7 = this;\n\n      window.addEventListener('keydown', function (event) {\n        if (event.altKey && event.ctrlKey) {\n          localStorage.setItem('language', localStorage.getItem('language') === 'en' ? 'ru' : 'en');\n\n          _this7.changeRegister(data);\n        }\n      });\n    }\n  }]);\n\n  return ButtonList;\n}();\n\n\n\n//# sourceURL=webpack:///./js/components/buttonList.js?");

/***/ }),

/***/ "./js/components/createElement.js":
/*!****************************************!*\
  !*** ./js/components/createElement.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreateElement)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar CreateElement = /*#__PURE__*/function () {\n  function CreateElement(tagName) {\n    _classCallCheck(this, CreateElement);\n\n    this.element = null;\n    this.tagName = tagName;\n  }\n\n  _createClass(CreateElement, [{\n    key: \"create\",\n    value: function create() {\n      this.element = document.createElement(this.tagName);\n      return this.element;\n    }\n  }]);\n\n  return CreateElement;\n}();\n\n\n\n//# sourceURL=webpack:///./js/components/createElement.js?");

/***/ }),

/***/ "./js/components/header.js":
/*!*********************************!*\
  !*** ./js/components/header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./js/components/createElement.js\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info */ \"./js/components/info.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\nvar Header = /*#__PURE__*/function () {\n  function Header(classData) {\n    _classCallCheck(this, Header);\n\n    this.classData = classData;\n    this.header = null;\n    this.osInfo = null;\n    this.langInfo = null;\n  }\n\n  _createClass(Header, [{\n    key: \"start\",\n    value: function start() {\n      var _this$classData = this.classData,\n          header = _this$classData.header,\n          info = _this$classData.info;\n      this.header = new _createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('header').create();\n      this.header.className = header;\n      this.osInfo = new _info__WEBPACK_IMPORTED_MODULE_1__[\"default\"](info.selector, info.osInfo).start();\n      this.langInfo = new _info__WEBPACK_IMPORTED_MODULE_1__[\"default\"](info.selector, info.langInfo).start();\n      this.header.append(this.osInfo, this.langInfo);\n      return this.header;\n    }\n  }]);\n\n  return Header;\n}();\n\n\n\n//# sourceURL=webpack:///./js/components/header.js?");

/***/ }),

/***/ "./js/components/info.js":
/*!*******************************!*\
  !*** ./js/components/info.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Info)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./js/components/createElement.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Info = /*#__PURE__*/function () {\n  function Info(selector, text) {\n    _classCallCheck(this, Info);\n\n    this.selector = selector;\n    this.info = null;\n    this.text = text;\n  }\n\n  _createClass(Info, [{\n    key: \"start\",\n    value: function start() {\n      this.info = new _createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('p').create();\n      this.info.className = this.selector;\n      this.info.innerText = this.text;\n      return this.info;\n    }\n  }]);\n\n  return Info;\n}();\n\n\n\n//# sourceURL=webpack:///./js/components/info.js?");

/***/ }),

/***/ "./js/components/keyboard.js":
/*!***********************************!*\
  !*** ./js/components/keyboard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Keyboard)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./js/components/createElement.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Keyboard = /*#__PURE__*/function () {\n  function Keyboard(classData) {\n    _classCallCheck(this, Keyboard);\n\n    this.container = null;\n    this.keyboard = null;\n    this.classData = classData;\n  }\n\n  _createClass(Keyboard, [{\n    key: \"start\",\n    value: function start() {\n      this.keyboard = new _createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('div').create();\n      this.keyboard.className = this.classData.keyboard;\n      return this.keyboard;\n    }\n  }]);\n\n  return Keyboard;\n}();\n\n\n\n//# sourceURL=webpack:///./js/components/keyboard.js?");

/***/ }),

/***/ "./js/components/main.js":
/*!*******************************!*\
  !*** ./js/components/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var _buttonList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonList */ \"./js/components/buttonList.js\");\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ \"./js/components/createElement.js\");\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard */ \"./js/components/keyboard.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\n\nvar Main = /*#__PURE__*/function () {\n  function Main(classData, keyboardData) {\n    _classCallCheck(this, Main);\n\n    this.classData = classData;\n    this.keyboardData = keyboardData;\n    this.main = null;\n    this.keyboard = null;\n  }\n\n  _createClass(Main, [{\n    key: \"start\",\n    value: function start() {\n      this.main = new _createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('main').create();\n      this.main.className = this.classData.main;\n      this.keyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.classData).start();\n      this.main.append(this.keyboard);\n      new _buttonList__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.classData, this.keyboardData, this.keyboard).start();\n      return this.main;\n    }\n  }]);\n\n  return Main;\n}();\n\n\n\n//# sourceURL=webpack:///./js/components/main.js?");

/***/ }),

/***/ "./js/components/textArea.js":
/*!***********************************!*\
  !*** ./js/components/textArea.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TextArea)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./js/components/createElement.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar TextArea = /*#__PURE__*/function () {\n  function TextArea(selector) {\n    _classCallCheck(this, TextArea);\n\n    this.textArea = null;\n    this.selector = selector;\n    this.caretPosition = 0;\n  }\n\n  _createClass(TextArea, [{\n    key: \"start\",\n    value: function start() {\n      this.textArea = new _createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('textArea').create();\n      this.textArea.className = this.selector;\n      this.textArea.autofocus = true;\n      this.updateCaretOnClick();\n      return this.textArea;\n    }\n  }, {\n    key: \"updateCaretOnClick\",\n    value: function updateCaretOnClick() {\n      var _this = this;\n\n      this.textArea.addEventListener('click', function () {\n        _this.caretPosition = _this.getCaretPosition(_this.textArea);\n      });\n    }\n  }, {\n    key: \"updateCaretOnKey\",\n    value: function updateCaretOnKey(n) {\n      this.caretPosition += n;\n      this.caretPosition = this.caretPosition < 0 ? 0 : this.caretPosition;\n    }\n  }, {\n    key: \"setValue\",\n    value: function setValue(value) {\n      var start = this.textArea.value.slice(0, this.caretPosition);\n      var end = this.textArea.value.slice(this.caretPosition);\n      this.textArea.value = \"\".concat(start).concat(value).concat(end);\n      this.caretPosition += value.length;\n      this.textArea.focus();\n      this.textArea.setSelectionRange(this.caretPosition, this.caretPosition);\n    }\n  }, {\n    key: \"deleteSymbol\",\n    value: function deleteSymbol(rangeStart, rangeEnd) {\n      if (rangeStart === 1 && this.caretPosition === 0) {\n        this.textArea.focus();\n        return;\n      }\n\n      var start = this.textArea.value.slice(0, this.caretPosition - rangeStart);\n      var end = this.textArea.value.slice(this.caretPosition + rangeEnd);\n      this.textArea.value = \"\".concat(start).concat(end);\n      this.caretPosition = start.length;\n      this.textArea.setSelectionRange(this.caretPosition, this.caretPosition);\n      this.textArea.focus();\n    }\n  }, {\n    key: \"getCaretPosition\",\n    value: function getCaretPosition(element) {\n      element.focus();\n\n      if (element.selectionStart) {\n        return element.selectionStart;\n      }\n\n      if (document.selection) {\n        var selection = document.selection.createRange();\n        var duplicate = selection.duplicate();\n        selection.collapse(true);\n        duplicate.moveToElementText(element);\n        duplicate.setEndPoint('EndToEnd', selection);\n        this.caretPosition = duplicate.text.length;\n        return this.caretPosition;\n      }\n\n      return 0;\n    }\n  }]);\n\n  return TextArea;\n}();\n\n\n\n//# sourceURL=webpack:///./js/components/textArea.js?");

/***/ }),

/***/ "./js/data/classData.js":
/*!******************************!*\
  !*** ./js/data/classData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar classData = {\n  page: 'page',\n  header: 'header',\n  info: {\n    selector: 'header__info',\n    osInfo: 'The virtual keyboard was created on Windows 11',\n    langInfo: 'To switch the language use Ctrl + Alt (both keys have to be left)'\n  },\n  main: 'main',\n  textArea: 'text-area',\n  keyboard: 'keyboard',\n  buttonList: {\n    button: 'button',\n    functionType: 'button_type_function',\n    active: 'button_active'\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (classData);\n\n//# sourceURL=webpack:///./js/data/classData.js?");

/***/ }),

/***/ "./js/data/keyboardData.js":
/*!*********************************!*\
  !*** ./js/data/keyboardData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar keyboardData = [{\n  keyEn: '`',\n  keyEnShift: '~',\n  keyRu: 'ё',\n  keyRuShift: 'Ё',\n  code: 'Backquote'\n}, {\n  keyEn: '1',\n  keyEnShift: '!',\n  keyRu: '1',\n  keyRuShift: '!',\n  code: 'Digit1'\n}, {\n  keyEn: '2',\n  keyEnShift: '@',\n  keyRu: '2',\n  keyRuShift: '\"',\n  code: 'Digit2'\n}, {\n  keyEn: '3',\n  keyEnShift: '#',\n  keyRu: '3',\n  keyRuShift: '№',\n  code: 'Digit3'\n}, {\n  keyEn: '4',\n  keyEnShift: '$',\n  keyRu: '4',\n  keyRuShift: ';',\n  code: 'Digit4'\n}, {\n  keyEn: '5',\n  keyEnShift: '%',\n  keyRu: '5',\n  keyRuShift: '%',\n  code: 'Digit5'\n}, {\n  keyEn: '6',\n  keyEnShift: '^',\n  keyRu: '6',\n  keyRuShift: ':',\n  code: 'Digit6'\n}, {\n  keyEn: '7',\n  keyEnShift: '&',\n  keyRu: '7',\n  keyRuShift: '?',\n  code: 'Digit7'\n}, {\n  keyEn: '8',\n  keyEnShift: '*',\n  keyRu: '8',\n  keyRuShift: '*',\n  code: 'Digit8'\n}, {\n  keyEn: '9',\n  keyEnShift: '(',\n  keyRu: '9',\n  keyRuShift: '(',\n  code: 'Digit9'\n}, {\n  keyEn: '0',\n  keyEnShift: ')',\n  keyRu: '0',\n  keyRuShift: ')',\n  code: 'Digit0'\n}, {\n  keyEn: '-',\n  keyEnShift: '_',\n  keyRu: '-',\n  keyRuShift: '_',\n  code: 'Minus'\n}, {\n  keyEn: '=',\n  keyEnShift: '+',\n  keyRu: '=',\n  keyRuShift: '+',\n  code: 'Equal'\n}, {\n  keyEn: 'Backspace',\n  keyEnShift: 'Backspace',\n  keyRu: 'Backspace',\n  keyRuShift: 'Backspace',\n  code: 'Backspace',\n  functionType: true\n}, {\n  keyEn: 'Tab',\n  keyEnShift: 'Tab',\n  keyRu: 'Tab',\n  keyRuShift: 'Tab',\n  code: 'Tab',\n  functionType: true\n}, {\n  keyEn: 'q',\n  keyEnShift: 'Q',\n  keyRu: 'й',\n  keyRuShift: 'Й',\n  code: 'KeyQ'\n}, {\n  keyEn: 'w',\n  keyEnShift: 'W',\n  keyRu: 'ц',\n  keyRuShift: 'Ц',\n  code: 'KeyW'\n}, {\n  keyEn: 'e',\n  keyEnShift: 'E',\n  keyRu: 'у',\n  keyRuShift: 'У',\n  code: 'KeyE'\n}, {\n  keyEn: 'r',\n  keyEnShift: 'R',\n  keyRu: 'к',\n  keyRuShift: 'К',\n  code: 'KeyR'\n}, {\n  keyEn: 't',\n  keyEnShift: 'T',\n  keyRu: 'е',\n  keyRuShift: 'Е',\n  code: 'KeyT'\n}, {\n  keyEn: 'y',\n  keyEnShift: 'Y',\n  keyRu: 'н',\n  keyRuShift: 'Н',\n  code: 'KeyY'\n}, {\n  keyEn: 'u',\n  keyEnShift: 'U',\n  keyRu: 'г',\n  keyRuShift: 'Г',\n  code: 'KeyU'\n}, {\n  keyEn: 'i',\n  keyEnShift: 'I',\n  keyRu: 'ш',\n  keyRuShift: 'Ш',\n  code: 'KeyI'\n}, {\n  keyEn: 'o',\n  keyEnShift: 'O',\n  keyRu: 'щ',\n  keyRuShift: 'Щ',\n  code: 'KeyO'\n}, {\n  keyEn: 'p',\n  keyEnShift: 'P',\n  keyRu: 'з',\n  keyRuShift: 'З',\n  code: 'KeyP'\n}, {\n  keyEn: '[',\n  keyEnShift: '{',\n  keyRu: 'х',\n  keyRuShift: 'Х',\n  code: 'BracketLeft'\n}, {\n  keyEn: ']',\n  keyEnShift: '}',\n  keyRu: 'ъ',\n  keyRuShift: 'Ъ',\n  code: 'BracketRight'\n}, {\n  keyEn: '\\\\',\n  keyEnShift: '|',\n  keyRu: '\\\\',\n  keyRuShift: '/',\n  code: 'Backslash'\n}, {\n  keyEn: 'Del',\n  keyEnShift: 'Del',\n  keyRu: 'Del',\n  keyRuShift: 'Del',\n  code: 'Delete',\n  functionType: true\n}, {\n  keyEn: 'Caps Lock',\n  keyEnShift: 'Caps Lock',\n  keyRu: 'Caps Lock',\n  keyRuShift: 'Caps Lock',\n  code: 'CapsLock',\n  functionType: true\n}, {\n  keyEn: 'a',\n  keyEnShift: 'A',\n  keyRu: 'ф',\n  keyRuShift: 'Ф',\n  code: 'KeyA'\n}, {\n  keyEn: 's',\n  keyEnShift: 'S',\n  keyRu: 'ы',\n  keyRuShift: 'Ы',\n  code: 'KeyS'\n}, {\n  keyEn: 'd',\n  keyEnShift: 'D',\n  keyRu: 'в',\n  keyRuShift: 'В',\n  code: 'KeyD'\n}, {\n  keyEn: 'f',\n  keyEnShift: 'F',\n  keyRu: 'а',\n  keyRuShift: 'А',\n  code: 'KeyF'\n}, {\n  keyEn: 'g',\n  keyEnShift: 'G',\n  keyRu: 'п',\n  keyRuShift: 'П',\n  code: 'KeyG'\n}, {\n  keyEn: 'h',\n  keyEnShift: 'H',\n  keyRu: 'р',\n  keyRuShift: 'Р',\n  code: 'KeyH'\n}, {\n  keyEn: 'j',\n  keyEnShift: 'J',\n  keyRu: 'о',\n  keyRuShift: 'О',\n  code: 'KeyJ'\n}, {\n  keyEn: 'k',\n  keyEnShift: 'K',\n  keyRu: 'л',\n  keyRuShift: 'Л',\n  code: 'KeyK'\n}, {\n  keyEn: 'l',\n  keyEnShift: 'L',\n  keyRu: 'д',\n  keyRuShift: 'Д',\n  code: 'KeyL'\n}, {\n  keyEn: ';',\n  keyEnShift: ':',\n  keyRu: 'ж',\n  keyRuShift: 'Ж',\n  code: 'Semicolon'\n}, {\n  keyEn: \"'\",\n  keyEnShift: '\"',\n  keyRu: 'э',\n  keyRuShift: 'Э',\n  code: 'Quote'\n}, {\n  keyEn: 'Enter',\n  keyEnShift: 'Enter',\n  keyRu: 'Enter',\n  keyRuShift: 'Enter',\n  code: 'Enter',\n  functionType: true\n}, {\n  keyEn: 'Shift',\n  keyEnShift: 'Shift',\n  keyRu: 'Shift',\n  keyRuShift: 'Shift',\n  code: 'ShiftLeft',\n  functionType: true\n}, {\n  keyEn: 'z',\n  keyEnShift: 'Z',\n  keyRu: 'я',\n  keyRuShift: 'Я',\n  code: 'KeyZ'\n}, {\n  keyEn: 'x',\n  keyEnShift: 'X',\n  keyRu: 'ч',\n  keyRuShift: 'Ч',\n  code: 'KeyX'\n}, {\n  keyEn: 'c',\n  keyEnShift: 'C',\n  keyRu: 'с',\n  keyRuShift: 'С',\n  code: 'KeyC'\n}, {\n  keyEn: 'v',\n  keyEnShift: 'V',\n  keyRu: 'м',\n  keyRuShift: 'М',\n  code: 'KeyV'\n}, {\n  keyEn: 'b',\n  keyEnShift: 'B',\n  keyRu: 'и',\n  keyRuShift: 'И',\n  code: 'KeyB'\n}, {\n  keyEn: 'n',\n  keyEnShift: 'N',\n  keyRu: 'т',\n  keyRuShift: 'Т',\n  code: 'KeyN'\n}, {\n  keyEn: 'm',\n  keyEnShift: 'M',\n  keyRu: 'ь',\n  keyRuShift: 'Ь',\n  code: 'KeyM'\n}, {\n  keyEn: ',',\n  keyEnShift: '<',\n  keyRu: 'б',\n  keyRuShift: 'Б',\n  code: 'Comma'\n}, {\n  keyEn: '.',\n  keyEnShift: '>',\n  keyRu: 'ю',\n  keyRuShift: 'Ю',\n  code: 'Period'\n}, {\n  keyEn: '/',\n  keyEnShift: '?',\n  keyRu: '.',\n  keyRuShift: ',',\n  code: 'Slash'\n}, {\n  keyEn: '↑',\n  keyEnShift: '↑',\n  keyRu: '↑',\n  keyRuShift: '↑',\n  code: 'ArrowUp'\n}, {\n  keyEn: 'Shift',\n  keyEnShift: 'Shift',\n  keyRu: 'Shift',\n  keyRuShift: 'Shift',\n  code: 'ShiftRight',\n  functionType: true\n}, {\n  keyEn: 'Ctrl',\n  keyEnShift: 'Ctrl',\n  keyRu: 'Ctrl',\n  keyRuShift: 'Ctrl',\n  code: 'ControlLeft',\n  functionType: true\n}, {\n  keyEn: 'Win',\n  keyEnShift: 'Win',\n  keyRu: 'Win',\n  keyRuShift: 'Win',\n  code: 'MetaLeft',\n  functionType: true\n}, {\n  keyEn: 'Alt',\n  keyEnShift: 'Alt',\n  keyRu: 'Alt',\n  keyRuShift: 'Alt',\n  code: 'AltLeft',\n  functionType: true\n}, {\n  keyEn: ' ',\n  keyEnShift: ' ',\n  keyRu: ' ',\n  keyRuShift: ' ',\n  code: 'Space',\n  functionType: true\n}, {\n  keyEn: 'Alt',\n  keyEnShift: 'Alt',\n  keyRu: 'Alt',\n  keyRuShift: 'Alt',\n  code: 'AltRight',\n  functionType: true\n}, {\n  keyEn: '←',\n  keyEnShift: '←',\n  keyRu: '←',\n  keyRuShift: '←',\n  code: 'ArrowLeft'\n}, {\n  keyEn: '↓',\n  keyEnShift: '↓',\n  keyRu: '↓',\n  keyRuShift: '↓',\n  code: 'ArrowDown'\n}, {\n  keyEn: '→',\n  keyEnShift: '→',\n  keyRu: '→',\n  keyRuShift: '→',\n  code: 'ArrowRight'\n}, {\n  keyEn: 'Ctrl',\n  keyEnShift: 'Ctrl',\n  keyRu: 'Ctrl',\n  keyRuShift: 'Ctrl',\n  code: 'ControlRight',\n  functionType: true\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyboardData);\n\n//# sourceURL=webpack:///./js/data/keyboardData.js?");

/***/ }),

/***/ "./pages/main/index.js":
/*!*****************************!*\
  !*** ./pages/main/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _js_components_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/components/app */ \"./js/components/app.js\");\n/* harmony import */ var _js_data_classData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/data/classData */ \"./js/data/classData.js\");\n/* harmony import */ var _js_data_keyboardData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../js/data/keyboardData */ \"./js/data/keyboardData.js\");\n\n\n\n\n\nfunction startApp() {\n  var app = new _js_components_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_js_data_classData__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _js_data_keyboardData__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  app.start();\n}\n\nstartApp();\n\n//# sourceURL=webpack:///./pages/main/index.js?");

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/index.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], () => (__webpack_require__("../node_modules/@babel/polyfill/lib/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], () => (__webpack_require__("./pages/main/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;