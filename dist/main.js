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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tel */ \"./src/modules/tel.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_scrollTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrollTop */ \"./src/modules/scrollTop.js\");\n/* harmony import */ var _modules_popupRepair__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popupRepair */ \"./src/modules/popupRepair.js\");\n/* harmony import */ var _modules_popupPrivacy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/popupPrivacy */ \"./src/modules/popupPrivacy.js\");\n/* harmony import */ var _modules_popupAdvice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/popupAdvice */ \"./src/modules/popupAdvice.js\");\n/* harmony import */ var _modules_prompts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/prompts */ \"./src/modules/prompts.js\");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/accordion */ \"./src/modules/accordion.js\");\n/* harmony import */ var _modules_tabsSliders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/tabsSliders */ \"./src/modules/tabsSliders.js\");\n/* harmony import */ var _modules_sliderTabsAdapt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/sliderTabsAdapt */ \"./src/modules/sliderTabsAdapt.js\");\n/* harmony import */ var _modules_sliderReviews__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/sliderReviews */ \"./src/modules/sliderReviews.js\");\n/* harmony import */ var _modules_sliderPortfolio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/sliderPortfolio */ \"./src/modules/sliderPortfolio.js\");\n/* harmony import */ var _modules_sliderTransp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/sliderTransp */ \"./src/modules/sliderTransp.js\");\n/* harmony import */ var _modules_sliderTranspAdapt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/sliderTranspAdapt */ \"./src/modules/sliderTranspAdapt.js\");\n/* harmony import */ var _modules_sliderPortfolioDetails__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/sliderPortfolioDetails */ \"./src/modules/sliderPortfolioDetails.js\");\n/* harmony import */ var _modules_phoneValid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/phoneValid */ \"./src/modules/phoneValid.js\");\n\r\n;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_tel__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_scrollTop__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_popupRepair__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_popupPrivacy__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_popupAdvice__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_prompts__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_modules_accordion__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n;(0,_modules_tabsSliders__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\r\n;(0,_modules_sliderTabsAdapt__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\r\n;(0,_modules_sliderReviews__WEBPACK_IMPORTED_MODULE_10__[\"default\"])()\r\n;(0,_modules_sliderPortfolio__WEBPACK_IMPORTED_MODULE_11__[\"default\"])()\r\n;(0,_modules_sliderTransp__WEBPACK_IMPORTED_MODULE_12__[\"default\"])()\r\n;(0,_modules_sliderTranspAdapt__WEBPACK_IMPORTED_MODULE_13__[\"default\"])()\r\n;(0,_modules_sliderPortfolioDetails__WEBPACK_IMPORTED_MODULE_14__[\"default\"])()\r\n;(0,_modules_phoneValid__WEBPACK_IMPORTED_MODULE_15__[\"default\"])()\n\n//# sourceURL=webpack://layout/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordion.js":
/*!**********************************!*\
  !*** ./src/modules/accordion.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordion = () => {\r\n    const btns = document.querySelectorAll('.accordion .title_block')\r\n    \r\n    btns.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            if (btn.classList.contains('msg-active')) {\r\n                btn.classList.remove('msg-active')\r\n            } else {\r\n                btns.forEach(btn => {\r\n                    btn.classList.remove('msg-active')\r\n                })\r\n                btn.classList.add('msg-active')\r\n            }\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);\n\n//# sourceURL=webpack://layout/./src/modules/accordion.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({timing, draw, duration}) => {\r\n\r\n    let start = performance.now();\r\n  \r\n    requestAnimationFrame(function animate(time) {\r\n      // timeFraction изменяется от 0 до 1\r\n      let timeFraction = (time - start) / duration;\r\n      if (timeFraction > 1) timeFraction = 1;\r\n  \r\n      // вычисление текущего состояния анимации\r\n      let progress = timing(timeFraction);\r\n  \r\n      draw(progress); // отрисовать её\r\n  \r\n      if (timeFraction < 1) {\r\n        requestAnimationFrame(animate);\r\n      }\r\n  \r\n    });\r\n  }\r\n\r\n\r\n\r\n\r\n// const prevSlide = (elems, index) => {\r\n//     elems[index].style.display = \"none\"\r\n// }\r\n\r\n// const nextSlide = (elems, index) => {\r\n//     elems[index].style.display = \"flex\"\r\n// }\r\n\r\n// export { prevSlide }\r\n// export { nextSlide }\n\n//# sourceURL=webpack://layout/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu__icon')\r\n    const popupMenu = document.querySelector('.popup-menu')\r\n    const popupDialog = document.querySelector('.popup-dialog-menu')\r\n    menuBtn.addEventListener('click', () => {\r\n        const docWidth = document.documentElement.clientWidth\r\n        if (!popupMenu.style.visibility) {\r\n            popupMenu.style.visibility = \"visible\"\r\n            if (docWidth > 576) {\r\n                popupDialog.style.right = popupDialog.clientWidth + \"px\"\r\n            } else {\r\n                popupDialog.style.top = popupDialog.offsetHeight + \"px\"\r\n            }\r\n            \r\n        }\r\n\r\n    })\r\n\r\n    popupMenu.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-dialog-menu') || e.target.tagName === 'A' || e.target.classList.contains('close-menu')) {\r\n            popupMenu.style.visibility = \"\"\r\n            popupDialog.style.right = \"\"\r\n            popupDialog.style.top = \"\"\r\n        }\r\n    })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://layout/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/phoneValid.js":
/*!***********************************!*\
  !*** ./src/modules/phoneValid.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst phoneValid = () => {\r\n    // const inputTel = document.querySelectorAll('[name = \"phone\"]')\r\n    // inputTel.forEach(input => {\r\n    //     input.addEventListener(\"input\", (e) => {\r\n    //         e.preventDefault();\r\n    //         e.target.value = e.target.value.replace(/[^0-9\\+]/g, \"\");\r\n    //     })\r\n    // })\r\n    \tconst inputPhone = document.querySelectorAll('input');\r\n\r\n\tconst testPhoneMask = (selector, masked = '+7 (___) ___-__-__') => {\r\n\t\tconst elem = document.querySelector(selector);\r\n\t\r\n\t\tfunction mask(event) {\r\n\t\t\tconst keyCode = event.keyCode;\r\n\t\t\tconst template = masked,\r\n\t\t\t\tdef = template.replace(/\\D/g, \"\"),\r\n\t\t\t\tval = this.value.replace(/\\D/g, \"\");\r\n\t\r\n\t\t\tlet i = 0,\r\n\t\t\t\tnewValue = template.replace(/[_\\d]/g, function (a) {\r\n\t\t\t\t\treturn i < val.length ? val.charAt(i++) || def.charAt(i) : a;\r\n\t\t\t\t});\r\n\t\t\ti = newValue.indexOf(\"_\");\r\n\t\t\tif (i != -1) {\r\n\t\t\t\tnewValue = newValue.slice(0, i);\r\n\t\t\t}\r\n\t\t\tlet reg = template.substr(0, this.value.length).replace(/_+/g,\r\n\t\t\t\tfunction (a) {\r\n\t\t\t\t\treturn \"\\\\d{1,\" + a.length + \"}\";\r\n\t\t\t\t}).replace(/[+()]/g, \"\\\\$&\");\r\n\t\t\treg = new RegExp(\"^\" + reg + \"$\");\r\n\t\t\tif (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\r\n\t\t\t\tthis.value = newValue;\r\n\t\t\t}\r\n\t\t\tif (event.type == \"blur\" && this.value.length < 5) {\r\n\t\t\t\tthis.value = \"\";\r\n\t\t\t}\r\n\t\r\n\t\t};\r\n\t\telem.addEventListener(\"input\", mask);\r\n\t\telem.addEventListener(\"focus\", mask);\r\n\t\telem.addEventListener(\"blur\", mask);\r\n\t};\r\n\tfor (let item of inputPhone) {\r\n\t\tif (item.name === 'phone') {\r\n\t\t\ttestPhoneMask('#' + item.id);\r\n\t\t}\r\n\t}\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (phoneValid);\n\n//# sourceURL=webpack://layout/./src/modules/phoneValid.js?");

/***/ }),

