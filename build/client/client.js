"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRedux = require("react-redux");

var _toolkit = require("@reduxjs/toolkit");

var _redux = require("redux");

var _index = _interopRequireDefault(require("./reducers/index"));

var _App = _interopRequireDefault(require("../components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var state = global.__STATE__;
delete global.__STATE__;
var reducer = (0, _redux.combineReducers)(_index["default"]);
var store = (0, _toolkit.configureStore)(reducer, _index["default"], state);
(0, _reactDom.hydrate)( /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
  store: store
}, /*#__PURE__*/_react["default"].createElement(_App["default"], null)), document.querySelector('#app'));