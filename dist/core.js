(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-core"],{

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"core": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/wp-content/plugins/boostimer/dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors","style-core"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Settings */ "./src/pages/Settings.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Sidebar */ "./src/components/Sidebar.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var App = function App() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["HashRouter"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "boostimer-app text-gray-700 m-auto max-w-full xl:max-w-7xl mt-12"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "grid grid-cols-12 gap-0"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col-span-3"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col-span-9"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/",
    component: _pages_Settings__WEBPACK_IMPORTED_MODULE_4__["default"]
  }))))));
};

var _default = Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_2__["hot"])(App);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/home/xavir/Public/Sites/dev/wp-content/plugins/woo-availability/src/App.js");
  reactHotLoader.register(_default, "default", "/home/xavir/Public/Sites/dev/wp-content/plugins/woo-availability/src/App.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Loader.js":
/*!**********************************!*\
  !*** ./src/components/Loader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var Loader = function Loader() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_content_loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    viewBox: "0 0 800 400",
    height: '100%',
    width: '100%',
    className: "h-full"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "-8",
    y: "30",
    rx: "4",
    ry: "4",
    width: "120",
    height: "10"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "70",
    rx: "3",
    ry: "3",
    className: "h-2 w-full"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "90",
    rx: "3",
    ry: "3",
    width: "422",
    height: "7"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "120",
    rx: "3",
    ry: "3",
    width: "424",
    height: "7"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "-8",
    y: "170",
    rx: "4",
    ry: "4",
    width: "120",
    height: "10"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "190",
    rx: "3",
    ry: "3",
    className: "h-2 w-full"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "210",
    rx: "3",
    ry: "3",
    width: "422",
    height: "7"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "230",
    rx: "3",
    ry: "3",
    width: "424",
    height: "7"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "-8",
    y: "280",
    rx: "4",
    ry: "4",
    width: "120",
    height: "10"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "300",
    rx: "3",
    ry: "3",
    className: "h-2 w-full"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "320",
    rx: "3",
    ry: "3",
    width: "422",
    height: "7"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "340",
    rx: "3",
    ry: "3",
    width: "424",
    height: "7"
  }));
};

var _default = Loader;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loader, "Loader", "/home/xavir/Public/Sites/dev/wp-content/plugins/woo-availability/src/components/Loader.js");
  reactHotLoader.register(_default, "default", "/home/xavir/Public/Sites/dev/wp-content/plugins/woo-availability/src/components/Loader.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Sidebar.js":
/*!***********************************!*\
  !*** ./src/components/Sidebar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var _Utils_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utils/Logo */ "./src/components/Utils/Logo.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var Sidebar = function Sidebar() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "p-6 flex flex-col items-center bg-white rounded-md shadow"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "mt-8"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Utils_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "mt-10 mb-4 w-full grid grid-rows-1 gap-4"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: "outline-none text-gray-400 hover:text-gray-800 rounded-md px-6 py-3 flex items-center text-md uppercase tracking-wider focus:ring-0",
    exact: true,
    to: "/",
    activeClassName: "text-gray-600 bg-gray-100 rounded-md shadow font-semibold"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "ml-6"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Settings", "boostimer")))));
};