/***/ "./src/modules/popupAdvice.js":
/*!************************************!*\
  !*** ./src/modules/popupAdvice.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popupAdvice = () => {\r\n    const modal = document.querySelector('.popup-consultation')\r\n    const btn = document.querySelector('.director-avatar .button')\r\n\r\n    btn.addEventListener('click', () => {\r\n        modal.style.visibility = \"visible\"\r\n    })\r\n    // feedback-wrap\r\n    modal.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.feedback-wrap') || e.target.closest('.close')) {\r\n            modal.style.visibility = \"\"\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupAdvice);\n\n//# sourceURL=webpack://layout/./src/modules/popupAdvice.js?");

/***/ }),

/***/ "./src/modules/popupPrivacy.js":
/*!*************************************!*\
  !*** ./src/modules/popupPrivacy.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popupPrivacy = () => {\r\n    const btns = document.querySelectorAll('.link-privacy')\r\n    const modal = document.querySelector('.popup-privacy')\r\n    btns.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            modal.style.visibility = \"visible\"\r\n        })\r\n    \r\n    })\r\n \r\n    modal.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-dialog-privacy')) {\r\n            modal.style.visibility = \"\"\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupPrivacy);\n\n//# sourceURL=webpack://layout/./src/modules/popupPrivacy.js?");

/***/ }),

