"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./components/NavBar.tsx":
/*!*******************************!*\
  !*** ./components/NavBar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"(app-client)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _public_logov2_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/logov2.svg */ \"(app-client)/./public/logov2.svg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst pages = [\n    {\n        label: \"About\",\n        href: \"/#about\",\n        key: (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n    },\n    {\n        label: \"Events\",\n        href: \"/#events\",\n        key: (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n        scroll: true\n    },\n    {\n        label: \"Committee\",\n        href: \"/committee\",\n        key: (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n        scroll: true\n    },\n    {\n        label: \"Sponsors\",\n        href: \"/sponsors\",\n        key: (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n        scroll: true\n    }\n];\nconst joinUs = [\n    {\n        label: \"Join Us\",\n        href: \"https://manchesterstudentsunion.com/activities/view/unics\",\n        key: (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n    }\n];\nconst NavBar = ()=>{\n    _s();\n    const [showMobileMenu, setShowMobileMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-black fixed top-0 left-0 right-0 z-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-screen-xl mx-auto py-4 flex justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-shrink-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _public_logov2_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            width: 64,\n                            height: 64,\n                            alt: \"UniCS logo\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mcmjoker/GitRepos/unicsmcr.com/components/NavBar.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mcmjoker/GitRepos/unicsmcr.com/components/NavBar.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden md:flex justify-center items-center space-x-4 text-white text-lg font-bold ml-auto\",\n                        children: pages.map((param)=>/*#__PURE__*/ {\n                            let { label , href , key , scroll =true  } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: href,\n                                className: \"hover:underline hover:underline-offset-8\",\n                                children: label\n                            }, key, false, {\n                                fileName: \"/Users/mcmjoker/GitRepos/unicsmcr.com/components/NavBar.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 7\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/mcmjoker/GitRepos/unicsmcr.com/components/NavBar.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-auto hidden md:block\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://manchesterstudentsunion.com/activities/view/unics\",\n                            className: \"text-guh-green text-lg border-2 border-guh-green py-2 px-9\",\n                            children: \"Join Us\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mcmjoker/GitRepos/unicsmcr.com/components/NavBar.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mcmjoker/GitRepos/unicsmcr.com/components/NavBar.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:hidden ml-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white p-2\",\n                            onClick: ()=>setShowMobileMenu(!showMobileMenu),\n                            children: showMobileMenu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"h-6 w-6\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                stroke: \"currentColor\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: 2,\n                                    d: \"M6 18L18 6M6 6l12 12\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mcmjoker/GitRepos/unicsmcr.com/components/NavBar.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mcmjoker/GitRepos/unicsmcr.com/components/NavBar.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 8\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"h-6 w-6\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                stroke: \"currentColor\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: 2,\n                                    d: \"M4 6h16M4 12h16M4 18h16\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mcmjoker/GitRepos/unicsmcr.com/components/NavBar.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mcmjoker/GitRepos/unicsmcr.com/components/NavBar.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 8\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mcmjoker/GitRepos/unicsmcr.com/components/NavBar.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mcmjoker/GitRepos/unicsmcr.com/components/NavBar.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mcmjoker/GitRepos/unicsmcr.com/components/NavBar.tsx\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:hidden \".concat(showMobileMenu ? \"block\" : \"hidden\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-between h-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            pages.map((param)=>/*#__PURE__*/ {\n                                let { label , href , key , scroll =true  } = param;\n                                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: href,\n                                    className: \"block p-4 hover:bg-gray-800 text-white text-lg text-center justify-center\",\n                                    onClick: ()=>setShowMobileMenu(false),\n                                    children: label\n                                }, key, false, {\n                                    fileName: \"/Users/mcmjoker/GitRepos/unicsmcr.com/components/NavBar.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 8\n                                }, undefined);\n                            }),\n                            joinUs.map((param)=>/*#__PURE__*/ {\n                                let { label , href , key  } = param;\n                                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: href,\n                                    className: \"block p-4 hover:bg-gray-800 text-white text-lg text-center justify-center\",\n                                    onClick: ()=>setShowMobileMenu(false),\n                                    children: label\n                                }, key, false, {\n                                    fileName: \"/Users/mcmjoker/GitRepos/unicsmcr.com/components/NavBar.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 8\n                                }, undefined);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mcmjoker/GitRepos/unicsmcr.com/components/NavBar.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mcmjoker/GitRepos/unicsmcr.com/components/NavBar.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mcmjoker/GitRepos/unicsmcr.com/components/NavBar.tsx\",\n                lineNumber: 66,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mcmjoker/GitRepos/unicsmcr.com/components/NavBar.tsx\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, undefined);\n};\n_s(NavBar, \"i7rEpryjMGWMTa4BDx9Bl1WIlPk=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVyQ1A7bUNBTElFOzs7Ozs0QkFNSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPVjtHQTVFTUc7S0FBQUE7QUE4RU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIudHN4PzMwMjIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEZhRmFjZWJvb2tTcXVhcmUsIEZhVHdpdHRlciwgRmFJbnN0YWdyYW0sIEZhR2l0aHViIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi9wdWJsaWMvbG9nb3YyLnN2Zyc7XG5cbmNvbnN0IHBhZ2VzID0gW1xuXHR7IGxhYmVsOiAnQWJvdXQnLCBocmVmOiAnLyNhYm91dCcsIGtleTogdXVpZHY0KCkgfSxcblx0eyBsYWJlbDogJ0V2ZW50cycsIGhyZWY6ICcvI2V2ZW50cycsIGtleTogdXVpZHY0KCksIHNjcm9sbDogdHJ1ZSB9LFxuXHR7IGxhYmVsOiAnQ29tbWl0dGVlJywgaHJlZjogJy9jb21taXR0ZWUnLCBrZXk6IHV1aWR2NCgpLCBzY3JvbGw6IHRydWUgfSxcblx0eyBsYWJlbDogJ1Nwb25zb3JzJywgaHJlZjogJy9zcG9uc29ycycsIGtleTogdXVpZHY0KCksIHNjcm9sbDogdHJ1ZSB9XG5dO1xuXG5jb25zdCBqb2luVXMgPSBbeyBsYWJlbDogJ0pvaW4gVXMnLCBocmVmOiAnaHR0cHM6Ly9tYW5jaGVzdGVyc3R1ZGVudHN1bmlvbi5jb20vYWN0aXZpdGllcy92aWV3L3VuaWNzJywga2V5OiB1dWlkdjQoKSB9XVxuXG5jb25zdCBOYXZCYXIgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xuXHRjb25zdCBbc2hvd01vYmlsZU1lbnUsIHNldFNob3dNb2JpbGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxuYXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei0xMFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4teGwgbXgtYXV0byBweS00IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiPlxuXHRcdFx0XHRcdDxJbWFnZSBzcmM9e2xvZ299IHdpZHRoPXs2NH0gaGVpZ2h0PXs2NH0gYWx0PVwiVW5pQ1MgbG9nb1wiLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc3BhY2UteC00IHRleHQtd2hpdGUgdGV4dC1sZyBmb250LWJvbGQgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdHtwYWdlcy5tYXAoKHsgbGFiZWwsIGhyZWYsIGtleSwgc2Nyb2xsID0gdHJ1ZSB9KSA9PiAoXG5cdFx0XHRcdFx0XHQ8YSBrZXk9e2tleX0gaHJlZj17aHJlZn0gY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lIGhvdmVyOnVuZGVybGluZS1vZmZzZXQtOFwiPlxuXHRcdFx0XHRcdFx0XHR7bGFiZWx9XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG8gaGlkZGVuIG1kOmJsb2NrXCI+XG5cdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vbWFuY2hlc3RlcnN0dWRlbnRzdW5pb24uY29tL2FjdGl2aXRpZXMvdmlldy91bmljc1wiIGNsYXNzTmFtZT1cInRleHQtZ3VoLWdyZWVuIHRleHQtbGcgYm9yZGVyLTIgYm9yZGVyLWd1aC1ncmVlbiBweS0yIHB4LTlcIj5cblx0XHRcdFx0XHRcdEpvaW4gVXNcblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHAtMlwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2JpbGVNZW51KCFzaG93TW9iaWxlTWVudSl9PlxuXHRcdFx0XHRcdFx0e3Nob3dNb2JpbGVNZW51ID8gKFxuXHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaC02IHctNlwiXG5cdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuXHRcdFx0XHRcdFx0XHRcdHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHRcdHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuXHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJub25lXCJcblx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDI0IDI0XCJcblx0XHRcdFx0XHRcdFx0XHRzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsyfSBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YG1kOmhpZGRlbiAke3Nob3dNb2JpbGVNZW51ID8gJ2Jsb2NrJyA6ICdoaWRkZW4nfWB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGgtZnVsbFwiPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHR7cGFnZXMubWFwKCh7IGxhYmVsLCBocmVmLCBrZXksIHNjcm9sbCA9IHRydWUgfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGtleT17a2V5fVxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9e2hyZWZ9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2sgcC00IGhvdmVyOmJnLWdyYXktODAwIHRleHQtd2hpdGUgdGV4dC1sZyB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0U2hvd01vYmlsZU1lbnUoZmFsc2UpfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e2xhYmVsfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdHtqb2luVXMubWFwKCh7IGxhYmVsLCBocmVmLCBrZXl9KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtrZXl9XG5cdFx0XHRcdFx0XHRcdFx0aHJlZj17aHJlZn1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJibG9jayBwLTQgaG92ZXI6YmctZ3JheS04MDAgdGV4dC13aGl0ZSB0ZXh0LWxnIHRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7bGFiZWx9XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmF2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsInY0IiwidXVpZHY0IiwibG9nbyIsInBhZ2VzIiwibGFiZWwiLCJocmVmIiwia2V5Iiwic2Nyb2xsIiwiam9pblVzIiwiTmF2QmFyIiwic2hvd01vYmlsZU1lbnUiLCJzZXRTaG93TW9iaWxlTWVudSIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwibWFwIiwiYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/NavBar.tsx\n"));

/***/ })

});