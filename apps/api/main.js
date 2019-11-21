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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/cors.ts":
/*!**********************************!*\
  !*** ./apps/api/src/app/cors.ts ***!
  \**********************************/
/*! exports provided: corsMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "corsMiddleware", function() { return corsMiddleware; });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "debug");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _monorepo_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monorepo/core */ "./libs/core/src/index.ts");



const debug = debug__WEBPACK_IMPORTED_MODULE_1__('heating-service:cors');
const whiteList = [_monorepo_core__WEBPACK_IMPORTED_MODULE_2__["WEB_DEV_ADDRESS"]];
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

/***/ "./apps/api/src/app/index.ts":
/*!***********************************!*\
  !*** ./apps/api/src/app/index.ts ***!
  \***********************************/
/*! exports provided: app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./apps/api/src/app/routes/index.ts");
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cors */ "./apps/api/src/app/cors.ts");





const app = express__WEBPACK_IMPORTED_MODULE_0__();
app.use(_cors__WEBPACK_IMPORTED_MODULE_4__["corsMiddleware"]);
app.use(morgan__WEBPACK_IMPORTED_MODULE_2__('dev'));
app.use(express__WEBPACK_IMPORTED_MODULE_0__["json"]());
app.use(express__WEBPACK_IMPORTED_MODULE_0__["urlencoded"]({ extended: false }));
app.use(express__WEBPACK_IMPORTED_MODULE_0__["static"](Object(path__WEBPACK_IMPORTED_MODULE_1__["join"])(__dirname, 'public')));
app.use('/temp', _routes__WEBPACK_IMPORTED_MODULE_3__["temperatureRouter"]);
app.use('/system', _routes__WEBPACK_IMPORTED_MODULE_3__["systemRouter"]);
app.use('/variables', _routes__WEBPACK_IMPORTED_MODULE_3__["variablesRouter"]);



/***/ }),

/***/ "./apps/api/src/app/routes/index.ts":
/*!******************************************!*\
  !*** ./apps/api/src/app/routes/index.ts ***!
  \******************************************/
/*! exports provided: systemRouter, temperatureRouter, variablesRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system */ "./apps/api/src/app/routes/system.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "systemRouter", function() { return _system__WEBPACK_IMPORTED_MODULE_0__["systemRouter"]; });

/* harmony import */ var _temperature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./temperature */ "./apps/api/src/app/routes/temperature.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "temperatureRouter", function() { return _temperature__WEBPACK_IMPORTED_MODULE_1__["temperatureRouter"]; });

/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ "./apps/api/src/app/routes/variables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variablesRouter", function() { return _variables__WEBPACK_IMPORTED_MODULE_2__["variablesRouter"]; });






/***/ }),

/***/ "./apps/api/src/app/routes/system.ts":
/*!*******************************************!*\
  !*** ./apps/api/src/app/routes/system.ts ***!
  \*******************************************/
/*! exports provided: systemRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemRouter", function() { return systemRouter; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! child_process */ "child_process");
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "debug");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _monorepo_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @monorepo/store */ "./libs/store/src/index.ts");





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
    res.send(Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_4__["getState"])());
});



/***/ }),

/***/ "./apps/api/src/app/routes/temperature.ts":
/*!************************************************!*\
  !*** ./apps/api/src/app/routes/temperature.ts ***!
  \************************************************/
/*! exports provided: temperatureRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "temperatureRouter", function() { return temperatureRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _monorepo_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @monorepo/core */ "./libs/core/src/index.ts");
/* harmony import */ var _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @monorepo/mqtt */ "./libs/mqtt/src/index.ts");
/* harmony import */ var _monorepo_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @monorepo/store */ "./libs/store/src/index.ts");






