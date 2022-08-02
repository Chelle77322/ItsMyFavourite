"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _userSlice = require("../client/features/userSlice");

/* eslint-disable import/no-anonymous-default-export */
var _default = (0, _toolkit.configureStore)({
  reducer: {
    user: _userSlice.userSlice.reducer
  }
});

exports["default"] = _default;