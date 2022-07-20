"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("./constants.cjs");

function getInitialState() {
  if (typeof window !== 'undefined' && window.__APP_STATE) {
    return window.__APP_STATE;
  }

  return {
    users: null
  };
}

var reducer = function reducer() {
  var oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getInitialState();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _constants.USERS_FETCHED) {
    return {
      users: action.response.data
    };
  }

  return oldState;
};

var _default = reducer;
exports["default"] = _default;