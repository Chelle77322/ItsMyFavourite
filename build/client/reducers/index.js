"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _userReducer = _interopRequireDefault(require("../reducers/user-reducer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducer = (0, _redux.combineReducers)({
  userReducer: _userReducer["default"]
});
var _default = reducer;
exports["default"] = _default;