var _default = Sidebar;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Sidebar, "Sidebar", "/home/xavir/Public/Sites/dev/wp-content/plugins/woo-availability/src/components/Sidebar.js");
  reactHotLoader.register(_default, "default", "/home/xavir/Public/Sites/dev/wp-content/plugins/woo-availability/src/components/Sidebar.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Utils/InputField.js":
/*!********************************************!*\
  !*** ./src/components/Utils/InputField.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var InputField = function InputField(_ref) {
  var id = _ref.id,
      label = _ref.label,
      tooltip = _ref.tooltip,
      placeholder = _ref.placeholder,
      value = _ref.value,
      onChange = _ref.onChange;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "flex flex-col justify-center"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "flex flex-col"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "text-md text-gray-400 flex items-center"
  }, label, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    "data-tip": true,
    "data-for": id,
    className: "ml-2 cursor-pointer text-gray-400 hover:text-gray-700 transition delay-100 ease-out"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-4",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: id,
    className: "rounded-md",
    type: "dark",
    effect: "solid",
    delayHide: 100
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "mt-2 text-white text-xs"
  }, tooltip)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    onChange: onChange,
    className: "boostimer-input",
    type: "text",
    placeholder: placeholder,
    defaultValue: value
  })));
};

var _default = InputField;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(InputField, "InputField", "/home/xavir/Public/Sites/dev/wp-content/plugins/woo-availability/src/components/Utils/InputField.js");
  reactHotLoader.register(_default, "default", "/home/xavir/Public/Sites/dev/wp-content/plugins/woo-availability/src/components/Utils/InputField.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Utils/Logo.js":
/*!**************************************!*\
  !*** ./src/components/Utils/Logo.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var Logo = function Logo() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "169",
    height: "23",
    fill: "none",
    viewBox: "0 0 169 23"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#1F2937",
    d: "M74.934 16.477c0 1.972-.713 3.52-2.14 4.642-1.425 1.123-3.393 1.684-5.901 1.684s-4.562-.389-6.16-1.168v-3.429c1.012.476 2.084.85 3.217 1.123 1.143.273 2.205.41 3.186.41 1.436 0 2.493-.273 3.17-.82.689-.546 1.032-1.28 1.032-2.2 0-.829-.313-1.532-.94-2.108-.627-.577-1.922-1.26-3.884-2.049-2.023-.819-3.45-1.755-4.279-2.806-.83-1.052-1.244-2.317-1.244-3.793 0-1.851.658-3.308 1.973-4.37C64.278.531 66.044 0 68.258 0c2.124 0 4.239.465 6.342 1.396l-1.153 2.958c-1.972-.83-3.732-1.244-5.28-1.244-1.173 0-2.063.258-2.67.774-.607.506-.91 1.178-.91 2.018 0 .576.121 1.072.364 1.487.243.404.642.789 1.199 1.153.556.364 1.557.844 3.004 1.441 1.628.678 2.822 1.31 3.58 1.897.759.586 1.315 1.249 1.67 1.987.353.738.53 1.608.53 2.61zM86.89 22.5h-3.627V3.429H76.74V.319h16.674v3.11H86.89V22.5zM96.827 22.5V.319h3.626V22.5h-3.626zM115.913 22.5l-6.432-18.525h-.122c.172 2.751.258 5.33.258 7.738V22.5h-3.292V.319h5.113l6.16 17.645h.091L124.03.319h5.129V22.5h-3.49V11.53c0-1.102.025-2.538.076-4.308.061-1.77.111-2.842.152-3.217h-.122l-6.66 18.495h-3.202zM147.547 22.5H135V.319h12.547v3.064h-8.921v6.039h8.36v3.034h-8.36v6.964h8.921v3.08zM155.982 10.636h2.519c1.689 0 2.913-.314 3.672-.941.758-.627 1.138-1.558 1.138-2.792 0-1.254-.41-2.154-1.229-2.7-.82-.547-2.054-.82-3.702-.82h-2.398v7.252zm0 3.004v8.86h-3.626V.319h6.266c2.863 0 4.982.536 6.357 1.608 1.376 1.072 2.064 2.69 2.064 4.855 0 2.761-1.436 4.728-4.309 5.902L169 22.5h-4.127l-5.31-8.86h-3.581zM0 .319h6.585c3.054 0 5.26.445 6.615 1.335 1.365.89 2.048 2.296 2.048 4.218 0 1.294-.334 2.371-1.002 3.231-.667.86-1.628 1.401-2.882 1.624v.151c1.557.294 2.7.875 3.429 1.745.738.86 1.107 2.028 1.107 3.505 0 1.992-.698 3.555-2.094 4.688-1.385 1.123-3.317 1.684-5.795 1.684H0V.319zm3.626 9.163h3.49c1.517 0 2.624-.237 3.322-.713.698-.485 1.047-1.304 1.047-2.457 0-1.042-.38-1.796-1.138-2.261-.748-.465-1.942-.698-3.58-.698h-3.14v6.13zm0 2.944v7.024H7.48c1.517 0 2.66-.288 3.429-.864.778-.587 1.168-1.508 1.168-2.762 0-1.153-.395-2.007-1.184-2.564-.789-.556-1.987-.834-3.595-.834H3.626z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#E50914",
    fillRule: "evenodd",
    d: "M38.246 18.152a10.805 10.805 0 002.453-6.855h-3.323a7.48 7.48 0 11-2.19-5.292l2.348-2.349a10.806 10.806 0 10.712 14.496z",
    clipRule: "evenodd"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#E50914",
    fillRule: "evenodd",
    d: "M48.416 22.102c5.968 0 10.805-4.837 10.805-10.805S54.384.491 48.416.491 37.61 5.33 37.61 11.297c0 5.968 4.838 10.805 10.806 10.805zm-.006-3.328a7.48 7.48 0 100-14.961 7.48 7.48 0 000 14.961z",
    clipRule: "evenodd"
  }));
};

var _default = Logo;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Logo, "Logo", "/home/xavir/Public/Sites/dev/wp-content/plugins/woo-availability/src/components/Utils/Logo.js");
  reactHotLoader.register(_default, "default", "/home/xavir/Public/Sites/dev/wp-content/plugins/woo-availability/src/components/Utils/Logo.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Utils/SwitchField.js":
/*!*********************************************!*\
  !*** ./src/components/Utils/SwitchField.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
/* harmony import */ var _WooSwitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WooSwitch */ "./src/components/Utils/WooSwitch.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var SwitchField = function SwitchField(_ref) {
  var id = _ref.id,
      switchId = _ref.switchId,
      label = _ref.label,
      tooltip = _ref.tooltip,
      checked = _ref.checked,
      onChange = _ref.onChange;

  var getSwitchStatus = function getSwitchStatus(status) {
    if (typeof status === "boolean") {
      return status;
    }

    return 'yes' === status;
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "flex items-center justify-between w-full"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "flex flex-col"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "text-md text-gray-400 flex items-center"
  }, label, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    "data-tip": true,
    "data-for": id,
    className: "ml-2 cursor-pointer text-gray-400 hover:text-gray-700 transition delay-100 ease-out"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-4",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: id,
    className: "rounded-md",
    type: "dark",
    effect: "solid",
    delayHide: 100
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "mt-2 text-white text-xs"
  }, tooltip))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_WooSwitch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: onChange,
    id: switchId,
    checked: getSwitchStatus(checked)
  }));
};

