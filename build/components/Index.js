"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PrivateRoute = require("./PrivateRoute");

Object.keys(_PrivateRoute).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PrivateRoute[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PrivateRoute[key];
    }
  });
});