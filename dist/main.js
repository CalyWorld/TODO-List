/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Pages/DOMpage.js":
/*!******************************!*\
  !*** ./src/Pages/DOMpage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arrayOfProjects\": () => (/* binding */ arrayOfProjects),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst openForm = () => {\n    const formContainer = document.getElementById(\"form-container\");\n    const taskbtn = document.querySelector(\".taskbtn\");\n    taskbtn.addEventListener(\"click\", () => {\n        if (formContainer.style.display !== \"none\") {\n            formContainer.style.display = \"block\";\n        } else {\n            formContainer.style.display = \"block\";\n        }\n    });\n};\nconst openInbox = () => {\n    const btn = document.querySelectorAll(\"div\");\n    const inboxDiv = document.getElementById(\"inboxDiv\");\n    const projectList = document.getElementById(\"projectList\");\n    const projectHolder = document.getElementById(\"rightProjectHolder\");\n\n    projectList.style.display = \"none\";\n    btn.forEach((button) => {\n        button.addEventListener(\"click\", (e) => {\n            if (e.target.id === \"inbox\") {\n                if ((inboxDiv.style.display = \"none\")) {\n                    inboxDiv.style.display = \"block\";\n                    projectHolder.style.display = \"none\";\n                }\n            }\n            else if (e.target.id === \"project\") {\n                if (projectList.style.display === \"none\") {\n                    projectList.style.display = \"block\";\n                    // inboxDiv.style.display = \"none\";\n                } else if (projectList.style.display = \"block\") {\n                    projectList.style.display = \"none\";\n                }\n            }\n        });\n    });\n}\n\nconst createProject = (projectTitleName) => {\n    const select = document.getElementById(\"projectlist\");\n    const projectList = document.getElementById(\"projectList\");\n    const projectHolder = document.getElementById(\"rightProjectHolder\");\n    let createdProject;\n    let projectOption;\n    let projectDivContainer;\n    let projectDivHead;\n    for (let i = 0; i < arrayOfProjects.length; i++) {\n        createdProject = document.createElement(\"div\");\n        projectOption = document.createElement(\"option\");\n        projectDivContainer = document.createElement(\"div\");\n        projectDivHead = document.createElement(\"h1\");\n        projectDivContainer.dataset.dataId = `${arrayOfProjects.length}`;\n        projectDivContainer.setAttribute(\"id\", \"newProject\");\n        projectDivContainer.classList.add(\"rightSideProjectDiv\");\n        projectDivHead.textContent = projectTitleName;\n        projectDivContainer.append(projectDivHead);\n\n        createdProject.setAttribute(\"id\", \"createdProject\");\n        createdProject.dataset.dataId = `${arrayOfProjects.length}`\n        createdProject.classList.add(\"createdProject\");\n\n        projectOption.dataset.dataId = `${arrayOfProjects.length}`\n        projectList.style.display = \"block\";\n    }\n\n    createdProject.textContent = projectTitleName;\n    projectOption.textContent = projectTitleName;\n    arrayOfProjects.push(projectDivContainer);\n    select.append(projectOption)\n    projectList.append(createdProject);\n    projectHolder.append(projectDivContainer);\n\n    console.log(arrayOfProjects);\n\n    createdProject.addEventListener(\"click\", () => {\n        const projectHolder = document.getElementById(\"rightProjectHolder\");\n        let selectedProject = parseInt(createdProject.getAttribute(\"data-data-id\"));\n        let index = parseInt(projectDivContainer.getAttribute(\"data-data-id\"));\n        const inboxDiv = document.getElementById(\"inboxDiv\");\n        if (selectedProject === index) {\n            if (projectDivContainer.style.display === \"block\") {\n                projectDivContainer.style.display = \"none\";\n            } else {\n                projectDivContainer.style.display = \"block\";\n                projectHolder.style.display = \"block\";\n                inboxDiv.style.display = \"none\";\n            }\n        }\n    });\n    localStorage.setItem(\"projects\", JSON.stringify(arrayOfProjects));\n}\nconst createProjectContainer = () => {\n    const projectbtn = document.getElementById(\"projectbtn\");\n    projectbtn.addEventListener(\"click\", () => {\n        const content = document.getElementById(\"content\");\n        const projectFolder = document.createElement(\"form\");\n        const projectHead = document.createElement(\"h1\");\n        const projectLabelHolder = document.createElement(\"div\");\n        const projectbtnHolder = document.createElement(\"div\");\n        const addprojectbtn = document.createElement(\"button\");\n        const closeprojectbtn = document.createElement(\"button\");\n\n        const label = document.createElement(\"label\")\n        const input = document.createElement(\"input\");\n        const br = document.createElement(\"br\");\n\n        projectFolder.setAttribute(\"id\", \"projectfolder\");\n        projectHead.classList.add(\"projectTitle\");\n        projectLabelHolder.classList.add(\"projectlabel\");\n        projectbtnHolder.classList.add(\"projectbtnholder\");\n\n\n        addprojectbtn.classList.add(\"addproject\");\n        closeprojectbtn.classList.add(\"closeproject\");\n\n        projectHead.textContent = \"New Project\";\n\n        addprojectbtn.textContent = \"Submit\";\n        closeprojectbtn.textContent = \"Close\";\n\n        label.setAttribute(\"for\", \"project\");\n        label.setAttribute(\"id\", \"projectlabel\");\n        input.setAttribute(\"type\", \"text\");\n        input.setAttribute(\"id\", \"projectId\");\n        addprojectbtn.setAttribute(\"type\", \"button\");\n        closeprojectbtn.setAttribute(\"type\", \"button\");\n        label.textContent = \"Project Name:\";\n\n\n        projectFolder.append(projectHead);\n        projectFolder.append(projectLabelHolder);\n        projectFolder.append(projectbtnHolder);\n\n        projectLabelHolder.append(label);\n        projectLabelHolder.append(br);\n        projectLabelHolder.append(input);\n\n        projectbtnHolder.append(closeprojectbtn);\n        projectbtnHolder.append(addprojectbtn);\n\n        content.append(projectFolder);\n\n        closeprojectbtn.addEventListener(\"click\", () => {\n            if (projectFolder.style.display = \"block\") {\n                projectFolder.style.display = \"none\";\n            }\n        });\n\n        addprojectbtn.addEventListener(\"click\", () => {\n            let projectTitleName = input.value;\n            addProjectToLibrary(projectTitleName);\n            projectFolder.remove();\n        });\n    });\n    localStorage.setItem(\"projects\", JSON.stringify(arrayOfProjects));\n\n};\n\nlet arrayOfProjects =  [];\n\n\nconst addSelectInbox = () => {\n    const selectInbox = document.getElementById(\"select-inbox\");\n    arrayOfProjects.push(selectInbox);\n}\n\nconst addProjectToLibrary = (projectTitleName) => {\n    createProject(projectTitleName);\n    localStorage.setItem(\"projects\", JSON.stringify(arrayOfProjects));\n    console.log(arrayOfProjects);\n}\nconst DOMpage = () => {\n    openForm();\n    openInbox();\n    createProjectContainer();\n    addSelectInbox();\n    // document.body.append(domContent);\n};\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMpage);\n\n\n//# sourceURL=webpack://todo-list/./src/Pages/DOMpage.js?");

/***/ }),

