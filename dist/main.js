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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst openForm = () => {\n    const formContainer = document.getElementById(\"form-container\");\n    const taskbtn = document.querySelector(\".taskbtn\");\n    taskbtn.addEventListener(\"click\", () => {\n        if (formContainer.style.display !== \"none\") {\n            formContainer.style.display = \"block\";\n        } else {\n            formContainer.style.display = \"block\";\n        }\n    });\n};\nconst openInbox = () => {\n    const btn = document.querySelectorAll(\"div\");\n    const inboxDiv = document.getElementById(\"inboxDiv\");\n    const todayDiv = document.getElementById(\"todayDiv\");\n    const nextWeekDiv = document.getElementById(\"nextWeekDiv\");\n    const projectList = document.getElementById(\"projectList\")\n    btn.forEach((button) => {\n        button.addEventListener(\"click\", (e) => {\n            if (e.target.id === \"inbox\") {\n                if ((inboxDiv.style.display = \"none\")) {\n                    inboxDiv.style.display = \"block\";\n                    todayDiv.style.display = \"none\";\n                    nextWeekDiv.style.display = \"none\";\n                }\n            } else if (e.target.id === \"today\") {\n                if ((todayDiv.style.display = \"none\")) {\n                    todayDiv.style.display = \"block\";\n                    inboxDiv.style.display = \"none\";\n                    nextWeekDiv.style.display = \"none\";\n                }\n            } else if (e.target.id === \"nextWeek\") {\n                if ((nextWeekDiv.style.display = \"none\")) {\n                    nextWeekDiv.style.display = \"block\";\n                    inboxDiv.style.display = \"none\";\n                    todayDiv.style.display = \"none\";\n                }\n            }\n            else if (e.target.id === \"project\") {\n                if (projectList.style.display != \"none\") {\n                    projectList.style.display = \"none\";\n                } else {\n                    projectList.style.display = \"flex\";\n                }\n            }\n        });\n    });\n};\nconst addProject = () => {\n\n    const projectbtn = document.getElementById(\"projectbtn\");\n\n    projectbtn.addEventListener(\"click\", () => {\n        const content = document.getElementById(\"content\");\n        const projectFolder = document.createElement(\"form\");\n        const projectHead = document.createElement(\"h1\");\n        const projectLabelHolder = document.createElement(\"div\");\n        const projectbtnHolder = document.createElement(\"div\");\n        const addprojectbtn = document.createElement(\"button\");\n        const closeprojectbtn = document.createElement(\"button\");\n\n        const label = document.createElement(\"label\")\n        const input = document.createElement(\"input\");\n        const br = document.createElement(\"br\");\n\n        projectFolder.setAttribute(\"id\", \"projectfolder\");\n        projectHead.classList.add(\"projectTitle\");\n        projectLabelHolder.classList.add(\"projectlabel\");\n        projectbtnHolder.classList.add(\"projectbtnholder\");\n\n\n        addprojectbtn.classList.add(\"addproject\");\n        closeprojectbtn.classList.add(\"closeproject\");\n\n        projectHead.textContent = \"New Project\";\n\n        addprojectbtn.textContent = \"submit\";\n        closeprojectbtn.textContent = \"Close\";\n\n        label.setAttribute(\"for\", \"project\");\n        label.setAttribute(\"id\", \"projectlabel\");\n        input.setAttribute(\"type\", \"text\");\n        input.setAttribute(\"id\", \"projectId\");\n        addprojectbtn.setAttribute(\"type\", \"button\");\n        closeprojectbtn.setAttribute(\"type\", \"button\");\n        label.textContent = \"Project Name:\";\n\n\n        projectFolder.append(projectHead);\n        projectFolder.append(projectLabelHolder);\n        projectFolder.append(projectbtnHolder);\n\n        projectLabelHolder.append(label);\n        projectLabelHolder.append(br);\n        projectLabelHolder.append(input);\n\n        projectbtnHolder.append(closeprojectbtn);\n        projectbtnHolder.append(addprojectbtn);\n\n        content.append(projectFolder);\n\n    });\n}\nconst closeForm = () => {\n    const closeForm = document.querySelector(\".closeproject\");\n    const form = document.getElementById(\"projectfolder\");\n    closeForm.addEventListener(\"click\", () => {\n        if (form.style.display = \"block\") {\n            form.style.display = \"none\";\n        }\n    });\n    return closeForm;\n}\n\nconst DOMpage = () => {\n    openForm();\n    openInbox();\n    addProject();\n    closeForm();\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMpage);\n\n\n//# sourceURL=webpack://todo-list/./src/Pages/DOMpage.js?");

/***/ }),