/***/ "./src/modules/popupRepair.js":
/*!************************************!*\
  !*** ./src/modules/popupRepair.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popupRepair = () => {\r\n    const modal = document.querySelector('.popup-repair-types')\r\n    const firstBtn = document.querySelector('.no-overflow')\r\n    const secondBtn = document.querySelector('.tablet-hide a')\r\n\r\n    const modalVisible = (e) => {\r\n        e.preventDefault()\r\n        modal.style.visibility = \"visible\"\r\n    }\r\n    \r\n    modal.addEventListener('click', (e) => {\r\n        if (e.target.classList.contains('popup-repair-types') || e.target.closest('.mobile-hide')) {\r\n            modal.style.visibility = \"\"\r\n        }\r\n    })\r\n\r\n    firstBtn.addEventListener('click', modalVisible)\r\n    secondBtn.addEventListener('click', modalVisible)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupRepair);\n\n//# sourceURL=webpack://layout/./src/modules/popupRepair.js?");

/***/ }),

/***/ "./src/modules/prompts.js":
/*!********************************!*\
  !*** ./src/modules/prompts.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\nconst prompts = () => {\r\n    const prompts = document.querySelectorAll('.formula-item-popup')\r\n    const items = document.querySelectorAll('.formula-item__icon-inner-text')\r\n    const color = document.querySelectorAll('.formula-item__icon-inner')\r\n\r\n    items.forEach((item, i) => {\r\n        item.addEventListener('mouseenter', () => {\r\n            prompts[i].style.visibility = \"visible\"\r\n            color[i].classList.add('active-item')\r\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 200,\r\n                timing(timeFraction) {\r\n                    return Math.pow(timeFraction, 2)\r\n                },\r\n                draw(progress) {\r\n                    prompts[i].style.opacity = progress\r\n                }\r\n              });\r\n        })\r\n        item.addEventListener('mouseleave', () => {\r\n            color[i].classList.remove('active-item')\r\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 200,\r\n                timing(timeFraction) {\r\n                    return Math.pow(1 - timeFraction, 2)\r\n                },\r\n                draw(progress) {\r\n                    prompts[i].style.opacity = progress\r\n                    if (progress == 0) {\r\n                        prompts[i].style.visibility = \"\"\r\n                    }\r\n                }\r\n              });\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prompts);\n\n//# sourceURL=webpack://layout/./src/modules/prompts.js?");

/***/ }),

/***/ "./src/modules/scrollTop.js":
/*!**********************************!*\
  !*** ./src/modules/scrollTop.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\nconst scrollTop = () => {\r\n    const btn = document.querySelector('.button-footer')\r\n    // const btnLink = document.querySelector('.button-footer a')\r\n\r\n    const scrollTopFunc = () => {\r\n        let scrolled = window.pageYOffset\r\n\r\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n          duration: 2000,\r\n          timing(timeFraction) {\r\n              return  Math.pow(1 - timeFraction, 2)\r\n          },\r\n          draw(progress) {\r\n              window.scrollTo(0, scrolled * progress)\r\n          }\r\n        });\r\n\r\n    }\r\n\r\nbtn.addEventListener('click', scrollTopFunc)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollTop);\n\n//# sourceURL=webpack://layout/./src/modules/scrollTop.js?");

/***/ }),

