"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersFetched = usersFetched;

var _constants = require("./constants");

function usersFetched(response) {
  return {
    type: _constants.USERS_FETCHED,
    response: response
  };
}