/***/ "./src/Pages/Homepage.js":
/*!*******************************!*\
  !*** ./src/Pages/Homepage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContent\": () => (/* binding */ createContent),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"projectSelectIndex\": () => (/* binding */ projectSelectIndex)\n/* harmony export */ });\n/* harmony import */ var _DOMpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMpage */ \"./src/Pages/DOMpage.js\");\n/* harmony import */ var _images_todolist_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/todolist.png */ \"./src/Pages/images/todolist.png\");\n/* harmony import */ var _images_todolist_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_todolist_png__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst projectSelect = document.getElementById(\"projectlist\");\n\nconst createHeader = () => {\n  const header = document.createElement(\"header\");\n  const navbar = document.createElement(\"div\");\n  const iconDiv = document.createElement(\"div\");\n  const addTaskbtn = document.createElement(\"button\");\n\n  navbar.setAttribute(\"id\", \"navbar\");\n  iconDiv.classList.add(\"icon\");\n  addTaskbtn.classList.add(\"taskbtn\");\n\n  const myIcon = new Image();\n  myIcon.src = (_images_todolist_png__WEBPACK_IMPORTED_MODULE_1___default());\n  iconDiv.append(myIcon);\n  addTaskbtn.textContent = \"+\";\n\n\n  navbar.append(iconDiv);\n  navbar.append(addTaskbtn);\n  header.append(navbar);\n  return header;\n};\n\nconst createContent = () => {\n  const contentContainer = document.getElementById(\"content\");\n  const leftSideSection = document.createElement(\"div\");\n  const rightSideSection = document.createElement(\"div\");\n\n  const ul = document.createElement(\"ul\");\n  const list = document.createElement(\"li\");\n\n  const inboxbtn = document.createElement(\"div\");\n\n  const projectHolder = document.createElement(\"div\");\n  const project = document.createElement(\"ul\");\n  const projectList = document.createElement(\"li\");\n  const addProjectbtn = document.createElement(\"button\");\n\n  const rightinboxDiv = document.createElement(\"div\");\n  const rightProjectHolderDiv = document.createElement(\"div\");\n  const inboxCardDivHolder = document.createElement(\"div\");\n\n\n  const inboxHead = document.createElement(\"h1\");\n\n  leftSideSection.setAttribute(\"id\", \"leftSide\");\n  rightSideSection.setAttribute(\"id\", \"rightSide\");\n\n  rightinboxDiv.setAttribute(\"id\", \"inboxDiv\");\n  rightinboxDiv.dataset.dataId = `${_DOMpage__WEBPACK_IMPORTED_MODULE_0__.arrayOfProjects.length}`\n  rightProjectHolderDiv.setAttribute(\"id\", \"rightProjectHolder\");\n\n\n  inboxbtn.setAttribute(\"id\", \"inbox\");\n\n\n  projectHolder.setAttribute(\"id\", \"projectHolder\");\n  project.setAttribute(\"id\", \"project\");\n  projectList.setAttribute(\"id\", \"projectList\");\n  addProjectbtn.setAttribute(\"id\", \"projectbtn\");\n\n\n  inboxHead.classList.add(\"inboxhead\");\n  inboxCardDivHolder.setAttribute(\"id\", \"inboxCardDiv\");\n\n\n  inboxHead.textContent = \"Inbox\";\n  project.textContent = \"Project\";\n\n  inboxbtn.textContent = \"Inbox\";\n  addProjectbtn.textContent = \" + Add project\";\n\n  ul.append(list);\n  list.append(inboxbtn);\n  list.append(projectHolder);\n  projectHolder.append(project);\n  project.append(projectList);\n  project.append(addProjectbtn);\n\n  leftSideSection.append(ul);\n\n  rightinboxDiv.append(inboxHead);\n  rightinboxDiv.append(inboxCardDivHolder);\n\n  rightSideSection.append(rightinboxDiv);\n  rightSideSection.append(rightProjectHolderDiv);\n\n\n  contentContainer.append(leftSideSection);\n  contentContainer.append(rightSideSection);\n\n  return contentContainer;\n};\n\nconst projectSelectIndex = () => {\n  let index = projectSelect.selectedIndex;\n  return index;\n};\n\nprojectSelect.addEventListener(\"change\", projectSelectIndex);\n\nconst Homepage = () => {\n  document.body.append(createHeader());\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);\n\n\n\n//# sourceURL=webpack://todo-list/./src/Pages/Homepage.js?");

/***/ }),

/***/ "./src/Pages/images/todolist.png":
/*!***************************************!*\
  !*** ./src/Pages/images/todolist.png ***!
  \***************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://todo-list/./src/Pages/images/todolist.png?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Pages/Homepage.js");
/******/ 	
/******/ })()
;