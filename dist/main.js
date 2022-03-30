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

/***/ "./src/Pages/DOMpage.js":
/*!******************************!*\
  !*** ./src/Pages/DOMpage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst openForm = () => {\n    const formContainer = document.getElementById(\"form-container\");\n    const taskbtn = document.querySelector(\".taskbtn\");\n    taskbtn.addEventListener(\"click\", () => {\n        if (formContainer.style.display !== \"none\") {\n            formContainer.style.display = \"block\";\n        } else {\n            formContainer.style.display = \"block\";\n        }\n    });\n};\nconst openInbox = () => {\n    const btn = document.querySelectorAll(\"button\");\n    const inboxDiv = document.getElementById(\"inboxDiv\");\n    const todayDiv = document.getElementById(\"todayDiv\");\n    const nextWeekDiv = document.getElementById(\"nextWeekDiv\");\n    btn.forEach((button) => {\n        button.addEventListener(\"click\", (e) => {\n            if (e.target.id === \"inbox\") {\n                if ((inboxDiv.style.display = \"none\")) {\n                    inboxDiv.style.display = \"block\";\n                    todayDiv.style.display = \"none\";\n                    nextWeekDiv.style.display = \"none\";\n                }\n            } else if (e.target.id === \"today\") {\n                if ((todayDiv.style.display = \"none\")) {\n                    todayDiv.style.display = \"block\";\n                    inboxDiv.style.display = \"none\";\n                    nextWeekDiv.style.display = \"none\";\n                }\n            } else if (e.target.id === \"nextWeek\") {\n                if ((nextWeekDiv.style.display = \"none\")) {\n                    nextWeekDiv.style.display = \"block\";\n                    inboxDiv.style.display = \"none\";\n                    todayDiv.style.display = \"none\";\n                }\n            }\n        });\n    });\n};\n\nconst DOMpage = () => {\n    openForm();\n    openInbox();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMpage);\n\n\n//# sourceURL=webpack://todo-list/./src/Pages/DOMpage.js?");

/***/ }),

/***/ "./src/Pages/Homepage.js":
/*!*******************************!*\
  !*** ./src/Pages/Homepage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHeader = () => {\n  const header = document.createElement(\"header\");\n  const navbar = document.createElement(\"div\");\n  const iconDiv = document.createElement(\"div\");\n  const addTaskbtn = document.createElement(\"button\");\n\n  navbar.setAttribute(\"id\", \"navbar\");\n  iconDiv.classList.add(\"icon\");\n  addTaskbtn.classList.add(\"taskbtn\");\n\n  iconDiv.textContent = \"icon\";\n  addTaskbtn.textContent = \"+\";\n\n  navbar.append(iconDiv);\n  navbar.append(addTaskbtn);\n  header.append(navbar);\n\n  return header;\n};\n\nconst createContent = () => {\n  const contentContainer = document.getElementById(\"content\");\n  const leftSideSection = document.createElement(\"div\");\n  const rightSideSection = document.createElement(\"div\");\n  const ul = document.createElement(\"ul\");\n  const list = document.createElement(\"li\");\n  const inboxbtn = document.createElement(\"button\");\n  const todaybtn = document.createElement(\"button\");\n  const nextWeekbtn = document.createElement(\"button\");\n  const projectbtn = document.createElement(\"button\");\n  const addProjectbtn = document.createElement(\"button\");\n  const inboxDiv = document.createElement(\"div\");\n  const todayDiv = document.createElement(\"div\");\n  const nextWeekDiv = document.createElement(\"div\");\n  const inboxHead = document.createElement(\"h1\");\n  const todayHead = document.createElement(\"h1\");\n  const nextWeekHead = document.createElement(\"h1\");\n\n  leftSideSection.setAttribute(\"id\", \"leftSide\");\n  rightSideSection.setAttribute(\"id\", \"rightSide\");\n\n  inboxDiv.setAttribute(\"id\", \"inboxDiv\");\n  todayDiv.setAttribute(\"id\", \"todayDiv\");\n  nextWeekDiv.setAttribute(\"id\", \"nextWeekDiv\");\n  inboxHead.classList.add(\"inboxhead\");\n  todayHead.classList.add(\"todayHead\");\n  nextWeekHead.classList.add(\"nextWeekHead\");\n  inboxbtn.setAttribute(\"id\", \"inbox\");\n  todaybtn.setAttribute(\"id\", \"today\");\n  nextWeekbtn.setAttribute(\"id\", \"nextWeek\");\n  projectbtn.setAttribute(\"id\", \"project\");\n  addProjectbtn.setAttribute(\"id\", \"addprojectbtn\");\n\n  inboxHead.textContent = \"Inbox\";\n  todayHead.textContent = \"Today\";\n  nextWeekHead.textContent = \"Next 7 days\";\n  inboxbtn.textContent = \"Inbox\";\n  todaybtn.textContent = \"Today\";\n  nextWeekbtn.textContent = \" Next 7 days\";\n  projectbtn.textContent = \"Project\";\n  addProjectbtn.textContent = \" + Add new project\";\n\n  ul.append(list);\n  list.append(inboxbtn);\n  list.append(todaybtn);\n  list.append(nextWeekbtn);\n  list.append(projectbtn);\n  projectbtn.append(addProjectbtn);\n\n  leftSideSection.append(ul);\n\n  inboxDiv.append(inboxHead);\n  todayDiv.append(todayHead);\n  nextWeekDiv.append(nextWeekHead);\n  rightSideSection.append(inboxDiv);\n  rightSideSection.append(todayDiv);\n  rightSideSection.append(nextWeekDiv);\n\n  contentContainer.append(leftSideSection);\n  contentContainer.append(rightSideSection);\n\n  return contentContainer;\n};\n\nconst Homepage = () => {\n  document.body.append(createHeader());\n  document.body.append(createContent());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);\n\n\n//# sourceURL=webpack://todo-list/./src/Pages/Homepage.js?");

/***/ }),

