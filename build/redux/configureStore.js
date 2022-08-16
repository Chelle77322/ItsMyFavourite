"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _userSlice = _interopRequireDefault(require("../client/features/userSlice"));

var _index = _interopRequireDefault(require("../client/reducers/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var configuredStore = (0, _toolkit.configureStore)({
  reducer: {
    reducer: _index["default"],
    user: _userSlice["default"]
  }
});
var _default = configuredStore;
exports["default"] = _default;