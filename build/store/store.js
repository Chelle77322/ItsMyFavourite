"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reducers = require("../client/reducers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable import/no-anonymous-default-export */
var newReducer = (0, _redux.combineReducers)(_reducers.reducer);

var _default = function _default() {
  var store = (0, _toolkit.configureStore)(newReducer, {}, (0, _toolkit.applyMiddleware)(_reduxThunk["default"]));
  return store;
};

exports["default"] = _default;