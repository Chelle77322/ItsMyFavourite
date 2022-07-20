"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _userReducer = _interopRequireDefault(require("../reducers/user-reducer.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  favouriteApp: _userReducer["default"]
});

exports["default"] = _default;