"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Home = require("./pages/Home");

var _PageMiss = _interopRequireDefault(require("./pages/PageMiss"));

var _LandingPage = require("./pages/LandingPage");

var _App = _interopRequireDefault(require("../components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// eslint-disable-next-line import/no-anonymous-default-export
var _default = [_objectSpread(_objectSpread({}, _App["default"]), {}, {
  routes: [_objectSpread(_objectSpread({}, _Home.Home), {}, {
    path: '/',
    exact: true
  }), _objectSpread({
    path: '/:id'
  }, _LandingPage.LandingPage), _objectSpread({
    path: '/'
  }, _PageMiss["default"])]
})];
exports["default"] = _default;