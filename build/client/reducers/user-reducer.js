"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("../actions/types.cjs");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  user: {
    email: "",
    password: "",
    full_name: "",
    favourites: []
  },
  formSubmitted: false
};

function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types.Types.REGISTER_SUCCESS:
      console.log('register', action.payload.user);
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload.user,
        formSubmitted: false
      });

    case _types.Types.REGISTER_FAIL:
      console.log('register', action.payload.user);
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload.user,
        formSubmitted: false
      });

    case _types.Types.LOGIN_SUCCESS:
      console.log('login', action.payload.user);
      return {
        user: action.payload.user,
        formSubmitted: false
      };

    case _types.Types.LOGIN_FAIL:
      console.log('login', action.payload.user);
      return {
        user: action.payload.user,
        formSubmitted: false
      };

    case _types.Types.FORM_SUBMITTITION_STATUS:
      return _objectSpread(_objectSpread({}, state), {}, {
        formSubmitted: action.payload.status
      });

    default:
      return state;
  }
}

var _default = userReducer;
exports["default"] = _default;