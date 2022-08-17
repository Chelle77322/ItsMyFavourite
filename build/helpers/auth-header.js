"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authHeader = authHeader;

function authHeader() {
  var user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return {
      'Authorization': 'Bearer' + user.token
    };
  } else {
    return {};
  }
}