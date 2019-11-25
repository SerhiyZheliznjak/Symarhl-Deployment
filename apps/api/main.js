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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_Rooms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _lib_Rooms__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _lib_topics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _lib_topics__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _lib_topics__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _lib_topics__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony import */ var _lib_HomeState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _lib_HomeState__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _lib_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_network__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_network__WEBPACK_IMPORTED_MODULE_3__["b"]; });







/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_store__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_store__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _lib_store__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _lib_store__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _lib_store__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _lib_store__WEBPACK_IMPORTED_MODULE_0__["f"]; });




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_mqtt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_mqtt__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("http-status-codes");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return startScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setCurrentShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return stopScheduler; });
/* harmony import */ var _monorepo_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _monorepo_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
const { scheduleJob } = __webpack_require__(31);



let morningJob;
let eveningJob;
function getTomorrow(today) {
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow;
}
function queueShift(topic, temp) {
    setTimeout(() => _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_1__[/* mqttService */ "a"].setVariableValue(topic, temp), 500);
}
function setDayShift() {
    const { variables, nightShift } = Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_2__[/* getState */ "b"])();
    Array.from(nightShift.at.entries()).forEach(([room]) => {
        queueShift(_monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* RequestSetTopic */ "f"][room], String(variables[room]));
    });
}
function setNightShift() {
    const { nightShift } = Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_2__[/* getState */ "b"])();
    Array.from(nightShift.at.entries()).forEach(([room, nightTemp]) => {
        queueShift(_monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* RequestSetTopic */ "f"][room], String(nightTemp));
    });
}
function scheduleDayShift(tomorrow) {
    const date = new Date(tomorrow.getTime());
    const { morning } = Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_2__[/* getState */ "b"])().nightShift;
    date.setHours(morning, 0, 0);
    morningJob = scheduleJob(date, () => {
        setDayShift();
        scheduleNightShift(date);
    });
}
function scheduleNightShift(today) {
    const date = new Date(today.getTime());
    const { evening } = Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_2__[/* getState */ "b"])().nightShift;
    date.setHours(evening, 0, 0);
    eveningJob = scheduleJob(date, () => {
        setNightShift();
        scheduleDayShift(getTomorrow(date));
    });
}
function startScheduler(room, nigthtTemp) {
    const now = new Date();
    const { nightShift, variables } = Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_2__[/* getState */ "b"])();
    const { evening, morning } = nightShift;
    Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_2__[/* setNightTemp */ "c"])(room, nigthtTemp);
    const currentHour = now.getHours();
    if (currentHour < morning) {
        if (!morningJob)
            scheduleDayShift(now);
        _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_1__[/* mqttService */ "a"].setVariableValue(_monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* RequestSetTopic */ "f"][room], String(nigthtTemp));
    }
    else if (currentHour < evening) {
        if (!eveningJob)
            scheduleNightShift(now);
        _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_1__[/* mqttService */ "a"].setVariableValue(_monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* RequestSetTopic */ "f"][room], String(variables[room]));
    }
    else {
        if (!morningJob)
            scheduleDayShift(getTomorrow(now));
        _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_1__[/* mqttService */ "a"].setVariableValue(_monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* RequestSetTopic */ "f"][room], String(nigthtTemp));
    }
}
function setCurrentShift() {
    const { morning, evening, at } = Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_2__[/* getState */ "b"])().nightShift;
    const now = new Date();
    const currentHour = now.getHours();
    if (currentHour < morning || currentHour > evening) {
        at.forEach((nightTemp, room) => _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_1__[/* mqttService */ "a"].setVariableValue(_monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* RequestSetTopic */ "f"][room], String(nightTemp)));
    }
    else {
        at.forEach((_, room) => _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_1__[/* mqttService */ "a"].setVariableValue(_monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* RequestSetTopic */ "f"][room], String(Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_2__[/* getState */ "b"])().variables[room])));
    }
}
function stopScheduler(room) {
    if (Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_2__[/* delNightTemp */ "a"])(room) < 1) {
        if (morningJob) {
            morningJob.cancel();
            morningJob = null;
        }
        if (eveningJob) {
            eveningJob.cancel();
            eveningJob = null;
        }
    }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _system__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _temperature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _temperature__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _variables__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _nightShift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nightShift__WEBPACK_IMPORTED_MODULE_3__["a"]; });







/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony import */ var _monorepo_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

const environment = {
    production: true,
    port: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* NETWORK_PROD */ "b"].API_PORT,
    mqttBroker: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* NETWORK_PROD */ "b"].MQTT_ADDRESS
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);





