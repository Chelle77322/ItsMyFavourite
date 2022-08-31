"use strict";

var _express = _interopRequireDefault(require("express"));

var _express2 = _interopRequireDefault(require("express.Router()"));

var _userService = _interopRequireDefault(require("../../services/user-service.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//setting out the routes useDispatch
_express2["default"].post('/authenticate', authenticate);

_express2["default"].post('/register', register);

_express2["default"].get('/', getAll);

_express2["default"].get('/current', getCurrent);

_express2["default"].get('/:id', getById);

_express2["default"].put('/:id', update);

_express2["default"]["delete"]('/:id', _delete);

module.exports = _express2["default"];

function authenticate(request, result, next) {
  _userService["default"].authenicate(request.body).then(function (user) {
    return user ? result.json(user) : result.status(400).json({
      message: "ID or password is incorrect"
    });
  })["catch"](function (error) {
    return next(error);
  });
}

function register(request, result, next) {
  _userService["default"].create(request.body).then(function () {
    return result.json({});
  })["catch"](function (error) {
    return next(error);
  });
}

function getAll(request, result, next) {
  _userService["default"].getAll().then(function (users) {
    return result.json(users);
  })["catch"](function (error) {
    return next(error);
  });
}

function getCurrent(request, result, next) {
  _userService["default"].getById(request.user.sub).then(function (user) {
    return user ? result.json(user) : result.sendStatus(404);
  })["catch"](function (error) {
    return next(error);
  });
}

function getById(request, result, next) {
  _userService["default"].getByID(request.params.id).then(function (user) {
    return user ? result.json(user) : result.sendStatus(404);
  })["catch"](function (error) {
    return next(error);
  });
}

function update(request, result, next) {
  _userService["default"].update(request.param.id, request.body).then(function () {
    return result.json({});
  })["catch"](function (error) {
    return next(error);
  });
}

function _delete(request, result, next) {
  _userService["default"]["delete"](request.params.id).then(function () {
    return result.json({});
  })["catch"](function (error) {
    return next(error);
  });
}