const temperatureRouter = express__WEBPACK_IMPORTED_MODULE_1__["Router"]();
temperatureRouter.get('/', (_req, res) => {
    const { temp } = Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_5__["getState"])();
    res.send(temp);
});
temperatureRouter.put('/', (req, res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](undefined, void 0, void 0, function* () {
    const { room, temp } = req.body;
    switch (room) {
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_3__["Room"].studio:
            yield _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_4__["mqttService"].setVariableValue(_monorepo_core__WEBPACK_IMPORTED_MODULE_3__["RequestSetTopic"].studio, temp);
            res.send(http_status_codes__WEBPACK_IMPORTED_MODULE_2__["OK"]);
            break;
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_3__["Room"].bathroom:
            yield _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_4__["mqttService"].setVariableValue(_monorepo_core__WEBPACK_IMPORTED_MODULE_3__["RequestSetTopic"].bathroom, temp);
            res.send(http_status_codes__WEBPACK_IMPORTED_MODULE_2__["OK"]);
            break;
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_3__["Room"].kidsroom:
            yield _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_4__["mqttService"].setVariableValue(_monorepo_core__WEBPACK_IMPORTED_MODULE_3__["RequestSetTopic"].kidsroom, temp);
            res.send(http_status_codes__WEBPACK_IMPORTED_MODULE_2__["OK"]);
            break;
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_3__["Room"].bedroom:
            yield _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_4__["mqttService"].setVariableValue(_monorepo_core__WEBPACK_IMPORTED_MODULE_3__["RequestSetTopic"].bedroom, temp);
            res.send(http_status_codes__WEBPACK_IMPORTED_MODULE_2__["OK"]);
            break;
        default:
            res.status(http_status_codes__WEBPACK_IMPORTED_MODULE_2__["BAD_REQUEST"]);
    }
}));



/***/ }),

/***/ "./apps/api/src/app/routes/variables.ts":
/*!**********************************************!*\
  !*** ./apps/api/src/app/routes/variables.ts ***!
  \**********************************************/
/*! exports provided: variablesRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variablesRouter", function() { return variablesRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @monorepo/mqtt */ "./libs/mqtt/src/index.ts");




const variablesRouter = express__WEBPACK_IMPORTED_MODULE_1__["Router"]();
variablesRouter.put('/', (req, res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](undefined, void 0, void 0, function* () {
    const variables = req.body;
    for (let [key, value] of Object.entries(variables)) {
        try {
            yield _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_3__["mqttService"].setVariableValue(`set/${key}`, String(value));
            res.send(http_status_codes__WEBPACK_IMPORTED_MODULE_2__["OK"]);
        }
        catch (e) {
            res.status(http_status_codes__WEBPACK_IMPORTED_MODULE_2__["INTERNAL_SERVER_ERROR"]).send(`FAILED TO SET ${key}=${value}`);
        }
    }
}));



/***/ }),

/***/ "./apps/api/src/environments/environment.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/environments/environment.ts ***!
  \**************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _monorepo_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monorepo/core */ "./libs/core/src/index.ts");

const environment = {
    production: false,
    port: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__["NETWORK_DEV"].API_PORT,
    mqttBroker: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__["NETWORK_DEV"].MQTT_ADDRESS
};


/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "debug");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monorepo/mqtt */ "./libs/mqtt/src/index.ts");
/* harmony import */ var _utils_nightShift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/nightShift */ "./apps/api/src/utils/nightShift.ts");
/* harmony import */ var _utils_messageHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/messageHandler */ "./apps/api/src/utils/messageHandler.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./apps/api/src/environments/environment.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app */ "./apps/api/src/app/index.ts");







const debug = debug__WEBPACK_IMPORTED_MODULE_1__('heating-service:server');
const { port } = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"];
_app__WEBPACK_IMPORTED_MODULE_6__["app"].set('port', port);
const server = Object(http__WEBPACK_IMPORTED_MODULE_0__["createServer"])(_app__WEBPACK_IMPORTED_MODULE_6__["app"]);
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
    _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_2__["mqttService"].connect(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].mqttBroker, _utils_messageHandler__WEBPACK_IMPORTED_MODULE_4__["handleMessage"]);
    Object(_utils_nightShift__WEBPACK_IMPORTED_MODULE_3__["startScheduler"])();
});


/***/ }),

/***/ "./apps/api/src/utils/messageHandler.ts":
/*!**********************************************!*\
  !*** ./apps/api/src/utils/messageHandler.ts ***!
  \**********************************************/
/*! exports provided: handleMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleMessage", function() { return handleMessage; });
/* harmony import */ var _monorepo_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monorepo/core */ "./libs/core/src/index.ts");
/* harmony import */ var _monorepo_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monorepo/store */ "./libs/store/src/index.ts");


