"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersFetched = void 0;

var _constants = require("./constants.cjs");

var usersFetched = function usersFetched(response) {
  return {
    type: _constants.USERS_FETCHED,
    response: response
  };
};

exports.usersFetched = usersFetched;