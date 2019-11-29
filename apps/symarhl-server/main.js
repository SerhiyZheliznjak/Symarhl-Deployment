(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Room */
var Room;
(function (Room) {
    Room["studio"] = "studio";
    Room["bathroom"] = "bathroom";
    Room["kidsroom"] = "kidsroom";
    Room["bedroom"] = "bedroom";
    Room["outdoor"] = "outdoor";
})(Room || (Room = {}));


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReadTopic */
/* unused harmony export RequestGetTopic */
/* unused harmony export RequestSetTopic */
var ReadTopic;
(function (ReadTopic) {
    ReadTopic["studio"] = "temp/studio";
    ReadTopic["bathroom"] = "temp/bathroom";
    ReadTopic["kidsroom"] = "temp/kidsroom";
    ReadTopic["bedroom"] = "temp/bedroom";
    ReadTopic["outdoor"] = "temp/outdoor";
    ReadTopic["power"] = "power";
    ReadTopic["variables"] = "variables";
    ReadTopic["started"] = "started";
})(ReadTopic || (ReadTopic = {}));
var RequestGetTopic;
(function (RequestGetTopic) {
    RequestGetTopic["variables"] = "get/variables";
})(RequestGetTopic || (RequestGetTopic = {}));
var RequestSetTopic;
(function (RequestSetTopic) {
    RequestSetTopic["hysteresis"] = "set/hysteresis";
    RequestSetTopic["interval"] = "set/interval";
    RequestSetTopic["studio"] = "set/studio";
    RequestSetTopic["bathroom"] = "set/bathroom";
    RequestSetTopic["kidsroom"] = "set/kidsroom";
    RequestSetTopic["bedroom"] = "set/bedroom";
    RequestSetTopic["confirmed"] = "set/confirmation";
})(RequestSetTopic || (RequestSetTopic = {}));


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NO_READINGS */
const NO_READINGS = -127;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NETWORK_PROD; });
/* unused harmony export NETWORK_DEV */
const NETWORK_PROD = {
    MS_ADDRESS: 'localhost',
    API_PORT: 3000,
    WEB_PORT: 3030,
    HISTORY_PORT: 3033,
    MQTT_ADDRESS: 'localhost:1883',
};
const NETWORK_DEV = {
    MS_ADDRESS: 'localhost',
    API_PORT: 8000,
    WEB_PORT: 8080,
    HISTORY_PORT: 8088,
    MQTT_ADDRESS: '192.168.31.247:1883',
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony import */ var _monorepo_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

const environment = {
    production: false,
    port: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* NETWORK_PROD */ "a"].WEB_PORT,
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_Rooms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _lib_topics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _lib_HomeState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _lib_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_network__WEBPACK_IMPORTED_MODULE_3__["a"]; });







/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/



const { port } = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__[/* environment */ "a"];
const app = express__WEBPACK_IMPORTED_MODULE_0__();
const clientDir = express__WEBPACK_IMPORTED_MODULE_0__["static"](Object(path__WEBPACK_IMPORTED_MODULE_2__["join"])(__dirname, '../symarhl'), {
    maxAge: 1000 * 60 * 60 * 24,
});
app.use(clientDir);
app.use('/*', clientDir);
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map