const stripSet = (setTopic) => setTopic.split('set/')[1];
const parsePayload = (payload) => payload.split(';').map(keyVal => keyVal.split('='));
const handleMessage = (topic, payload) => {
    switch (topic) {
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_0__["ReadTopic"].studio:
            Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_1__["setTemp"])(_monorepo_core__WEBPACK_IMPORTED_MODULE_0__["Room"].studio, parseFloat(payload));
            break;
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_0__["ReadTopic"].bathroom:
            Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_1__["setTemp"])(_monorepo_core__WEBPACK_IMPORTED_MODULE_0__["Room"].bathroom, parseFloat(payload));
            break;
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_0__["ReadTopic"].kidsroom:
            Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_1__["setTemp"])(_monorepo_core__WEBPACK_IMPORTED_MODULE_0__["Room"].kidsroom, parseFloat(payload));
            break;
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_0__["ReadTopic"].bedroom:
            Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_1__["setTemp"])(_monorepo_core__WEBPACK_IMPORTED_MODULE_0__["Room"].bedroom, parseFloat(payload));
            break;
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_0__["ReadTopic"].power:
            parsePayload(payload).forEach(([topic, value]) => Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_1__["setPower"])(topic, value));
            break;
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_0__["ReadTopic"].variables:
            parsePayload(payload).forEach(([topic, value]) => Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_1__["setVariable"])(stripSet(topic), parseFloat(value)));
            break;
        case _monorepo_core__WEBPACK_IMPORTED_MODULE_0__["RequestSetTopic"].confirmed:
            const [key, val] = stripSet(payload).split('=');
            Object(_monorepo_store__WEBPACK_IMPORTED_MODULE_1__["setVariable"])(key, parseFloat(val));
            break;
    }
};


/***/ }),

/***/ "./apps/api/src/utils/nightShift.ts":
/*!******************************************!*\
  !*** ./apps/api/src/utils/nightShift.ts ***!
  \******************************************/
/*! exports provided: startScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startScheduler", function() { return startScheduler; });
/* harmony import */ var _monorepo_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monorepo/core */ "./libs/core/src/index.ts");
/* harmony import */ var _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monorepo/mqtt */ "./libs/mqtt/src/index.ts");
const { getSunrise, getSunset } = __webpack_require__(/*! sunrise-sunset-js */ "sunrise-sunset-js");
const { scheduleJob } = __webpack_require__(/*! node-schedule */ "node-schedule");


const homeLocation = [49.827896, 23.987235];
function getTomorrow(today) {
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow;
}
function getHomeSunrise(date) {
    const [lat, long] = homeLocation;
    return getSunrise(lat, long, date);
}
function getHomeSunset(date) {
    const [lat, long] = homeLocation;
    return getSunset(lat, long, date);
}
function setDayShift() {
    _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_1__["mqttService"].setVariableValue(_monorepo_core__WEBPACK_IMPORTED_MODULE_0__["RequestSetTopic"].nightShift, '0.00');
}
function setNightShift() {
    _monorepo_mqtt__WEBPACK_IMPORTED_MODULE_1__["mqttService"].setVariableValue(_monorepo_core__WEBPACK_IMPORTED_MODULE_0__["RequestSetTopic"].nightShift, '1.00');
}
function scheduleDayShift(today) {
    const sunrise = getHomeSunrise(today);
    scheduleJob(sunrise, () => {
        setDayShift();
        scheduleNightShift(today);
    });
}
function scheduleNightShift(today) {
    const tomorrow = getTomorrow(today);
    const todaySunset = getHomeSunset(today);
    scheduleJob(todaySunset, () => {
        setNightShift();
        scheduleDayShift(tomorrow);
    });
}
function startScheduler() {
    const now = new Date();
    const sunrise = getHomeSunrise(now);
    const sunset = getHomeSunset(now);
    if (now < sunrise) {
        scheduleDayShift(now);
        setNightShift();
    }
    else if (now < sunset) {
        scheduleNightShift(now);
        setDayShift();
    }
    else {
        scheduleDayShift(getTomorrow(now));
        setNightShift();
    }
}


/***/ }),

/***/ "./libs/core/src/index.ts":
/*!********************************!*\
  !*** ./libs/core/src/index.ts ***!
  \********************************/
/*! exports provided: Room, ReadTopic, RequestGetTopic, RequestSetTopic, NO_READINGS, NETWORK_PROD, NETWORK_DEV, WEB_DEV_ADDRESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_Rooms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/Rooms */ "./libs/core/src/lib/Rooms.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return _lib_Rooms__WEBPACK_IMPORTED_MODULE_0__["Room"]; });