var _default = SwitchField;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SwitchField, "SwitchField", "/home/xavir/Public/Sites/dev/wp-content/plugins/woo-availability/src/components/Utils/SwitchField.js");
  reactHotLoader.register(_default, "default", "/home/xavir/Public/Sites/dev/wp-content/plugins/woo-availability/src/components/Utils/SwitchField.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Utils/WooSwitch.js":
/*!*******************************************!*\
  !*** ./src/components/Utils/WooSwitch.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var WooSwitch = function WooSwitch(_ref) {
  var id = _ref.id,
      checked = _ref.checked,
      onChange = _ref.onChange;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    htmlFor: id,
    className: "flex items-center cursor-pointer"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "relative"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    onChange: onChange,
    id: id,
    type: "checkbox",
    className: "sr-only",
    defaultChecked: checked
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "w-10 h-4 bg-gray-400 rounded-full shadow-inner"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "dot absolute w-6 h-6 bg-gray-100 rounded-full shadow -left-1 -top-1 transition"
  })));
};

var _default = WooSwitch;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(WooSwitch, "WooSwitch", "/home/xavir/Public/Sites/dev/wp-content/plugins/woo-availability/src/components/Utils/WooSwitch.js");
  reactHotLoader.register(_default, "default", "/home/xavir/Public/Sites/dev/wp-content/plugins/woo-availability/src/components/Utils/WooSwitch.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_admin_menu_fix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/admin-menu-fix */ "./src/utils/admin-menu-fix.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var mountNode = document.getElementById('boostimer-app');
react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_App__WEBPACK_IMPORTED_MODULE_4__["default"], null), mountNode);
Object(_utils_admin_menu_fix__WEBPACK_IMPORTED_MODULE_3__["default"])('boostimer');
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mountNode, "mountNode", "/home/xavir/Public/Sites/dev/wp-content/plugins/woo-availability/src/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/Settings.js":
/*!*******************************!*\
  !*** ./src/pages/Settings.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loader */ "./src/components/Loader.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Utils_InputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Utils/InputField */ "./src/components/Utils/InputField.js");
/* harmony import */ var _components_Utils_SwitchField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Utils/SwitchField */ "./src/components/Utils/SwitchField.js");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