/***/ "./src/Pages/Homepage.js":
/*!*******************************!*\
  !*** ./src/Pages/Homepage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHeader = () => {\n  const header = document.createElement(\"header\");\n  const navbar = document.createElement(\"div\");\n  const iconDiv = document.createElement(\"div\");\n  const addTaskbtn = document.createElement(\"button\");\n\n  navbar.setAttribute(\"id\", \"navbar\");\n  iconDiv.classList.add(\"icon\");\n  addTaskbtn.classList.add(\"taskbtn\");\n\n  iconDiv.textContent = \"icon\";\n  addTaskbtn.textContent = \"+\";\n\n  navbar.append(iconDiv);\n  navbar.append(addTaskbtn);\n  header.append(navbar);\n\n  return header;\n};\n\nconst createContent = () => {\n  const contentContainer = document.getElementById(\"content\");\n  const leftSideSection = document.createElement(\"div\");\n  const rightSideSection = document.createElement(\"div\");\n\n  const ul = document.createElement(\"ul\");\n  const list = document.createElement(\"li\");\n\n  const inboxbtn = document.createElement(\"div\");\n  const todaybtn = document.createElement(\"div\");\n  const nextWeekbtn = document.createElement(\"div\");\n\n  const projectHolder = document.createElement(\"div\");\n  const project = document.createElement(\"ul\");\n  const projectList = document.createElement(\"li\");\n  const addProjectbtn = document.createElement(\"button\");\n\n  const rightinboxDiv = document.createElement(\"div\");\n  const righttodayDiv = document.createElement(\"div\");\n  const rightnextWeekDiv = document.createElement(\"div\");\n\n  const inboxHead = document.createElement(\"h1\");\n  const todayHead = document.createElement(\"h1\");\n  const nextWeekHead = document.createElement(\"h1\");\n\n  leftSideSection.setAttribute(\"id\", \"leftSide\");\n  rightSideSection.setAttribute(\"id\", \"rightSide\");\n\n  rightinboxDiv.setAttribute(\"id\", \"inboxDiv\");\n  righttodayDiv.setAttribute(\"id\", \"todayDiv\");\n  rightnextWeekDiv.setAttribute(\"id\", \"nextWeekDiv\");\n\n  inboxbtn.setAttribute(\"id\", \"inbox\");\n  todaybtn.setAttribute(\"id\", \"today\");\n  nextWeekbtn.setAttribute(\"id\", \"nextWeek\");\n\n  projectHolder.setAttribute(\"id\", \"projectHolder\");\n  project.setAttribute(\"id\", \"project\");\n  projectList.setAttribute(\"id\", \"projectList\");\n  addProjectbtn.setAttribute(\"id\", \"projectbtn\");\n\n\n  inboxHead.classList.add(\"inboxhead\");\n  todayHead.classList.add(\"todayHead\");\n  nextWeekHead.classList.add(\"nextWeekHead\");\n\n\n\n\n  inboxHead.textContent = \"Inbox\";\n  todayHead.textContent = \"Today\";\n  nextWeekHead.textContent = \"Next 7 days\";\n  project.textContent = \"Project\";\n\n  inboxbtn.textContent = \"Inbox\";\n  todaybtn.textContent = \"Today\";\n  nextWeekbtn.textContent = \" Next 7 days\";\n\n  addProjectbtn.textContent = \" + Add project\";\n\n  ul.append(list);\n  list.append(inboxbtn);\n  list.append(todaybtn);\n  list.append(nextWeekbtn);\n  list.append(projectHolder);\n  projectHolder.append(project);\n  project.append(projectList);\n  projectList.append(addProjectbtn);\n\n\n  leftSideSection.append(ul);\n\n  rightinboxDiv.append(inboxHead);\n  righttodayDiv.append(todayHead);\n  rightnextWeekDiv.append(nextWeekHead);\n\n  rightSideSection.append(rightinboxDiv);\n  rightSideSection.append(righttodayDiv);\n  rightSideSection.append(rightnextWeekDiv);\n\n  contentContainer.append(leftSideSection);\n  contentContainer.append(rightSideSection);\n\n  return contentContainer;\n};\n\nconst Homepage = () => {\n  document.body.append(createHeader());\n  document.body.append(createContent());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);\n\n\n//# sourceURL=webpack://todo-list/./src/Pages/Homepage.js?");

/***/ }),

