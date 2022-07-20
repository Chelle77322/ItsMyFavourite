"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("./constants.cjs");

var _reactRedux = require("react-redux");

var _reducer = _interopRequireDefault(require("./reducer.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return (0, _reactRedux.configureStore)(_reducer["default"]);
};

exports["default"] = _default;