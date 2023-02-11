/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Module1.js":
/*!***************************!*\
  !*** ./src/js/Module1.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewClass": () => (/* binding */ NewClass),
/* harmony export */   "showModel1": () => (/* binding */ showModel1)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function showModel1() {
  console.log('it`s model 1');
}
var NewClass = /*#__PURE__*/function () {
  function NewClass(name, age) {
    _classCallCheck(this, NewClass);
    this.name = name;
    this.age = age;
  }
  _createClass(NewClass, [{
    key: "getAge",
    value: function getAge() {
      console.log("".concat(this.name, " is ").concat(this.age));
    }
  }]);
  return NewClass;
}();

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_Module1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Module1 */ "./src/js/Module1.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

(0,_js_Module1__WEBPACK_IMPORTED_MODULE_0__.showModel1)();
//functions
var getElement = function getElement(selector) {
  return document.querySelector(selector);
};
var getClosestEl = function getClosestEl(selector, event) {
  return event.target.closest(selector);
};

//constants

//for hamburger
var $navigation = document.querySelector('.navigation');
var $hamburger = document.querySelector('.hamburger');
var lock = '_lock';

//for section service
var btnActive = 'btn_active';
var blur = 'blur';
var count = 0;
var $btnService = document.querySelector('.service__btns');
var $serviceItems = document.querySelectorAll('.service__item');

//for section prices
var activePrice = 'prices__btn_active';
var accordionBtn = '.accordion__btn';
var pricesBtn = '.prices__btn';
var priceOpen = 'price_open';
var $pricesItems = document.querySelector('.prices__items');
var $btnsPrices = $pricesItems.querySelectorAll('.prices__btn');
$pricesItems.classList.add('home', 'leave', 'life');

//for section contact us
var $contactUs = document.querySelector('.contact-us__btn');
var active = '_active';
var btnContact = '.btn-contact-us';
var open = '_open';
var bgButtonCity = ' #C1E698';
var listContact = '.contact-us__list';
var $namesCities = document.querySelectorAll('.drop-block');

///////////////////////////////////////////////////////////////////////////////

//hamburger animation

$hamburger.addEventListener('click', function () {
  this.classList.toggle(active);
  $navigation.classList.toggle(active);
  document.body.classList.toggle(lock);
});
$navigation.addEventListener('click', function (e) {
  document.body.classList.toggle(lock);
  this.classList.toggle(active);
  $hamburger.classList.toggle(active);
});

///////////////////////////////////////////////////////////////

//section service
//button connections for section service and implementation of blur for images

$btnService.addEventListener('click', function (e) {
  var btn = e.target;
  //get button name
  var nameBtn = btn.className.match(/btn__[a-z]+/g).join('').replace(/btn__/g, '');
  var setBlur = function setBlur(arr, name, effect) {
    return arr.forEach(function (item) {
      var nameItem = item.getAttribute('class').replace(/[a-z]+__[a-z]+|blur/g, '').trim();
      nameItem === name && item.classList.toggle(effect);
    });
  };
  var changeBlur = function changeBlur(arr, effect) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return arr.forEach(function (el) {
      return type ? el.classList.add(effect) : el.classList.remove(effect);
    });
  };
  //добавляем blur для всех картинок вначале
  count === 0 && changeBlur(_toConsumableArray($serviceItems), blur);

  //add and remove class btn_active for buttons
  if (btn.classList.contains(btnActive)) {
    btn.classList.remove(btnActive);
    --count;
    setBlur(_toConsumableArray($serviceItems), nameBtn, blur);
    //обнуляем blur для всех картинок,когда неактивны все кнопки
    count === 0 && changeBlur(_toConsumableArray($serviceItems), blur, false);
  } else {
    if (count === 2) return;
    btn.classList.add(btnActive);
    ++count;
    setBlur(_toConsumableArray($serviceItems), nameBtn, blur);
  }
});
//////////////////////////////////////////////////////////////