var Settings = function Settings() {
  var settingsSchema = {
    sale_timer: {
      title: '',
      enabled: 0
    },
    stock_timer: {
      title: '',
      enabled: 0
    }
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(settingsSchema),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      settings = _useState2[0],
      setSettings = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setIsLoading(true);
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7___default()({
      path: '/wavly/v1/settings',
      method: 'GET'
    }).then(function (response) {
      setSettings(response);
      setIsLoading(false);
    })["finally"](function () {});
  }, []);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var data = {
      sale_timer: {
        title: settings.sale_timer.title,
        enabled: settings.sale_timer.enabled
      },
      stock_timer: {
        title: settings.stock_timer.title,
        enabled: settings.stock_timer.enabled
      }
    };
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7___default()({
      path: '/wavly/v1/settings',
      method: 'PUT',
      data: data
    }).then(function (response) {
      var _response$message;

      var message = (_response$message = response.message) !== null && _response$message !== void 0 ? _response$message : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Settings have been updated successfully', 'boostimer');
      react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success(message);
    })["catch"](function (error) {
      react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].error(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Timer titles can not be empty', 'boostimer'));
    });
  };

  var handleSwitchChange = function handleSwitchChange(e, key) {
    setSettings(_objectSpread(_objectSpread({}, settings), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, {
      title: settings[key]['title'],
      enabled: e.target.checked
    })));
  };

  var handleInputChange = function handleInputChange(e, key) {
    setSettings(_objectSpread(_objectSpread({}, settings), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, {
      title: e.target.value,
      enabled: settings[key]['enabled']
    })));
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "p-6 pt-0"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "grid grid-cols-12 gap-4"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "col-span-12"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "bg-white p-8 shadow rounded-md"
  }, isLoading ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], null) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "uppercase tracking-widest text-gray-500 font-semibold"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Show Countdown", "boostimer")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "mt-6"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_Utils_SwitchField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "enable_sale_countdown_timer",
    switchId: "enable_sale_countdown_timer_switch",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Show Sale Countdown Timer", "boostimer"),
    tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Enable this to show countdown timer for sale duration on single product", "boostimer"),
    checked: settings.sale_timer.enabled,
    onChange: function onChange(e) {
      return handleSwitchChange(e, 'sale_timer');
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "mt-6"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_Utils_SwitchField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "enable_in_stock_countdown_timer",
    switchId: "enable_in_stock_countdown_timer_switch",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Show Stock Countdown Timer", "boostimer"),
    tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Enable this to show countdown timer for next available stock on single product", "boostimer"),
    checked: settings.stock_timer.enabled,
    onChange: function onChange(e) {
      return handleSwitchChange(e, 'stock_timer');
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "mt-12"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "uppercase tracking-widest text-gray-500 font-semibold"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Timer title", "boostimer")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "mt-6"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "mt-6"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_Utils_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "sale_timer_tooltip",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Sale Timer Title", "boostimer"),
    tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("This text will show on the sale timer title", "boostimer"),
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Sale ends in:", "boostimer"),
    value: settings.sale_timer.title,
    onChange: function onChange(e) {
      return handleInputChange(e, 'sale_timer');
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "mt-6"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_Utils_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "notify_me_btn_text_tooltip",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Stock Timer Title', "boostimer"),
    tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("This text will show on the stock timer title", "boostimer"),
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Expected restock in:", "boostimer"),
    value: settings.stock_timer.title,
    onChange: function onChange(e) {
      return handleInputChange(e, 'stock_timer');
    }
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "mt-12"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
    onClick: handleSubmit,
    className: "bg-gray-800 text-white px-8 py-2 uppercase text-md font-medium rounded-md hover:shadow-md transition delay-100 ease-in-out"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Save", "boostimer"))))))));
};

__signature__(Settings, "useState{[settings, setSettings](settingsSchema)}\nuseState{[isLoading, setIsLoading](true)}\nuseEffect{}");

var _default = Settings;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Settings, "Settings", "/home/xavir/Public/Sites/dev/wp-content/plugins/woo-availability/src/pages/Settings.js");
  reactHotLoader.register(_default, "default", "/home/xavir/Public/Sites/dev/wp-content/plugins/woo-availability/src/pages/Settings.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/admin-menu-fix.js":
/*!*************************************!*\
  !*** ./src/utils/admin-menu-fix.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * As we are using hash based navigation, hack fix
 * to highlight the current selected menu
 *
 * Requires jQuery
 *
 * @credit: Tareq Hasan (https://github.com/tareq1988) (Founder & CTO - weDevs)
 */
function menuFix(slug) {
  var $ = jQuery;
  var menuRoot = $('#toplevel_page_' + slug);
  var currentUrl = window.location.href;
  var currentPath = currentUrl.substr(currentUrl.indexOf('admin.php'));
  menuRoot.on('click', 'a', function () {
    var self = $(this);
    $('ul.wp-submenu li', menuRoot).removeClass('current');

    if (self.hasClass('wp-has-submenu')) {
      $('li.wp-first-item', menuRoot).addClass('current');
    } else {
      self.parents('li').addClass('current');
    }
  });
  $('ul.wp-submenu a', menuRoot).each(function (index, el) {
    if ($(el).attr('href') === currentPath) {
      $(el).parent().addClass('current');
      return;
    }
  });
}

var _default = menuFix;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(menuFix, "menuFix", "/home/xavir/Public/Sites/dev/wp-content/plugins/woo-availability/src/utils/admin-menu-fix.js");
  reactHotLoader.register(_default, "default", "/home/xavir/Public/Sites/dev/wp-content/plugins/woo-availability/src/utils/admin-menu-fix.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ })

/******/ });
//# sourceMappingURL=core.js.map