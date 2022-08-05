"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _userSlice = require("../client/features/userSlice");

var _default = function _default() {
  return (0, _toolkit.configureStore)({
    reducer: {
      user: _userSlice.userSlice.reducer
    }
  });
};

exports["default"] = _default;