"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alertActions = void 0;

var _constants = require("../constants");

var alertActions = {
  success: success,
  error: error,
  clear: clear
};
exports.alertActions = alertActions;

function success(message) {
  return {
    type: _constants.alertConstants.SUCCESS,
    message: message
  };
}

function error(message) {
  return {
    type: _constants.alertConstants.ERROR,
    message: message
  };
}

function clear() {
  return {
    type: _constants.alertConstants.CLEAR
  };
}