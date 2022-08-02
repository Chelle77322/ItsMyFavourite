"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _message = _interopRequireDefault(require("./message.js"));

var _userReducer = _interopRequireDefault(require("./user-reducer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  message: _message["default"],
  userReducer: _userReducer["default"]
});
var _default = rootReducer;
exports["default"] = _default;