const app = express__WEBPACK_IMPORTED_MODULE_0__();
app.use(_cors__WEBPACK_IMPORTED_MODULE_4__[/* corsMiddleware */ "a"]);
app.use(morgan__WEBPACK_IMPORTED_MODULE_2__('dev'));
app.use(express__WEBPACK_IMPORTED_MODULE_0__["json"]());
app.use(express__WEBPACK_IMPORTED_MODULE_0__["urlencoded"]({ extended: false }));
app.use(express__WEBPACK_IMPORTED_MODULE_0__["static"](Object(path__WEBPACK_IMPORTED_MODULE_1__["join"])(__dirname, 'public')));
app.use('/temp', _routes__WEBPACK_IMPORTED_MODULE_3__[/* temperatureRouter */ "c"]);
app.use('/system', _routes__WEBPACK_IMPORTED_MODULE_3__[/* systemRouter */ "b"]);
app.use('/variables', _routes__WEBPACK_IMPORTED_MODULE_3__[/* variablesRouter */ "d"]);
app.use('/nightshift', _routes__WEBPACK_IMPORTED_MODULE_3__[/* nigthShiftRouter */ "a"]);



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mqttService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var async_mqtt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var async_mqtt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(async_mqtt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _monorepo_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);



class MqttService {
    constructor() {
        this.confirmations = new Map();
    }
    connect(brokerAddress, messageHandler) {
        this.client = Object(async_mqtt__WEBPACK_IMPORTED_MODULE_1__["connect"])(`tcp://${brokerAddress}`);
        this.client.on('connect', () => {
            setTimeout(() => this.sendMessage(_monorepo_core__WEBPACK_IMPORTED_MODULE_2__[/* RequestGetTopic */ "e"].variables, String(Date.now())), 1000);
        });
        this.client.on('message', (topic, bytes) => {
            const payload = String(bytes);
            if (topic === _monorepo_core__WEBPACK_IMPORTED_MODULE_2__[/* RequestSetTopic */ "f"].confirmed) {
                const [key, val] = payload.split('/')[1].split('=');
                this.confirmations.set(key, parseFloat(val));
            }
            messageHandler(topic, payload);
        });
        this.client.subscribe('#');
    }
    sendMessage(topic, payload) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.client.publish(topic, payload, { qos: 1 });
        });
    }
    setVariableValue(topic, payload, attempts = 5) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const varName = topic.split('/')[1];
            const verifyConfirmation = () => {
                if (this.confirmations.get(varName) !== parseFloat(payload) &&
                    attempts > 0)
                    this.setVariableValue(topic, payload, --attempts);
            };
            yield this.sendMessage(topic, payload);
            setTimeout(verifyConfirmation, 1000);
        });
    }
}
const mqttService = new MqttService();


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Room; });
var Room;
(function (Room) {
    Room["studio"] = "studio";
    Room["bathroom"] = "bathroom";
    Room["kidsroom"] = "kidsroom";
    Room["bedroom"] = "bedroom";
    Room["outdoor"] = "outdoor";
})(Room || (Room = {}));


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadTopic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RequestGetTopic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RequestSetTopic; });
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NO_READINGS; });
const NO_READINGS = -127;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NETWORK_PROD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NETWORK_DEV; });
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setPower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setTemp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getState; });
/* unused harmony export setDayNightSchedule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setNightTemp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return delNightTemp; });
/* harmony import */ var _monorepo_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

const homeState = {
    temp: {
        studio: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* NO_READINGS */ "c"],
        bathroom: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* NO_READINGS */ "c"],
        bedroom: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* NO_READINGS */ "c"],
        kidsroom: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* NO_READINGS */ "c"],
    },
    variables: {
        studio: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* NO_READINGS */ "c"],
        bathroom: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* NO_READINGS */ "c"],
        kidsroom: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* NO_READINGS */ "c"],
        bedroom: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* NO_READINGS */ "c"],
        interval: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* NO_READINGS */ "c"],
        hysteresis: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* NO_READINGS */ "c"],
    },
    power: {
        pump: '-1',
        wall: '-1',
        studio: '-1',
        bathroom: '-1',
        kidsroom: '-1',
        bedroom: '-1',
    },
    nightShift: {
        at: new Map(),
        morning: 7,
        evening: 21,
    },
};
const validateVariableName = (variableName) => {
    if (variableName.indexOf('/') > -1)
        throw new Error(`${variableName} is invalid`);
};
function setVariable(variable, val) {
    validateVariableName(variable);
    homeState.variables[variable] = val;
}
function setPower(power, state) {
    homeState.power[power] = state;
}
function setTemp(room, temp) {
    homeState.temp[room] = temp;
}
function getState() {
    return homeState;
}
function setDayNightSchedule(morning = 7, evening = 21) {
    homeState.nightShift = Object.assign({}, homeState.nightShift, { morning, evening });
}
function setNightTemp(room, nightTemp) {
    homeState.nightShift.at.set(room, nightTemp);
}
function delNightTemp(room) {
    const { nightShift } = homeState;
    nightShift.at.delete(room);
    return nightShift.at.size;
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return systemRouter; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _monorepo_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);





