"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function alert() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };

    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };

    case alertConstants.CLEAR:
      return {};

    default:
      return state;
  }
}

var _default = alert;
exports["default"] = _default;