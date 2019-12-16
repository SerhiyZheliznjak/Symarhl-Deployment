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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("influx");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DB_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tag; });
const DB_NAME = 'symarhl';
var Field;
(function (Field) {
    Field["temperature"] = "temperature";
    Field["variables"] = "variables";
})(Field || (Field = {}));
var Tag;
(function (Tag) {
    Tag["heating"] = "heating";
})(Tag || (Tag = {}));


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export logOutdoorTemp */
/* unused harmony export logVariables */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return querryVariables; });
/* harmony import */ var influx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var influx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(influx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);



const { influxHost, influxPort, influxUser, influxPassword } = _environments_environment__WEBPACK_IMPORTED_MODULE_1__[/* environment */ "a"];
const influx = new influx__WEBPACK_IMPORTED_MODULE_0__["InfluxDB"]({
    host: influxHost,
    port: influxPort,
    username: influxUser,
    password: influxPassword,
    database: _constants__WEBPACK_IMPORTED_MODULE_2__[/* DB_NAME */ "a"],
    schema: [
        {
            measurement: _constants__WEBPACK_IMPORTED_MODULE_2__[/* Field */ "b"].temperature,
            fields: {
                studio: influx__WEBPACK_IMPORTED_MODULE_0__["FieldType"].FLOAT,
                bathroom: influx__WEBPACK_IMPORTED_MODULE_0__["FieldType"].FLOAT,
                kidsroom: influx__WEBPACK_IMPORTED_MODULE_0__["FieldType"].FLOAT,
                bedroom: influx__WEBPACK_IMPORTED_MODULE_0__["FieldType"].FLOAT,
            },
            tags: [_constants__WEBPACK_IMPORTED_MODULE_2__[/* Tag */ "c"].heating],
        },
        {
            measurement: _constants__WEBPACK_IMPORTED_MODULE_2__[/* Field */ "b"].variables,
            fields: {
                studio: influx__WEBPACK_IMPORTED_MODULE_0__["FieldType"].FLOAT,
                bathroom: influx__WEBPACK_IMPORTED_MODULE_0__["FieldType"].FLOAT,
                kidsroom: influx__WEBPACK_IMPORTED_MODULE_0__["FieldType"].FLOAT,
                bedroom: influx__WEBPACK_IMPORTED_MODULE_0__["FieldType"].FLOAT,
                interval: influx__WEBPACK_IMPORTED_MODULE_0__["FieldType"].INTEGER,
                hysteresis: influx__WEBPACK_IMPORTED_MODULE_0__["FieldType"].FLOAT,
            },
            tags: [],
        },
    ],
});
/* harmony default export */ __webpack_exports__["a"] = (influx);
function logOutdoorTemp(temp) {
    influx
        .writePoints([
        {
            measurement: _constants__WEBPACK_IMPORTED_MODULE_2__[/* Field */ "b"].temperature,
            fields: { temp },
        },
    ])
        .catch(err => {
        console.error(`Error saving data to InfluxDB! ${err.stack}`);
    });
}
function logVariables(fields) {
    influx
        .writePoints([
        {
            measurement: _constants__WEBPACK_IMPORTED_MODULE_2__[/* Field */ "b"].variables,
            fields,
        },
    ])
        .catch(err => {
        console.error(`Error saving data to InfluxDB! ${err.stack}`);
    });
}
function querryVariables(limit) {
    return influx.query(`select * from ${_constants__WEBPACK_IMPORTED_MODULE_2__[/* Field */ "b"].variables}
    order by time desc
    ${limit ? `limit ${limit}` : ''}`);
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony import */ var _monorepo_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
var _config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(5, 1);


const environment = {
    production: true,
    port: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* NETWORK_PROD */ "a"].DB_PORT,
    influxHost: `http://${_monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* NETWORK_PROD */ "a"].MS_ADDRESS}`,
    influxPort: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* NETWORK_PROD */ "a"].DB_PORT,
    influxUser: _config_json__WEBPACK_IMPORTED_MODULE_1__[/* username */ "b"],
    influxPassword: _config_json__WEBPACK_IMPORTED_MODULE_1__[/* password */ "a"],
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_TempLocations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _lib_topics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _lib_HomeState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _lib_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_network__WEBPACK_IMPORTED_MODULE_3__["a"]; });







/***/ }),
/* 5 */
/***/ (function(module) {

module.exports = JSON.parse("{\"b\":\"SYMARHL\",\"a\":\"#67Gfas#4\"}");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RoomTemp */
/* unused harmony export UtilityTemp */
var RoomTemp;
(function (RoomTemp) {
    RoomTemp["studio"] = "studio";
    RoomTemp["bathroom"] = "bathroom";
    RoomTemp["kidsroom"] = "kidsroom";
    RoomTemp["bedroom"] = "bedroom";
})(RoomTemp || (RoomTemp = {}));
var UtilityTemp;
(function (UtilityTemp) {
    UtilityTemp["outdoor"] = "outdoor";
    UtilityTemp["water"] = "water";
})(UtilityTemp || (UtilityTemp = {}));


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReadTopic */
/* unused harmony export RequestSetTopic */
var ReadTopic;
(function (ReadTopic) {
    ReadTopic["studio"] = "temp/studio";
    ReadTopic["bathroom"] = "temp/bathroom";
    ReadTopic["kidsroom"] = "temp/kidsroom";
    ReadTopic["bedroom"] = "temp/bedroom";
    ReadTopic["outdoor"] = "temp/outdoor";
    ReadTopic["water"] = "temp/water";
    ReadTopic["power"] = "power";
    ReadTopic["variables"] = "variables";
    ReadTopic["started"] = "started";
})(ReadTopic || (ReadTopic = {}));
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NO_READINGS */
const NO_READINGS = -127;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NETWORK_PROD; });
/* unused harmony export NETWORK_DEV */
const NETWORK_PROD = {
    MS_ADDRESS: 'localhost',
    API_PORT: 3000,
    WEB_PORT: 3030,
    HISTORY_PORT: 3330,
    INFLUX_PORT: 8086,
    DB_PORT: 3333,
    MQTT_ADDRESS: 'localhost:1883',
};
const NETWORK_DEV = {
    MS_ADDRESS: '192.168.31.247',
    API_PORT: 8000,
    WEB_PORT: 8080,
    HISTORY_PORT: 8880,
    INFLUX_PORT: 8086,
    DB_PORT: 8888,
    MQTT_ADDRESS: '192.168.31.247:1883',
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _influx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


const app = express__WEBPACK_IMPORTED_MODULE_0__();
app.get('/', function (req, res) {
    Object(_influx__WEBPACK_IMPORTED_MODULE_1__[/* querryVariables */ "b"])()
        .then(result => {
        res.json(result);
    })
        .catch(err => {
        res.status(500).send(err.stack);
    });
});
/* harmony default export */ __webpack_exports__["a"] = (app);


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _influx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);




_influx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
    .getDatabaseNames()
    .then(names => {
    if (!names.includes(_constants__WEBPACK_IMPORTED_MODULE_3__[/* DB_NAME */ "a"])) {
        return _influx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].createDatabase(_constants__WEBPACK_IMPORTED_MODULE_3__[/* DB_NAME */ "a"]);
    }
})
    .then(() => {
    const { port } = _environments_environment__WEBPACK_IMPORTED_MODULE_0__[/* environment */ "a"];
    const server = _app__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].listen(port, () => {
        console.log(`Listening at http://localhost:${port}/api`);
    });
    server.on('error', console.error);
})
    .catch(() => {
    console.error(`Error creating Influx database!`);
});


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map