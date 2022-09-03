"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxLogger = require("redux-logger");

var _reducers = _interopRequireDefault(require("../reducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loggerMiddleware = (0, _reduxLogger.createLogger)();
var store = (0, _redux.configureStore)(_reducers["default"], (0, _redux.applyMiddleware)(_reduxThunk["default"], loggerMiddleware));
exports.store = store;