/***/ "./src/Pages/Logicpage.js":
/*!********************************!*\
  !*** ./src/Pages/Logicpage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst list = [];\nlet nextListId = 1;\nclass Todo {\n    constructor(title, description, dueDate, priority, id) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.id = id;\n    }\n}\n\nconst addListToLibrary = () => {\n    const titleName = document.getElementById(\"titlename\").value;\n    const descriptionName = document.getElementById(\"description\").value;\n    const dueDateNo = document.getElementById(\"dueDate\").value;\n    const priorityId = document.getElementById(\"priority\").value;\n    let project = new Todo(titleName, descriptionName, dueDateNo, priorityId, nextListId);\n    list.push(project);\n    console.log(list);\n    createCard();\n    nextListId++;\n}\n\nconst createCard = () => {\n    const titleName = document.getElementById(\"titlename\").value;\n    const descriptionName = document.getElementById(\"description\").value;\n    const dueDateNo = document.getElementById(\"dueDate\").value;\n    const priorityId = document.getElementById(\"priority\").value;\n    const inboxDiv = document.getElementById(\"inboxDiv\");\n    const formContainer = document.getElementById(\"form-container\");\n    const titleHolder = document.createElement(\"p\");\n    const descriptionHolder = document.createElement(\"p\");\n    const dueDateHolder = document.createElement(\"p\");\n    const priorityHolder = document.createElement(\"p\");\n    const inbox = document.createElement(\"div\");\n    const inboxCardDiv = document.createElement(\"div\");\n    const inboxExposedDiv = document.createElement(\"div\");\n    const inboxDeletebtn = document.createElement(\"button\");\n    inboxExposedDiv.setAttribute(\"id\", list.length);\n    inbox.classList.add(\"inbox-Collapse\");\n    inboxCardDiv.classList.add(\"inbox-Card\");\n    inboxExposedDiv.classList.add(\"inbox-Exposed\");\n    titleHolder.textContent = `Title: ${titleName}`;\n    descriptionHolder.textContent = `Description: ${descriptionName}`;\n    dueDateHolder.textContent = `Due Date: ${dueDateNo}`;\n    priorityHolder.textContent = `Priority: ${priorityId}`;\n    inboxDeletebtn.textContent = \"Delete\";\n    inboxExposedDiv.append(titleName);\n    inboxExposedDiv.append(inboxDeletebtn);\n    inboxCardDiv.append(inboxExposedDiv);\n    inbox.append(titleHolder);\n    inbox.append(descriptionHolder);\n    inbox.append(dueDateHolder);\n    inbox.append(priorityHolder);\n    inboxCardDiv.append(inbox);\n    inboxDiv.append(inboxCardDiv);\n    formContainer.style.display = \"none\";\n    inboxDiv.style.display = \"block\";\n};\n\nconst submitForm = () => {\n    const submitbtn = document.querySelector(\"#submitbtn\");\n    submitbtn.addEventListener(\"click\", addListToLibrary);\n}\n\n \n\n\nconst Logicpage = () => {\n    submitForm();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logicpage);\n\n\n//# sourceURL=webpack://todo-list/./src/Pages/Logicpage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Pages_Homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pages/Homepage */ \"./src/Pages/Homepage.js\");\n/* harmony import */ var _Pages_DOMpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages/DOMpage */ \"./src/Pages/DOMpage.js\");\n/* harmony import */ var _Pages_Logicpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/Logicpage */ \"./src/Pages/Logicpage.js\");\n\n\n\n\n\n\n\n(0,_Pages_Homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_Pages_DOMpage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_Pages_Logicpage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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