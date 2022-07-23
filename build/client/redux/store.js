"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = _interopRequireDefault(require("./constants"));

var _reactRedux = require("react-redux");

var _reducer = _interopRequireDefault(require("./reducer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return (0, _reactRedux.configureStore)(_reducer["default"]);
};

exports["default"] = _default;