const debug = debug__WEBPACK_IMPORTED_MODULE_2__('heating-service:system');
const systemRouter = express__WEBPACK_IMPORTED_MODULE_0__["Router"]();
systemRouter.get('/cputemp', (_req, res) => {
    Object(child_process__WEBPACK_IMPORTED_MODULE_1__["exec"])('vcgencmd measure_temp', (err, stdout, stderr) => {
        if (err) {
            debug(err.message);
            res.status(http_status_codes__WEBPACK_IMPORTED_MODULE_3__["INTERNAL_SERVER_ERROR"]).send(err.message);
            return;
        }
        debug(`stdout: ${stdout}; stderr: ${stderr}`);
        res.send(stdout);
    });
});
systemRouter.get('/state', (_req, res) => {
    res.send(Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_4__[/* getState */ "b"])());
});



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return temperatureRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _monorepo_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _monorepo_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);






const temperatureRouter = express__WEBPACK_IMPORTED_MODULE_1__["Router"]();
temperatureRouter.get('/', (_req, res) => {
    const { temp } = Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_5__[/* getState */ "b"])();
    res.send(temp);
});
temperatureRouter.put('/', (req, res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](undefined, void 0, void 0, function* () {
    const { room, temp } = req.body;
    switch (room) {
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_3__[/* Room */ "g"].studio:
            yield _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_4__[/* mqttService */ "a"].setVariableValue(_monorepo_core__WEBPACK_IMPORTED_MODULE_3__[/* RequestSetTopic */ "f"].studio, temp);
            res.send(http_status_codes__WEBPACK_IMPORTED_MODULE_2__["OK"]);
            break;
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_3__[/* Room */ "g"].bathroom:
            yield _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_4__[/* mqttService */ "a"].setVariableValue(_monorepo_core__WEBPACK_IMPORTED_MODULE_3__[/* RequestSetTopic */ "f"].bathroom, temp);
            res.send(http_status_codes__WEBPACK_IMPORTED_MODULE_2__["OK"]);
            break;
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_3__[/* Room */ "g"].kidsroom:
            yield _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_4__[/* mqttService */ "a"].setVariableValue(_monorepo_core__WEBPACK_IMPORTED_MODULE_3__[/* RequestSetTopic */ "f"].kidsroom, temp);
            res.send(http_status_codes__WEBPACK_IMPORTED_MODULE_2__["OK"]);
            break;
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_3__[/* Room */ "g"].bedroom:
            yield _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_4__[/* mqttService */ "a"].setVariableValue(_monorepo_core__WEBPACK_IMPORTED_MODULE_3__[/* RequestSetTopic */ "f"].bedroom, temp);
            res.send(http_status_codes__WEBPACK_IMPORTED_MODULE_2__["OK"]);
            break;
        default:
            res.status(http_status_codes__WEBPACK_IMPORTED_MODULE_2__["BAD_REQUEST"]);
    }
}));



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return variablesRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);




const variablesRouter = express__WEBPACK_IMPORTED_MODULE_1__["Router"]();
variablesRouter.put('/', (req, res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](undefined, void 0, void 0, function* () {
    const variables = req.body;
    for (let [key, value] of Object.entries(variables)) {
        try {
            yield _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_3__[/* mqttService */ "a"].setVariableValue(`set/${key}`, String(value));
            res.send(http_status_codes__WEBPACK_IMPORTED_MODULE_2__["OK"]);
        }
        catch (e) {
            res.status(http_status_codes__WEBPACK_IMPORTED_MODULE_2__["INTERNAL_SERVER_ERROR"]).send(`FAILED TO SET ${key}=${value}`);
        }
    }
}));



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nigthShiftRouter; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _monorepo_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _utils_nightShift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);




const nigthShiftRouter = express__WEBPACK_IMPORTED_MODULE_0__["Router"]();
nigthShiftRouter.get('/', (_req, res) => {
    const { nightShift } = Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_2__[/* getState */ "b"])();
    res.send(nightShift);
});
nigthShiftRouter.put('/', (req, res) => {
    const { room, temp } = req.body;
    Object(_utils_nightShift__WEBPACK_IMPORTED_MODULE_3__[/* startScheduler */ "b"])(room, temp);
    res.send(http_status_codes__WEBPACK_IMPORTED_MODULE_1__["OK"]);
});
nigthShiftRouter.delete('/', (req, res) => {
    const { room } = req.body;
    Object(_utils_nightShift__WEBPACK_IMPORTED_MODULE_3__[/* stopScheduler */ "c"])(room);
    res.send(http_status_codes__WEBPACK_IMPORTED_MODULE_1__["OK"]);
});



