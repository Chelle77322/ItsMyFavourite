"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _authHeader = require("./auth-header");

Object.keys(_authHeader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _authHeader[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _authHeader[key];
    }
  });
});

var _fakebackend = require("./fakebackend");

Object.keys(_fakebackend).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _fakebackend[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fakebackend[key];
    }
  });
});

var _helper = require("./helper");

Object.keys(_helper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _helper[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _helper[key];
    }
  });
});

var _history = require("./history");

Object.keys(_history).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _history[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _history[key];
    }
  });
});

var _store = require("./store");

Object.keys(_store).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _store[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _store[key];
    }
  });
});