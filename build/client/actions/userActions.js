"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userActions = void 0;

var _constants = require("../constants");

var _services = require("../../services");

var _ = require("./");

var _helpers = require("../../helpers");

var userActions = {
  login: login,
  logout: logout,
  register: register,
  getAll: getAll,
  "delete": _delete
};
exports.userActions = userActions;

function login(id, password, from) {
  return function (dispatch) {
    dispatch(request({
      id: id
    }));

    _services.UserService.login(id, password).then(function (user) {
      dispatch(success(user));

      _helpers.history.push(from);
    }, function (error) {
      dispatch(failure(error.toString()));
      dispatch(_.alertActions.error(error.toString()));
    });
  };

  function request(user) {
    return {
      type: _constants.userConstants.LOGIN_REQUEST,
      user: user
    };
  }

  function success(user) {
    return {
      type: _constants.userConstants.LOGIN_SUCCESS,
      user: user
    };
  }

  function failure(error) {
    return {
      type: _constants.userConstants.LOGIN_FAILURE,
      error: error
    };
  }
}

function logout() {
  _services.UserService.logout();

  return {
    type: _constants.userConstants.LOGOUT
  };
}

function register(user) {
  return function (dispatch) {
    dispatch(request(user));

    _services.UserService.register(user).then(function (user) {
      dispatch(success());

      _helpers.history.push('/login');

      dispatch(_.alertActions.success('Registration successful'));
    }, function (error) {
      dispatch(failure(error.toString()));
      dispatch(_.alertActions.error(error.toString()));
    });
  };

  function request(user) {
    return {
      type: _constants.userConstants.REGISTER_REQUEST,
      user: user
    };
  }

  function success(user) {
    return {
      type: _constants.userConstants.REGISTER_SUCCESS,
      user: user
    };
  }

  function failure(error) {
    return {
      type: _constants.userConstants.REGISTER_FAILURE,
      error: error
    };
  }
}

function getAll() {
  return function (dispatch) {
    dispatch(request());

    _services.UserService.getAll().then(function (users) {
      return dispatch(success(users));
    }, function (error) {
      return dispatch(failure(error.toString()));
    });
  };

  function request() {
    return {
      type: _constants.userConstants.GETALL_REQUEST
    };
  }

  function success(users) {
    return {
      type: _constants.userConstants.GETALL_SUCCESS,
      users: users
    };
  }

  function failure(error) {
    return {
      type: _constants.userConstants.GETALL_FAILURE,
      error: error
    };
  }
}

function _delete(id) {
  return function (dispatch) {
    dispatch(request(id));

    _services.UserService["delete"](id).then(function (user) {
      return dispatch(success(id));
    }, function (error) {
      return dispatch(failure(id, error.toString()));
    });
  };

  function request(id) {
    return {
      type: _constants.userConstants.DELETE_REQUEST,
      id: id
    };
  }

  function success(id) {
    return {
      type: _constants.userConstants.DELETE_SUCCESS,
      id: id
    };
  }

  function failure(id, error) {
    return {
      type: _constants.userConstants.DELETE_FAILURE,
      id: id,
      error: error
    };
  }
}