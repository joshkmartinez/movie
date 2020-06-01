module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ \"rebass\");\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rebass/forms */ \"@rebass/forms\");\n/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rebass_forms__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/joshuamartinez/Code/movie/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  const {\n    0: ID,\n    1: setID\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n\n  let handleChange = e => {\n    setID(e.target.value);\n  };\n\n  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: 1,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    justifyContent: \"center\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    m: 1,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_2__[\"Label\"], {\n    htmlFor: \"IMDB ID\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, \"IMDB ID\"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n    value: ID,\n    onChange: e => handleChange(e),\n    id: \"IMDB ID\",\n    name: \"IMDB ID\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 11\n    }\n  }))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    justifyContent: \"center\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, ID ? __jsx(\"iframe\", {\n    frameBorder: \"0\",\n    width: \"1000\",\n    height: \"500\",\n    allowscriptaccess: \"always\",\n    allowfullscreen: \"true\",\n    sandbox: \"allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation\",\n    src: \"https://streamvideo.link/getvideo?key=ukVah3Z9U6A7cYfC&video_id=\" + ID,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }) : __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    m: 3,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, \"Enter an IMDB ID\")));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIklEIiwic2V0SUQiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ2UscUVBQU07QUFDbkIsUUFBTTtBQUFBLE9BQUNBLEVBQUQ7QUFBQSxPQUFLQztBQUFMLE1BQWNDLHNEQUFRLEVBQTVCOztBQUVBLE1BQUlDLFlBQVksR0FBSUMsQ0FBRCxJQUFPO0FBQ3hCSCxTQUFLLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQUw7QUFDRCxHQUZEOztBQUlBLFNBQ0UsTUFBQywwQ0FBRDtBQUFLLFNBQUssRUFBRSxDQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQU0sa0JBQWMsRUFBQyxRQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwQ0FBRDtBQUFLLEtBQUMsRUFBRSxDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQU8sV0FBTyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUUsTUFBQyxtREFBRDtBQUNFLFNBQUssRUFBRU4sRUFEVDtBQUVFLFlBQVEsRUFBR0ksQ0FBRCxJQUFPRCxZQUFZLENBQUNDLENBQUQsQ0FGL0I7QUFHRSxNQUFFLEVBQUMsU0FITDtBQUlFLFFBQUksRUFBQyxTQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBREYsRUFZRSxNQUFDLDJDQUFEO0FBQU0sa0JBQWMsRUFBQyxRQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLEVBQUUsR0FDRDtBQUNFLGVBQVcsRUFBQyxHQURkO0FBRUUsU0FBSyxFQUFDLE1BRlI7QUFHRSxVQUFNLEVBQUMsS0FIVDtBQUlFLHFCQUFpQixFQUFDLFFBSnBCO0FBS0UsbUJBQWUsRUFBQyxNQUxsQjtBQU1FLFdBQU8sRUFBQyxxRkFOVjtBQU9FLE9BQUcsRUFDRCxxRUFDQUEsRUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREMsR0FjRCxNQUFDLDJDQUFEO0FBQU0sS0FBQyxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFmSixDQVpGLENBREY7QUFpQ0QsQ0F4Q0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBGbGV4LCBUZXh0IH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IHsgTGFiZWwsIElucHV0IH0gZnJvbSBcIkByZWJhc3MvZm9ybXNcIjtcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgW0lELCBzZXRJRF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGxldCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldElEKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggd2lkdGg9ezF9PlxuICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgPEJveCBtPXsxfT5cbiAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cIklNREIgSURcIj5JTURCIElEPC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtJRH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxuICAgICAgICAgICAgaWQ9XCJJTURCIElEXCJcbiAgICAgICAgICAgIG5hbWU9XCJJTURCIElEXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvRmxleD5cbiAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgIHtJRCA/IChcbiAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICAgICAgd2lkdGg9XCIxMDAwXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjUwMFwiXG4gICAgICAgICAgICBhbGxvd3NjcmlwdGFjY2Vzcz1cImFsd2F5c1wiXG4gICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW49XCJ0cnVlXCJcbiAgICAgICAgICAgIHNhbmRib3g9XCJhbGxvdy1mb3JtcyBhbGxvdy1wb2ludGVyLWxvY2sgYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0cyBhbGxvdy10b3AtbmF2aWdhdGlvblwiXG4gICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICBcImh0dHBzOi8vc3RyZWFtdmlkZW8ubGluay9nZXR2aWRlbz9rZXk9dWtWYWgzWjlVNkE3Y1lmQyZ2aWRlb19pZD1cIiArXG4gICAgICAgICAgICAgIElEXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxUZXh0IG09ezN9PkVudGVyIGFuIElNREIgSUQ8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICA8L0ZsZXg+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joshuamartinez/Code/movie/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@rebass/forms":
/*!********************************!*\
  !*** external "@rebass/forms" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@rebass/forms\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmViYXNzL2Zvcm1zXCI/ODRjMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAcmViYXNzL2Zvcm1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlYmFzcy9mb3Jtc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@rebass/forms\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "rebass":
/*!*************************!*\
  !*** external "rebass" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rebass\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWJhc3NcIj80OWE1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYmFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYmFzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///rebass\n");

/***/ })

/******/ });