/***/ "./src/modules/sliderPortfolio.js":
/*!****************************************!*\
  !*** ./src/modules/sliderPortfolio.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderPortfolio = () => {\r\n    const slider = document.querySelector('.portfolio')\r\n    const slides = document.querySelectorAll('.portfolio-slider__slide')\r\n    const prev = document.querySelector('#portfolio-arrow_left')\r\n    const next = document.querySelector('#portfolio-arrow_right')\r\n    let correntSlide = 0\r\n\r\n    const prevSlide = (elems, index) => {\r\n        elems[index].style.display = \"none\"\r\n    }\r\n\r\n    const nextSlide = (elems, index) => {\r\n        elems[index].style.display = \"flex\"\r\n    }\r\n\r\n    slider.addEventListener('click', (e) => {\r\n        const docWidth = document.documentElement.clientWidth\r\n\r\n        if (e.target.closest('#portfolio-arrow_right')) {\r\n            prevSlide(slides, correntSlide)\r\n            correntSlide++\r\n            \r\n        } \r\n        if (e.target.closest('#portfolio-arrow_left')) {\r\n            correntSlide--\r\n            nextSlide(slides, correntSlide)\r\n        }\r\n        if (docWidth > 1024) {\r\n            if (correntSlide >= slides.length - 3) {\r\n                next.style.display = \"none\"\r\n            } else {\r\n                next.style.display = \"flex\"\r\n            }\r\n        } else if (docWidth < 1024 && docWidth > 900) {\r\n            if (correntSlide >= slides.length - 2) {\r\n                next.style.display = \"none\"\r\n            } else {\r\n                next.style.display = \"flex\"\r\n            }\r\n        } else if (docWidth < 900) {\r\n            if (correntSlide >= slides.length -1) {\r\n                next.style.display = \"none\"\r\n            } else {\r\n                next.style.display = \"flex\"\r\n            }\r\n        }\r\n       \r\n        if (correntSlide > 0) {\r\n            prev.style.display = \"flex\"\r\n\r\n        } else {\r\n            prev.style.display = \"none\"\r\n        }\r\n        \r\n    })\r\n\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderPortfolio);\n\n//# sourceURL=webpack://layout/./src/modules/sliderPortfolio.js?");

/***/ }),

/***/ "./src/modules/sliderPortfolioDetails.js":
/*!***********************************************!*\
  !*** ./src/modules/sliderPortfolioDetails.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderPortfolioDetails = () => {\r\n    const modal = document.querySelector('.popup-portfolio')\r\n    const images = document.querySelectorAll('.portfolio-slider__slide-frame')\r\n    const slider = document.querySelector('.popup-portfolio-slider-wrap')\r\n    const slides = document.querySelectorAll('.popup-portfolio-slider__slide')\r\n    const text = document.querySelectorAll('.popup-portfolio-text')\r\n    const current = document.querySelector('.popup-portfolio .slider-counter-content__current')\r\n    const total = document.querySelector('.popup-portfolio .slider-counter-content__total')\r\n\r\n    let correntSlide = 0\r\n    current.textContent = correntSlide + 1\r\n\r\n        \r\n    images.forEach(img => {\r\n        img.addEventListener('click', () => {\r\n            modal.style.visibility = \"visible\"\r\n        })\r\n    })\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (e.target.classList.contains('popup') || e.target.closest('.close')) {\r\n            modal.style.visibility = \"\"\r\n        }\r\n    })\r\n    \r\n    \r\n    slides.forEach(slide => {\r\n            slide.style.display = \"none\"\r\n        })\r\n\r\n    slides[correntSlide].style.display = \"flex\"\r\n    \r\n    text.forEach(text => {\r\n        text.style.display = \"none\"\r\n    })\r\n\r\n    text[correntSlide].style.display = \"flex\"\r\n\r\n    const prevSlide = (elems, index) => {\r\n        elems[index].style.display = \"none\"\r\n    }\r\n\r\n    const nextSlide = (elems, index) => {\r\n        elems[index].style.display = \"flex\"\r\n    }\r\n\r\n    slider.addEventListener('click', (e) => {\r\n        \r\n        if (e.target.closest('#popup_portfolio_right')) {\r\n            prevSlide(slides, correntSlide)\r\n            prevSlide(text, correntSlide)\r\n            correntSlide++\r\n        } \r\n        if (e.target.closest('#popup_portfolio_left')) {\r\n            correntSlide--\r\n            slides.forEach(slide => {\r\n                slide.style.display = \"none\"\r\n            })\r\n            text.forEach(text => {\r\n                text.style.display = \"none\"\r\n            })\r\n        }\r\n        if (correntSlide >= slides.length) {\r\n            correntSlide = 0\r\n        } \r\n        if (correntSlide < 0) {\r\n            correntSlide = slides.length - 1\r\n        } \r\n        \r\n        nextSlide(slides, correntSlide)\r\n        nextSlide(text, correntSlide)\r\n\r\n        current.textContent = correntSlide + 1\r\n    })\r\n\r\n    total.textContent = slides.length\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderPortfolioDetails);\n\n//# sourceURL=webpack://layout/./src/modules/sliderPortfolioDetails.js?");

/***/ }),

