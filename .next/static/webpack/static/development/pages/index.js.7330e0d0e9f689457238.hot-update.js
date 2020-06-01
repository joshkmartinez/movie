webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ \"./node_modules/rebass/dist/index.esm.js\");\n/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rebass/forms */ \"./node_modules/@rebass/forms/dist/index.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/joshuamartinez/Code/movie/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      ID = _useState[0],\n      setID = _useState[1];\n\n  var handleChange = function handleChange(e) {\n    setID(e.target.value);\n  };\n\n  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: 1 / 3,\n    px: 2,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_2__[\"Label\"], {\n    htmlFor: \"IMDB ID\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, \"IMDB ID\"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n    value: ID,\n    onChange: function onChange(e) {\n      return handleChange(e);\n    },\n    id: \"IMDB ID\",\n    name: \"IMDB ID\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    bg: \"#123456\",\n    p: 0,\n    px: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, \"Fetch Movie\"))), __jsx(\"iframe\", {\n    frameBorder: \"0\",\n    width: \"350\",\n    height: \"200\",\n    src: \"https://streamvideo.link/getvideo?key=ukVah3Z9U6A7cYfC&video_id=tt0816692\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  })));\n}, \"ZbcOYNt8gOIW/a0fp5jyayyJlrY=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSUQiLCJzZXRJRCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNlLDhFQUFNO0FBQUE7O0FBQUEsa0JBQ0NBLHNEQUFRLENBQUMsRUFBRCxDQURUO0FBQUEsTUFDWkMsRUFEWTtBQUFBLE1BQ1JDLEtBRFE7O0FBR25CLE1BQUlDLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUN4QkYsU0FBSyxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFMO0FBQ0QsR0FGRDs7QUFJQSxTQUNFLE1BQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMENBQUQ7QUFBSyxTQUFLLEVBQUUsSUFBSSxDQUFoQjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBTyxXQUFPLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRSxNQUFDLG1EQUFEO0FBQ0UsU0FBSyxFQUFFTCxFQURUO0FBRUUsWUFBUSxFQUFFLGtCQUFDRyxDQUFEO0FBQUEsYUFBT0QsWUFBWSxDQUFDQyxDQUFELENBQW5CO0FBQUEsS0FGWjtBQUdFLE1BQUUsRUFBQyxTQUhMO0FBSUUsUUFBSSxFQUFDLFNBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFVRSxNQUFDLDZDQUFEO0FBQVEsTUFBRSxFQUFDLFNBQVg7QUFBcUIsS0FBQyxFQUFFLENBQXhCO0FBQTJCLE1BQUUsRUFBRSxDQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBVkYsQ0FERixFQWVFO0FBQ0UsZUFBVyxFQUFDLEdBRGQ7QUFFRSxTQUFLLEVBQUMsS0FGUjtBQUdFLFVBQU0sRUFBQyxLQUhUO0FBSUUsT0FBRyxFQUFDLDJFQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRixDQURGLENBREY7QUEwQkQsQ0FqQ0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIEZsZXgsIFRleHQgfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgeyBMYWJlbCwgSW5wdXQgfSBmcm9tIFwiQHJlYmFzcy9mb3Jtc1wiO1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBbSUQsIHNldElEXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGxldCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldElEKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8Qm94IHdpZHRoPXsxIC8gM30gcHg9ezJ9PlxuICAgICAgICA8RmxleD5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJJTURCIElEXCI+SU1EQiBJRDwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e0lEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX1cbiAgICAgICAgICAgICAgaWQ9XCJJTURCIElEXCJcbiAgICAgICAgICAgICAgbmFtZT1cIklNREIgSURcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8QnV0dG9uIGJnPVwiIzEyMzQ1NlwiIHA9ezB9IHB4PXsxfT5cbiAgICAgICAgICAgIDxUZXh0PkZldGNoIE1vdmllPC9UZXh0PlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDxpZnJhbWVcbiAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICAgIHdpZHRoPVwiMzUwXCJcbiAgICAgICAgICBoZWlnaHQ9XCIyMDBcIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vc3RyZWFtdmlkZW8ubGluay9nZXR2aWRlbz9rZXk9dWtWYWgzWjlVNkE3Y1lmQyZ2aWRlb19pZD10dDA4MTY2OTJcIlxuICAgICAgICA+PC9pZnJhbWU+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})