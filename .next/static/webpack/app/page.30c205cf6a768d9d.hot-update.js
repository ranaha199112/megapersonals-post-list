"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LoginForm */ \"(app-pages-browser)/./app/components/LoginForm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home(param) {\n    let { params } = param;\n    _s();\n    const [homepage, setHomepage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { adminId, posterId } = params;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !homepage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/main.jpeg\"\n                }, void 0, false, {\n                    fileName: \"/Users/zaynyusuf/Desktop/tracker/megapersonals-post-list/app/page.js\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-3/4 flex  flex-col justify-center items-center mx-auto text-[#ffff] mt -3 px-3 py-2 rounded bg-[#00aaff]\",\n                    onClick: ()=>setHomepage(true),\n                    children: \"Post list Check\"\n                }, void 0, false, {\n                    fileName: \"/Users/zaynyusuf/Desktop/tracker/megapersonals-post-list/app/page.js\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/zaynyusuf/Desktop/tracker/megapersonals-post-list/app/page.js\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoginForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            adminId: adminId,\n            posterId: posterId\n        }, void 0, false, {\n            fileName: \"/Users/zaynyusuf/Desktop/tracker/megapersonals-post-list/app/page.js\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"6uM6iey9fEuZMwrEs/UsvB9HAsk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDaUM7QUFDYztBQUVoQyxTQUFTRSxLQUFLLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjs7SUFDM0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sRUFBRU0sT0FBTyxFQUFFQyxRQUFRLEVBQUUsR0FBR0o7SUFFOUIscUJBQ0U7a0JBQ0csQ0FBQ0MseUJBQ0EsOERBQUNJO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBSUMsS0FBSTs7Ozs7OzhCQUNULDhEQUFDQztvQkFDQ0gsV0FBVTtvQkFDVkksU0FBUyxJQUFNUixZQUFZOzhCQUM1Qjs7Ozs7Ozs7Ozs7aUNBS0gsOERBQUNKLDZEQUFTQTtZQUFDSyxTQUFTQTtZQUFTQyxVQUFVQTs7Ozs7OztBQUkvQztHQXJCd0JMO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL0xvZ2luRm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgW2hvbWVwYWdlLCBzZXRIb21lcGFnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgYWRtaW5JZCwgcG9zdGVySWQgfSA9IHBhcmFtcztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IWhvbWVwYWdlID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9tYWluLmpwZWdcIiAvPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMy80IGZsZXggIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBteC1hdXRvIHRleHQtWyNmZmZmXSBtdCAtMyBweC0zIHB5LTIgcm91bmRlZCBiZy1bIzAwYWFmZl1cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SG9tZXBhZ2UodHJ1ZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUG9zdCBsaXN0IENoZWNrXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPExvZ2luRm9ybSBhZG1pbklkPXthZG1pbklkfSBwb3N0ZXJJZD17cG9zdGVySWR9IC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTG9naW5Gb3JtIiwiSG9tZSIsInBhcmFtcyIsImhvbWVwYWdlIiwic2V0SG9tZXBhZ2UiLCJhZG1pbklkIiwicG9zdGVySWQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});