/***/ "./src/modules/sliderReviews.js":
/*!**************************************!*\
  !*** ./src/modules/sliderReviews.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderReviews = () => {\r\n    const slider = document.querySelector('.reviews')\r\n    const slides = document.querySelectorAll('.reviews-slider__slide')\r\n\r\n    let correntSlide = 0\r\n\r\n    const prevSlide = (elems, index) => {\r\n        elems[index].style.display = \"none\"\r\n    }\r\n\r\n    const nextSlide = (elems, index) => {\r\n        elems[index].style.display = \"flex\"\r\n    }\r\n\r\n    slider.addEventListener('click', (e) => {\r\n        prevSlide(slides, correntSlide)\r\n        if (e.target.closest('#reviews-arrow_right')) {\r\n            correntSlide++\r\n            \r\n        } \r\n        if (e.target.closest('#reviews-arrow_left')) {\r\n            correntSlide--\r\n        }\r\n        if (correntSlide >= slides.length) {\r\n            correntSlide = 0\r\n        } \r\n        if (correntSlide < 0) {\r\n            correntSlide = slides.length - 1\r\n            slides.forEach(slide => {\r\n                slide.style.display = \"none\"\r\n            })\r\n        } \r\n        nextSlide(slides, correntSlide)\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderReviews);\n\n//# sourceURL=webpack://layout/./src/modules/sliderReviews.js?");

/***/ }),

/***/ "./src/modules/sliderTabsAdapt.js":
/*!****************************************!*\
  !*** ./src/modules/sliderTabsAdapt.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderTabsAdapt = () => {\r\n    // const slider = document.querySelector('.nav-wrap-repair')\r\n    // const slides = slider.querySelectorAll('.button_o')\r\n    // console.log(slider);\r\n    // let correntSlide = 0\r\n\r\n    //  const prevSlide = (elems, index) => {\r\n    //     elems[index].style.display = \"none\"\r\n    // }\r\n\r\n    // const nextSlide = (elems, index) => {\r\n    //     elems[index].style.display = \"flex\"\r\n    // }\r\n\r\n    // slider.addEventListener('click', (e) => {\r\n    //     prevSlide(slides, correntSlide)\r\n    //     if (e.target.closest('#nav-arrow-repair-right_base')) {\r\n    //         correntSlide++\r\n            \r\n    //     } \r\n    //     if (e.target.closest('#nav-arrow-repair-left_base')) {\r\n    //         correntSlide--\r\n    //     }\r\n    //     if (correntSlide >= slides.length) {\r\n    //         correntSlide = 0\r\n    //     } \r\n    //     if (correntSlide < 0) {\r\n    //         correntSlide = slides.length - 1\r\n    //         slides.forEach(slide => {\r\n    //             slide.style.display = \"none\"\r\n    //         })\r\n    //     } \r\n    //     nextSlide(slides, correntSlide)\r\n    // })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderTabsAdapt);\n\n//# sourceURL=webpack://layout/./src/modules/sliderTabsAdapt.js?");

/***/ }),

