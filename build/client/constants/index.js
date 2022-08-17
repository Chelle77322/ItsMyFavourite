"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alertConstants = require("./alert-constants");

Object.keys(_alertConstants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _alertConstants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _alertConstants[key];
    }
  });
});

var _userConstants = require("./user-constants");

Object.keys(_userConstants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _userConstants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _userConstants[key];
    }
  });
});