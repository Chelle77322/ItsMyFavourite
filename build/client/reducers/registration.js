"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registration = registration;

var _constants = require("../constants");

function registration() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.userConstants.REGISTER_REQUEST:
      return {
        registering: true
      };

    case _constants.userConstants.REGISTER_SUCCESS:
      return {};

    case _constants.userConstants.REGISTER_FAILURE:
      return {};

    default:
      return state;
  }
}