/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("async-mqtt");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleMessage; });
/* harmony import */ var _monorepo_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _monorepo_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nightShift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);




const stripSet = (setTopic) => setTopic.split('set/')[1];
const parsePayload = (payload) => payload.split(';').map(keyVal => keyVal.split('='));
const handleMessage = (topic, payload) => {
    switch (topic) {
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* ReadTopic */ "d"].studio:
            Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_1__[/* setTemp */ "e"])(_monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* Room */ "g"].studio, parseFloat(payload));
            break;
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* ReadTopic */ "d"].bathroom:
            Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_1__[/* setTemp */ "e"])(_monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* Room */ "g"].bathroom, parseFloat(payload));
            break;
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* ReadTopic */ "d"].kidsroom:
            Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_1__[/* setTemp */ "e"])(_monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* Room */ "g"].kidsroom, parseFloat(payload));
            break;
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* ReadTopic */ "d"].bedroom:
            Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_1__[/* setTemp */ "e"])(_monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* Room */ "g"].bedroom, parseFloat(payload));
            break;
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* ReadTopic */ "d"].outdoor:
            Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_1__[/* setTemp */ "e"])(_monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* Room */ "g"].outdoor, parseFloat(payload));
            break;
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* ReadTopic */ "d"].power:
            parsePayload(payload).forEach(([topic, value]) => Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_1__[/* setPower */ "d"])(topic, value));
            break;
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* ReadTopic */ "d"].variables:
            parsePayload(payload).forEach(([topic, value]) => Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_1__[/* setVariable */ "f"])(stripSet(topic), parseFloat(value)));
            break;
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* RequestSetTopic */ "f"].confirmed:
            const [key, val] = stripSet(payload).split('=');
            Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_1__[/* setVariable */ "f"])(key, parseFloat(val));
            break;
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_0__[/* ReadTopic */ "d"].started:
            setAllVariables();
            Object(_nightShift__WEBPACK_IMPORTED_MODULE_3__[/* setCurrentShift */ "a"])();
            break;
    }
};
function setAllVariables() {
    const { variables } = Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_1__[/* getState */ "b"])();
    Object.keys(variables).forEach((variable, i) => {
        setTimeout(() => _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_2__[/* mqttService */ "a"].setVariableValue(`set/${variable}`, String(variables[variable])), i * 300);
    });
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return corsMiddleware; });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _monorepo_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);



const debug = debug__WEBPACK_IMPORTED_MODULE_1__('heating-service:cors');
const ports = [_monorepo_core__WEBPACK_IMPORTED_MODULE_2__[/* NETWORK_DEV */ "a"].WEB_PORT, _monorepo_core__WEBPACK_IMPORTED_MODULE_2__[/* NETWORK_PROD */ "b"].WEB_PORT];
const hosts = ['localhost', '192.168.31.247'];
const whiteList = ports.reduce((acc, port) => [...hosts.map(host => `http://${host}:${port}`), ...acc], []);
debug(`enabled for: [${whiteList}]`);
const corsOptions = {
    origin: (origin, callback) => {
        debug(`request from origin: ${origin}`);
        if (!origin || whiteList.indexOf(origin) >= 0) {
            callback(null, true);
        }
        else {
            debug(`unknown origin ${origin}`);
            callback(new Error('CORS IS NOT ALLOWED'));
        }
    },
};
const corsMiddleware = cors__WEBPACK_IMPORTED_MODULE_0__(corsOptions);


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _utils_messageHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);






const debug = debug__WEBPACK_IMPORTED_MODULE_1__('heating-service:server');
const { port } = _environments_environment__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"];
_app__WEBPACK_IMPORTED_MODULE_5__[/* app */ "a"].set('port', port);
const server = Object(http__WEBPACK_IMPORTED_MODULE_0__["createServer"])(_app__WEBPACK_IMPORTED_MODULE_5__[/* app */ "a"]);
server.listen(port);
server.on('error', (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
});
server.on('listening', () => {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
    _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_2__[/* mqttService */ "a"].connect(_environments_environment__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].mqttBroker, _utils_messageHandler__WEBPACK_IMPORTED_MODULE_3__[/* handleMessage */ "a"]);
});


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("node-schedule");

/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map