/* harmony import */ var _lib_topics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/topics */ "./libs/core/src/lib/topics.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReadTopic", function() { return _lib_topics__WEBPACK_IMPORTED_MODULE_1__["ReadTopic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestGetTopic", function() { return _lib_topics__WEBPACK_IMPORTED_MODULE_1__["RequestGetTopic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestSetTopic", function() { return _lib_topics__WEBPACK_IMPORTED_MODULE_1__["RequestSetTopic"]; });

/* harmony import */ var _lib_HomeState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/HomeState */ "./libs/core/src/lib/HomeState.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NO_READINGS", function() { return _lib_HomeState__WEBPACK_IMPORTED_MODULE_2__["NO_READINGS"]; });

/* harmony import */ var _lib_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/network */ "./libs/core/src/lib/network.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NETWORK_PROD", function() { return _lib_network__WEBPACK_IMPORTED_MODULE_3__["NETWORK_PROD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NETWORK_DEV", function() { return _lib_network__WEBPACK_IMPORTED_MODULE_3__["NETWORK_DEV"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WEB_DEV_ADDRESS", function() { return _lib_network__WEBPACK_IMPORTED_MODULE_3__["WEB_DEV_ADDRESS"]; });







/***/ }),

/***/ "./libs/core/src/lib/HomeState.ts":
/*!****************************************!*\
  !*** ./libs/core/src/lib/HomeState.ts ***!
  \****************************************/
/*! exports provided: NO_READINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_READINGS", function() { return NO_READINGS; });
const NO_READINGS = -127;


/***/ }),

/***/ "./libs/core/src/lib/Rooms.ts":
/*!************************************!*\
  !*** ./libs/core/src/lib/Rooms.ts ***!
  \************************************/
/*! exports provided: Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
var Room;
(function (Room) {
    Room["studio"] = "studio";
    Room["bathroom"] = "bathroom";
    Room["kidsroom"] = "kidsroom";
    Room["bedroom"] = "bedroom";
})(Room || (Room = {}));


/***/ }),

/***/ "./libs/core/src/lib/network.ts":
/*!**************************************!*\
  !*** ./libs/core/src/lib/network.ts ***!
  \**************************************/
/*! exports provided: NETWORK_PROD, NETWORK_DEV, WEB_DEV_ADDRESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NETWORK_PROD", function() { return NETWORK_PROD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NETWORK_DEV", function() { return NETWORK_DEV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB_DEV_ADDRESS", function() { return WEB_DEV_ADDRESS; });
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
const WEB_DEV_ADDRESS = 'http://localhost:4200';


/***/ }),

/***/ "./libs/core/src/lib/topics.ts":
/*!*************************************!*\
  !*** ./libs/core/src/lib/topics.ts ***!
  \*************************************/
/*! exports provided: ReadTopic, RequestGetTopic, RequestSetTopic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadTopic", function() { return ReadTopic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestGetTopic", function() { return RequestGetTopic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestSetTopic", function() { return RequestSetTopic; });
var ReadTopic;
(function (ReadTopic) {
    ReadTopic["studio"] = "temp/studio";
    ReadTopic["bathroom"] = "temp/bathroom";
    ReadTopic["kidsroom"] = "temp/kidsroom";
    ReadTopic["bedroom"] = "temp/bedroom";
    ReadTopic["power"] = "power";
    ReadTopic["variables"] = "variables";
})(ReadTopic || (ReadTopic = {}));
var RequestGetTopic;
(function (RequestGetTopic) {
    RequestGetTopic["variables"] = "get/variables";
})(RequestGetTopic || (RequestGetTopic = {}));
var RequestSetTopic;
(function (RequestSetTopic) {
    RequestSetTopic["nightShift"] = "set/nightShift";
    RequestSetTopic["hysteresis"] = "set/hysteresis";
    RequestSetTopic["interval"] = "set/interval";
    RequestSetTopic["studio"] = "set/studio";
    RequestSetTopic["bathroom"] = "set/bathroom";
    RequestSetTopic["kidsroom"] = "set/kidsroom";
    RequestSetTopic["bedroom"] = "set/bedroom";
    RequestSetTopic["confirmed"] = "set/confirmed";
})(RequestSetTopic || (RequestSetTopic = {}));


/***/ }),

