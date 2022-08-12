"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Home = require("../client/pages/Home");

var _PageMiss = require("../client/pages/PageMiss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function App() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    exact: true,
    Component: _Home.Home,
    path: "/home"
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    exact: true,
    Component: _PageMiss.PageMiss,
    path: "/pagemiss"
  }))));
}