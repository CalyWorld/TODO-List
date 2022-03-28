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

/***/ "./src/Pages/Homepage.js":
/*!*******************************!*\
  !*** ./src/Pages/Homepage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHeader = () => {\n  const header = document.createElement(\"header\");\n  const navbar = document.createElement(\"div\");\n  const iconDiv = document.createElement(\"div\");\n  const addTaskbtn = document.createElement(\"button\");\n\n  navbar.setAttribute(\"id\", \"navbar\");\n  iconDiv.classList.add(\"icon\");\n  addTaskbtn.classList.add(\"taskbtn\");\n\n  iconDiv.textContent = \"icon\";\n  addTaskbtn.textContent = \"+\";\n\n  navbar.append(iconDiv);\n  navbar.append(addTaskbtn);\n  header.append(navbar);\n\n  return header;\n};\n\nconst createContent = () => {\n  const contentContainer = document.getElementById(\"content\");\n  const leftSideSection = document.createElement(\"div\");\n  const rightSideSection = document.createElement(\"div\");\n  const ul = document.createElement(\"ul\");\n  const list = document.createElement(\"li\");\n  const inboxbtn = document.createElement(\"button\");\n  const todaybtn = document.createElement(\"button\");\n  const nextWeekbtn = document.createElement(\"button\");\n  const projectbtn = document.createElement(\"button\");\n  const addProjectbtn = document.createElement(\"button\");\n\n  leftSideSection.setAttribute(\"id\", \"leftSide\");\n  rightSideSection.setAttribute(\"id\", \"rightSide\");\n\n  inboxbtn.setAttribute(\"id\", \"inbox\");\n  todaybtn.setAttribute(\"id\", \"today\");\n  nextWeekbtn.setAttribute(\"id\", \"nextWeek\");\n  projectbtn.setAttribute(\"id\", \"project\");\n  addProjectbtn.setAttribute(\"id\", \"addprojectbtn\");\n\n  inboxbtn.textContent = \"Inbox\";\n  todaybtn.textContent = \"Today\";\n  nextWeekbtn.textContent = \" Next 7 days\";\n  projectbtn.textContent = \"Project\";\n  addProjectbtn.textContent = \" + Add new project\";\n\n  ul.append(list);\n  list.append(inboxbtn);\n  list.append(todaybtn);\n  list.append(nextWeekbtn);\n  list.append(projectbtn);\n  projectbtn.append(addProjectbtn);\n\n  leftSideSection.append(ul);\n\n  contentContainer.append(leftSideSection);\n  contentContainer.append(rightSideSection);\n\n  return contentContainer;\n};\n\nconst Homepage = () => {\n  document.body.append(createHeader());\n  document.body.append(createContent());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);\n\n\n//# sourceURL=webpack://todo-list/./src/Pages/Homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Pages_Homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pages/Homepage */ \"./src/Pages/Homepage.js\");\n\n// import Logicpage from \"./Pages/Logicpage\"\n\n\n(0,_Pages_Homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n// Logicpage();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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