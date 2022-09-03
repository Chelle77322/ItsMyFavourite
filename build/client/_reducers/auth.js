"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authentication = authentication;

var _constants = require("../_constants");

var user = JSON.parse(localStorage.getItem('user'));
var initialState = user ? {
  loggedIn: true,
  user: user
} : {};

function authentication() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };

    case _constants.userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };

    case _constants.userConstants.LOGIN_FAILURE:
      return {};

    case _constants.userConstants.LOGOUT:
      return {};

    default:
      return state;
  }
}