/***/ "./src/Pages/Logicpage.js":
/*!********************************!*\
  !*** ./src/Pages/Logicpage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Homepage */ \"./src/Pages/Homepage.js\");\n\n\n// const todo = (title, description, dueDate, priority) => {\n//     const getTitle = () => title;\n//     const getDescription = () => description;\n//     const getDuedate = () => dueDate;\n//     const getPriority = () => priority;\n//     return { getTitle, getDescription, getDuedate, getPriority };\n// };\n// const placeValues = () => {\n\n//     const title = document.getElementById(\"titlename\").value;\n//     const description = document.getElementById(\"description\").value;\n//     const dueDate = document.getElementById(\"dueDate\");\n//     const priority = document.getElementById(\"priority\").value;\n//     const project = document.getElementById(\"project\").value;\n\n//     const submitbtn = document.querySelector(\"#submitbtn\");\n//     const rightSideSection = document.getElementById(\"rightSide\");\n\n\n// };\nconst submitForm = () => {\n    const library = [];\n    const title = document.getElementById(\"titlename\").value;\n    const description = document.getElementById(\"description\").value;\n    const dueDate = document.getElementById(\"dueDate\").value;\n    const priority = document.getElementById(\"priority\").value;\n    const submitbtn = document.querySelector(\"#submitbtn\");\n    const inboxDiv = document.getElementById(\"inboxDiv\");\n    const formContainer = document.getElementById(\"form-container\");\n    const titleHolder = document.createElement(\"p\");\n    const descriptionHolder = document.createElement(\"p\");\n    const dueDateHolder = document.createElement(\"p\");\n    const priorityHolder = document.createElement(\"p\");\n\n\n    submitbtn.addEventListener(\"click\", () => {\n        // const inboxCollapse = document.getElementById(\".inbox-Collapse\");\n        inboxDiv.style.display = \"block\";\n        const inbox = document.createElement(\"div\");\n        const inboxHeadDiv = document.createElement(\"div\");\n        const inboxDeletebtn = document.createElement(\"button\");\n\n        inboxHeadDiv.setAttribute(\"id\", library.length++);\n        inbox.classList.add(\"inbox-Collapse\");\n        inboxHeadDiv.classList.add(\"inbox-exposed\");\n        titleHolder.textContent = `Title: ${title}`;\n        descriptionHolder.textContent = `Description: ${description}`;\n        dueDateHolder.textContent = `Due Date: ${dueDate}`;\n        priorityHolder.textContent = `Priority: ${priority}`;\n        inboxDeletebtn.textContent = \"Delete\"\n        inboxHeadDiv.append(title);\n        inboxHeadDiv.append(inboxDeletebtn);\n        inbox.append(titleHolder);\n        inbox.append(descriptionHolder);\n        inbox.append(dueDateHolder);\n        inbox.append(priorityHolder);\n        inboxHeadDiv.append(inbox);\n        inboxDiv.append(inboxHeadDiv);\n        formContainer.style.display = \"none\";\n        // console.log(inboxCollapse);\n    });\n};\n\nconst collapseInbox = () => {\n  \n    const inboxExposed = document.querySelectorAll(\".inbox-exposed\");\n    const inboxCollapse = document.getElementById(\".inbox-Collapse\");\n    inboxExposed.forEach((button) => {\n        button.addEventListener(\"click\", e => {\n            // let clickedBox = e.target;\n            // let index = parseInt(clickedBox.getAttribute(\"id\"));\n            if (e.target.id === \"0\") {\n                if (inboxCollapse.style.display = \"none\") {\n                    inboxCollapse.style.display = \"block\";\n                } else {\n                    inboxCollapse.style.display = \"none\";\n                }\n            }\n        });\n    });\n};\n\n\n\n\n\nconst Logicpage = () => {\n    submitForm();\n    collapseInbox();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logicpage);\n\n\n//# sourceURL=webpack://todo-list/./src/Pages/Logicpage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Pages_Homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pages/Homepage */ \"./src/Pages/Homepage.js\");\n/* harmony import */ var _Pages_DOMpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages/DOMpage */ \"./src/Pages/DOMpage.js\");\n/* harmony import */ var _Pages_Logicpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/Logicpage */ \"./src/Pages/Logicpage.js\");\n\n\n\n\n\n// const openform = ()=>{\n//     const taskbtn = document.querySelector(\".taskbtn\");\n//     taskbtn.addEventListener(\"click\", ()=>{\n//         if(formContainer.style.display !== \"none\"){\n//             formContainer.style.display = \"block\";\n//         }else{\n//             formContainer.style.display = \"block\";\n//         }\n//     });\n// }\n\n// openform()\n\n\n(0,_Pages_Homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_Pages_DOMpage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_Pages_Logicpage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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