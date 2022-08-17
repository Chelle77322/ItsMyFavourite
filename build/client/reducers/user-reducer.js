"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.users = users;

var _constants = require("../constants");

var _excluded = ["deleting"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function users() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.userConstants.GETALL_REQUEST:
      return {
        loading: true
      };

    case _constants.userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };

    case _constants.userConstants.GETALL_FAILURE:
      return {
        error: action.error
      };

    case _constants.userConstants.DELETE_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items.map(function (user) {
          return user.id === action.id ? _objectSpread(_objectSpread({}, user), {}, {
            deleting: true
          }) : user;
        })
      });

    case _constants.userConstants.DELETE_SUCCESS:
      return {
        items: state.items.filter(function (user) {
          return user.id !== action.id;
        })
      };

    case _constants.userConstants.DELETE_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items.map(function (user) {
          if (user.id === action.id) {
            var deleting = user.deleting,
                userCopy = _objectWithoutProperties(user, _excluded);

            return _objectSpread(_objectSpread({}, userCopy), {}, {
              deleteError: action.error
            });
          }

          return user;
        })
      });

    default:
      return state;
  }
}