// section prices
$pricesItems.addEventListener('click', function (e) {
  //block close opened accordion when press button 'Order'
  if (getClosestEl(accordionBtn, e)) return;

  //close all accordions except current
  _toConsumableArray($btnsPrices).forEach(function (btn) {
    if (btn !== e.target) {
      btn.classList.remove(activePrice);
      btn.closest('.prices__item').classList.remove(priceOpen);
    }
  });
  //logic accordion
  if (getClosestEl(pricesBtn, e)) {
    getClosestEl('.prices__item', e).classList.toggle(priceOpen);
    //change bg button
    getClosestEl(pricesBtn, e).classList.toggle(activePrice);
  }
});
/////////////////////////////////////////////////////////////

//section contact us

$contactUs.addEventListener('click', function (e) {
  //close all drop-blocks
  _toConsumableArray($namesCities).forEach(function (city) {
    return city.classList.remove(open);
  });
  if (getClosestEl(btnContact, e)) {
    //change bg button
    getClosestEl(btnContact, e).classList.toggle(active);
    //open cities list
    getElement(listContact).classList.toggle(active);
  }
  if (getClosestEl(listContact, e)) {
    var nameCity = e.target.textContent.replace(/,\sNY/g, '').toLowerCase();
    if (e.target.textContent.toLowerCase().startsWith('new')) nameCity = 'new-york-city';
    getElement(btnContact).style.backgroundColor = bgButtonCity;
    //change name city button
    getElement('.btn-contact-us__title').textContent = e.target.textContent;
    getElement(btnContact).classList.toggle(active);
    //close cities list
    getElement(listContact).classList.toggle(active);

    //open drop-block
    _toConsumableArray($namesCities).forEach(function (city) {
      if (city.classList.contains(nameCity)) city.classList.add(open);
    });
  }
});
console.log("\n\u041F\u0440\u0438 \u043D\u0430\u0436\u0430\u0442\u0438\u0438 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0438:Gardens,Lawn,Planting \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0441\u043C\u0435\u043D\u0430 \u0444\u043E\u043A\u0443\u0441\u0430 \u043D\u0430 \u0443\u0441\u043B\u0443\u0433\u0430\u0445 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 service +50\n\u041F\u0440\u0438 \u0432\u044B\u0431\u043E\u0440\u0435 \u043E\u0434\u043D\u043E\u0439 \u0443\u0441\u043B\u0443\u0433\u0438 (\u043D\u0430\u0436\u0430\u0442\u0438\u0438 \u043E\u0434\u043D\u043E\u0439 \u043A\u043D\u043E\u043F\u043A\u0438), \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0443\u0441\u043B\u0443\u0433 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442 \u044D\u0444\u0444\u0435\u043A\u0442 blur, \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0430\u044F \u0443\u0441\u043B\u0443\u0433\u0430 \u043E\u0441\u0442\u0430\u0435\u0442\u0441\u044F \u043D\u0435\u0438\u0437\u043C\u0435\u043D\u043D\u043E\u0439 + 20\n\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u0436\u0430\u0442\u044C \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0434\u0432\u0435 \u043A\u043D\u043E\u043F\u043A\u0438 \u0443\u0441\u043B\u0443\u0433\u0438, \u0442\u043E\u0433\u0434\u0430 \u044D\u0442\u0430 \u043A\u043D\u043E\u043F\u043A\u0430 \u0442\u043E\u0436\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0441\u0442\u0438\u043B\u044C \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0441 \u0438\u043C\u0435\u043D\u0435\u043C \u0443\u0441\u043B\u0443\u0433\u0438 \u0432\u044B\u0445\u043E\u0434\u044F\u0442 \u0438\u0437 \u044D\u0444\u0444\u0435\u043A\u0442\u0430 blur. \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u0436\u0430\u0442\u044C \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0432\u0441\u0435 \u0442\u0440\u0438 \u043A\u043D\u043E\u043F\u043A\u0438 \u0443\u0441\u043B\u0443\u0433. \u041F\u0440\u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u043C \u043D\u0430\u0436\u0430\u0442\u0438\u0438 \u043D\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u0443\u044E \u043A\u043D\u043E\u043F\u043A\u0443 \u043E\u043D\u0430 \u0434\u0435\u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0443\u0435\u0442\u0441\u044F (\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043D\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0439) \u0430 \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u043A \u043D\u0435\u0439 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0442\u0441\u044F \u0432 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 (\u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0441\u043E\u0441\u0442\u044F\u043D\u0438\u0435 blur \u0435\u0441\u043B\u0438 \u0435\u0441\u0442\u044C \u0435\u0449\u0435 \u0430\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \u0438\u043B\u0438 \u0436\u0435 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u044E\u0442\u044C \u0431\u044B\u0442\u044C \u0432 \u0431\u043B\u044E\u0440\u0435 \u0435\u0441\u043B\u0438 \u044D\u0442\u043E \u0431\u044B\u043B\u0430 \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043D\u0430\u0436\u0430\u0442\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430). +20\n\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u0438 \u043F\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043A\u043D\u043E\u043F\u043E\u043A \u0432 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A \u0443\u0441\u043B\u0443\u0433 \u0432 \u044D\u0444\u0444\u0435\u043A\u0442 blur +10\nAccordion \u0432 \u0441\u0435\u043A\u0446\u0438\u0438 prices \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F 3-\u0445 \u0432\u044B\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u0445 \u0441\u043F\u0438\u0441\u043A\u043E\u0432 \u043E\u0431 \u0443\u0441\u043B\u0443\u0433\u0430\u0445 \u0438 \u0446\u0435\u043D\u0430\u0445 + 50\n\u041F\u0440\u0438 \u043D\u0430\u0436\u0430\u0442\u0438\u0438 \u043D\u0430 dropdown \u043A\u043D\u043E\u043F\u043A\u0443 \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0442\u0430\u0440\u0438\u0444\u043E\u0432 \u0446\u0435\u043D \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043C\u0430\u043A\u0435\u0442\u043E\u043C. \u0412\u043D\u0443\u0442\u0440\u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0430 order, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432\u0435\u0434\u0435\u0442 \u043D\u0430 \u0441\u0435\u043A\u0446\u0438\u044E contacts, \u043F\u0440\u0438 \u043D\u0430\u0436\u0430\u0442\u0438\u0438 \u043D\u0430 \u043D\u0435\u0435 Accordion \u0432\u0441\u0435 \u0435\u0449\u0435 \u043E\u0441\u0442\u0430\u0435\u0442\u0441\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C. +25\n\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u043E\u0436\u0435\u0442 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u043D\u0430\u0436\u0430\u0432 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 dropup, \u043D\u043E \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0435 \u0442\u0430\u0440\u0438\u0444\u044B \u0443\u0441\u043B\u0443\u0433, \u043F\u0440\u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0438 \u043D\u043E\u0432\u043E\u0433\u043E \u0442\u0430\u0440\u0438\u0444\u0430 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F. +25\n\u0412 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 contacts \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D select \u0441 \u0432\u044B\u0431\u043E\u0440\u043E\u043C \u0433\u043E\u0440\u043E\u0434\u043E\u0432 +25\n\u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0432\u044B\u0431\u043E\u0440\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0431\u043B\u043E\u043A \u0441 \u0430\u0434\u0440\u0435\u0441\u043E\u043C \u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043E\u043C \u043E\u0444\u0438\u0441\u0430 \u0432 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u043C \u0433\u043E\u0440\u043E\u0434\u0435 +15\n\u041F\u0440\u0438 \u043D\u0430\u0436\u0430\u0442\u0438\u0438 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 Call us \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D \u0432\u044B\u0437\u043E\u0432 \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u043C\u0443 \u0433\u043E\u0440\u043E\u0434\u0443 +10\n\u0418\u0442\u043E\u0433\u043E: 125 \u0431\u0430\u043B\u043B\u043E\u0432.\n");
console.log('hello,Rolling Scopes');
var bob = new _js_Module1__WEBPACK_IMPORTED_MODULE_0__.NewClass('bob', 45);
bob.getAge();
})();

/******/ })()
;
//# sourceMappingURL=script.js.map