/***/ "./src/modules/sliderTransp.js":
/*!*************************************!*\
  !*** ./src/modules/sliderTransp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// \"popup-transparency-slider\"\r\n\r\nconst sliderTransp = () => {\r\n    const images = document.querySelectorAll('.transparency-item__img')\r\n    const slider = document.querySelector('.popup-transparency')\r\n    const slides = document.querySelectorAll('.popup-transparency-slider__slide')\r\n    const current = document.querySelector('#transparency-popup-counter .slider-counter-content__current')\r\n    const total = document.querySelector('#transparency-popup-counter .slider-counter-content__total')\r\n\r\n    let correntSlide = 0\r\n\r\n    \r\n\r\n    const prevSlide = (elems, index) => {\r\n        elems[index].style.display = \"none\"\r\n    }\r\n\r\n    const nextSlide = (elems, index) => {\r\n        elems[index].style.display = \"flex\"\r\n    }\r\n\r\n\r\n    images.forEach((img, i)  => {\r\n        img.addEventListener('click', () => {\r\n            console.log(i);\r\n            slides.forEach(slide => {\r\n                slide.style.display = \"none\"\r\n            })\r\n            slider.style.visibility = \"visible\"\r\n            correntSlide = i\r\n            current.textContent = correntSlide + 1\r\n            nextSlide(slides, correntSlide)\r\n        })\r\n\r\n    })\r\n\r\n    \r\n\r\n    slider.addEventListener('click', (e) => {\r\n        prevSlide(slides, correntSlide)\r\n        if (e.target.closest('#transparency_right')) {\r\n            correntSlide++\r\n            \r\n        } \r\n        if (e.target.closest('#transparency_left')) {\r\n            correntSlide--\r\n        }\r\n        if (correntSlide >= slides.length) {\r\n            correntSlide = 0\r\n        } \r\n        if (correntSlide < 0) {\r\n            correntSlide = slides.length - 1\r\n            slides.forEach(slide => {\r\n                slide.style.display = \"none\"\r\n            })\r\n        } \r\n        nextSlide(slides, correntSlide)\r\n        current.textContent = correntSlide + 1\r\n\r\n        if (e.target.closest('.popup-transparency .close')) {\r\n            slider.style.visibility = \"\"\r\n\r\n        }\r\n    })\r\n    \r\n    total.textContent = slides.length\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderTransp);\n\n//# sourceURL=webpack://layout/./src/modules/sliderTransp.js?");

/***/ }),

/***/ "./src/modules/sliderTranspAdapt.js":
/*!******************************************!*\
  !*** ./src/modules/sliderTranspAdapt.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderTranspAdapt = () => {\r\n    const slider = document.querySelector('#transparency')\r\n    const slides = document.querySelectorAll('.transparency-item')\r\n\r\n\r\n    let correntSlide = 0\r\n\r\n    if (document.documentElement.clientWidth < 1091) {\r\n        \r\n        slides.forEach(slide => {\r\n            slide.style.display = \"none\"\r\n        })\r\n\r\n        slides[correntSlide].style.display = \"flex\"\r\n    }\r\n\r\n\r\n    const prevSlide = (elems, index) => {\r\n        elems[index].style.display = \"none\"\r\n    }\r\n\r\n    const nextSlide = (elems, index) => {\r\n        elems[index].style.display = \"flex\"\r\n    }\r\n\r\n    slider.addEventListener('click', (e) => {\r\n        prevSlide(slides, correntSlide)\r\n        if (e.target.closest('#transparency-arrow_right')) {\r\n            correntSlide++\r\n        } \r\n        if (e.target.closest('#transparency-arrow_left')) {\r\n            correntSlide--\r\n        }\r\n        if (correntSlide >= slides.length) {\r\n            correntSlide = 0\r\n        } \r\n        if (correntSlide < 0) {\r\n            correntSlide = slides.length - 1\r\n            slides.forEach(slide => {\r\n                slide.style.display = \"none\"\r\n            })\r\n        } \r\n        nextSlide(slides, correntSlide)\r\n\r\n    })\r\n    \r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderTranspAdapt);\n\n//# sourceURL=webpack://layout/./src/modules/sliderTranspAdapt.js?");

/***/ }),

