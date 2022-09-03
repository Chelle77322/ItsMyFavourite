"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alertActions = require("./alertActions");

Object.keys(_alertActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _alertActions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _alertActions[key];
    }
  });
});

var _userActions = require("./userActions");

Object.keys(_userActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _userActions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _userActions[key];
    }
  });
});