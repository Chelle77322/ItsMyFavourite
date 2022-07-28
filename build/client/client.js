"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _toolkit = require("@reduxjs/toolkit");

var _reactRedux = require("react-redux");

var _App = require("./App.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var state = window.__STATE__;
delete window.__STATE__;
var store = (0, _toolkit.configureStore)(state);
(0, _reactDom.hydrate)( /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
  store: store
}, /*#__PURE__*/_react["default"].createElement(_App.App, null)), document.querySelector('#app'));