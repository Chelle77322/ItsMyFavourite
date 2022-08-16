"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = configuredStore;

var _toolkit = require("@reduxjs/toolkit");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _index = _interopRequireDefault(require("../client/reducers/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function configuredStore(preloadedState) {
  return (0, _toolkit.configureStore)(_index["default"], preloadedState, (0, _toolkit.applyMiddleware)(_reduxThunk["default"]));
}