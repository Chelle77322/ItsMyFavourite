"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRedux = require("react-redux");

var _toolkit = require("@reduxjs/toolkit");

var _redux = require("redux");

var _index = _interopRequireDefault(require("./_reducers/index"));

var _store = require("./_helpers/store");

var _App = require("./App");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var state = window.__STATE__;
delete window.__STATE__;
var reducer = (0, _redux.combineReducers)(_index["default"]);
(0, _reactDom.hydrate)( /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
  store: _store.store
}, /*#__PURE__*/_react["default"].createElement(_App.App, null)), document.querySelector('#app'));