/***/ "./src/modules/tabsSliders.js":
/*!************************************!*\
  !*** ./src/modules/tabsSliders.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabsSliders = () => {\r\n    const tabPanel  = document.querySelector('.nav-wrap-repair')\r\n    const tabs = document.querySelectorAll('.repair-types-nav__item')\r\n    const tabContent = document.querySelectorAll('.types-repair')\r\n    const slider = document.querySelector('.repair-types-slider-wrap')\r\n    const total = slider.querySelector('.slider-counter-content__total')\r\n    let current = slider.querySelector('.slider-counter-content__current')\r\n    let slides\r\n    let correntSlide = 0\r\n\r\n    const slidesContent = (i) => {\r\n        slides = tabContent[i].querySelectorAll('.repair-types-slider__slide')\r\n        total.textContent = slides.length\r\n    }\r\n\r\n    tabs.forEach((tab, i) => {\r\n        if(tab.classList.contains('active')) {\r\n            slidesContent(i)\r\n        }\r\n    })\r\n    // Табы со скрытием ненужных слайдов\r\n    tabPanel.addEventListener('click', (e) => {\r\n        if (e.target.closest('.repair-types-nav__item')) {\r\n            const tabBtn = e.target.closest('.repair-types-nav__item')\r\n            tabs.forEach((tab, i) => {\r\n                if(tab === tabBtn) {\r\n                    tab.classList.add('active')\r\n                    tabContent[i].style.display = \"block\"\r\n                } else {\r\n                    tab.classList.remove('active')\r\n                    tabContent[i].style.display = \"none\"\r\n                }\r\n                if(tab.classList.contains('active')) {\r\n                    slidesContent(i)\r\n                }\r\n            })\r\n        } \r\n        // Скрыть все слайды   \r\n        slides.forEach(slide => {\r\n            slide.style.display = \"none\" \r\n        })\r\n        // Показать первый слайд\r\n        correntSlide = 0\r\n        slides[correntSlide].style.display = \"flex\"\r\n        current.textContent = correntSlide + 1\r\n    })\r\n\r\n   \r\n\r\n    const prevSlide = (elems, index) => {\r\n        elems[index].style.display = \"none\"\r\n    }\r\n\r\n    const nextSlide = (elems, index) => {\r\n        elems[index].style.display = \"flex\"\r\n    }\r\n\r\n    // Слайдер\r\n\r\n    slider.addEventListener('click', (e) => {\r\n        tabs.forEach((slide, i) => {\r\n            if(slide.classList.contains('active')) {\r\n                slides = tabContent[i].querySelectorAll('.repair-types-slider__slide')\r\n            }\r\n        })\r\n        \r\n        if (e.target.closest('#repair-types-arrow_right')) {\r\n            prevSlide(slides, correntSlide)\r\n            correntSlide++\r\n            \r\n        } \r\n        if (e.target.closest('#repair-types-arrow_left')) {\r\n            correntSlide--\r\n            \r\n        }\r\n        if (correntSlide >= slides.length) {\r\n            correntSlide = 0\r\n        } \r\n        if (correntSlide < 0) {\r\n            correntSlide = slides.length - 1\r\n            slides.forEach(slide => {\r\n                slide.style.display = \"none\"\r\n            })\r\n        } \r\n        nextSlide(slides, correntSlide)\r\n        current.textContent = correntSlide + 1\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabsSliders);\n\n//# sourceURL=webpack://layout/./src/modules/tabsSliders.js?");

/***/ }),

/***/ "./src/modules/tel.js":
/*!****************************!*\
  !*** ./src/modules/tel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tel = () => {\r\n    const arrow = document.querySelector('.header-contacts__arrow img')\r\n    const numBlock = document.querySelector('.header-contacts__phone-number-accord')\r\n    const num = document.querySelector('.header-contacts__phone-number-accord a')\r\n    arrow.addEventListener('click', () => {\r\n        if (!num.style.opacity ) {\r\n            arrow.style.transform = \"rotate(-180deg)\"\r\n            arrow.style.transition = \"all 0.4s\"\r\n            numBlock.style.top = \"25px\"\r\n            num.style.opacity = 1\r\n        } else {\r\n            arrow.style.transform = ''\r\n            numBlock.style.top = \"\"\r\n            num.style.opacity = \"\"\r\n        }\r\n    })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tel);\n\n//# sourceURL=webpack://layout/./src/modules/tel.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;