/***/ "./libs/mqtt/src/index.ts":
/*!********************************!*\
  !*** ./libs/mqtt/src/index.ts ***!
  \********************************/
/*! exports provided: mqttService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_mqtt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/mqtt */ "./libs/mqtt/src/lib/mqtt.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mqttService", function() { return _lib_mqtt__WEBPACK_IMPORTED_MODULE_0__["mqttService"]; });




/***/ }),

/***/ "./libs/mqtt/src/lib/mqtt.ts":
/*!***********************************!*\
  !*** ./libs/mqtt/src/lib/mqtt.ts ***!
  \***********************************/
/*! exports provided: mqttService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mqttService", function() { return mqttService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var async_mqtt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! async-mqtt */ "async-mqtt");
/* harmony import */ var async_mqtt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(async_mqtt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _monorepo_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monorepo/core */ "./libs/core/src/index.ts");



class MqttService {
    constructor() {
        this.confirmations = new Map();
    }
    connect(brokerAddress, messageHandler) {
        this.client = Object(async_mqtt__WEBPACK_IMPORTED_MODULE_1__["connect"])(`tcp://${brokerAddress}`);
        this.client.on('connect', () => {
            setTimeout(() => this.sendMessage(_monorepo_core__WEBPACK_IMPORTED_MODULE_2__["RequestGetTopic"].variables, String(Date.now())), 1000);
        });
        this.client.on('message', (topic, bytes) => {
            const payload = String(bytes);
            if (topic === _monorepo_core__WEBPACK_IMPORTED_MODULE_2__["RequestSetTopic"].confirmed) {
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
            const verifyConfirmation = () => {
                if (this.confirmations.get(varName) !== parseFloat(payload) &&
                    attempts > 0)
                    this.setVariableValue(topic, payload, --attempts);
            };
            yield this.sendMessage(topic, payload);
            setTimeout(verifyConfirmation, 1000);
            const varName = topic.split('/')[1];
        });
    }
}
const mqttService = new MqttService();


/***/ }),

/***/ "./libs/store/src/index.ts":
/*!*********************************!*\
  !*** ./libs/store/src/index.ts ***!
  \*********************************/
/*! exports provided: setVariable, setPower, setTemp, getState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/store */ "./libs/store/src/lib/store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setVariable", function() { return _lib_store__WEBPACK_IMPORTED_MODULE_0__["setVariable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPower", function() { return _lib_store__WEBPACK_IMPORTED_MODULE_0__["setPower"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTemp", function() { return _lib_store__WEBPACK_IMPORTED_MODULE_0__["setTemp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return _lib_store__WEBPACK_IMPORTED_MODULE_0__["getState"]; });




/***/ }),

/***/ "./libs/store/src/lib/store.ts":
/*!*************************************!*\
  !*** ./libs/store/src/lib/store.ts ***!
  \*************************************/
/*! exports provided: setVariable, setPower, setTemp, getState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVariable", function() { return setVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPower", function() { return setPower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTemp", function() { return setTemp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony import */ var _monorepo_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monorepo/core */ "./libs/core/src/index.ts");

const homeState = {
    temp: {
        studio: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__["NO_READINGS"],
        bathroom: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__["NO_READINGS"],
        bedroom: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__["NO_READINGS"],
        kidsroom: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__["NO_READINGS"],
    },
    variables: {
        studio: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__["NO_READINGS"],
        bathroom: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__["NO_READINGS"],
        kidsroom: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__["NO_READINGS"],
        bedroom: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__["NO_READINGS"],
        interval: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__["NO_READINGS"],
        hysteresis: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__["NO_READINGS"],
        nightShift: _monorepo_core__WEBPACK_IMPORTED_MODULE_0__["NO_READINGS"],
    },
    power: {
        pump: '-1',
        wall: '-1',
        studio: '-1',
        bathroom: '-1',
        kidsroom: '-1',
        bedroom: '-1',
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


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Git\symarhl\apps\api\src\main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "async-mqtt":
/*!*****************************!*\
  !*** external "async-mqtt" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("async-mqtt");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "http-status-codes":
/*!************************************!*\
  !*** external "http-status-codes" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http-status-codes");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "node-schedule":
/*!********************************!*\
  !*** external "node-schedule" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-schedule");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "sunrise-sunset-js":
/*!************************************!*\
  !*** external "sunrise-sunset-js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sunrise-sunset-js");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map