"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userActions = void 0;

var _types = require("./types");

var userActions = {
  registerSuccess: function registerSuccess(user) {
    return {
      types: _types.Types.REGISTER_SUCCESS,
      payload: {
        user: user
      }
    };
  },
  registerFail: function registerFail(user) {
    return {
      type: _types.Types.REGISTER_FAIL,
      payload: {
        user: user
      }
    };
  },
  loginSuccess: function loginSuccess(user) {
    return {
      type: _types.Types.LOGIN_SUCCESS,
      payload: {
        user: user
      }
    };
  },
  loginFail: function loginFail(user) {
    return {
      type: _types.Types.LOGIN_FAIL,
      payload: {
        user: user
      }
    };
  },
  logout: function logout(user) {
    return {
      types: _types.Types.LOGOUT,
      payload: {
        user: user
      }
    };
  },
  formSubmitionStatus: function formSubmitionStatus(status) {
    return {
      types: _types.Types.FORM_SUBMITITION_STATUS,
      payload: {
        status: status
      }
    };
  }
};
exports.userActions = userActions;