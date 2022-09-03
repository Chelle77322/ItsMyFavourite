"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.login = exports["default"] = exports.authActions = void 0;

var _types = require("./types");

var _authService = require("../../services/auth-service");

var authActions = function authActions(id, firstName, lastName, password) {
  return function (dispatch) {
    return _authService.AuthService.register(id, firstName, lastName, password).then(function (response) {
      dispatch({
        type: _types.Types.REGISTER_SUCCESS
      });
      dispatch({
        type: _types.Types.SET_MESSAGE,
        payload: response.data.message
      });
      return Promise.resolve();
    }, function (error) {
      var message = error.response && error.response.data && error.response.data.message || error.toString();
      dispatch({
        type: _types.Types.REGISTER_FAIL
      });
      dispatch({
        type: _types.Types.SET_MESSAGE,
        payload: message
      });
      return Promise.reject();
    });
  };
};

exports.authActions = authActions;

var login = function login(id, password) {
  return function (dispatch) {
    return _authService.AuthService.login(id, password).then(function (data) {
      dispatch({
        type: _types.Types.LOGIN_SUCCESS,
        payload: {
          user: data
        }
      });
      return Promise.resolve();
    }, function (error) {
      var message = error.response && error.response.data && error.response.data.message || error.message || error.toString();
      dispatch({
        type: _types.Types.LOGIN_FAIL
      });
      dispatch({
        type: _types.Types.SET_MESSAGE,
        payload: message
      });
      return Promise.reject();
    });
  };
};

exports.login = login;

var logout = function logout() {
  return function (dispatch) {
    _authService.AuthService.logout();

    dispatch({
      type: _types.Types.LOGOUT
    });
  };
};

exports.logout = logout;

var _default = new _authService.AuthService();

exports["default"] = _default;