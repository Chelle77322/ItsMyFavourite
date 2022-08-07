"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = authHeader;

function authHeader() {
  var user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return {
      'x-access-token, application/json': user.accessToken
    };
  } else {
    return {};
  }
}