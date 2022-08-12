"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactHookForm = require("react-hook-form");

var _reactRedux = require("react-redux");

var _userSlice = require("./userSlice");

var _reactHotToast = _interopRequireDefault(require("react-hot-toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

// eslint-disable-next-line no-empty-pattern
var Login = function Login(_ref) {
  _objectDestructuringEmpty(_ref);

  var dispatch = (0, _reactRedux.useDispatch)();
  var history = (0, _reactRouterDom.useNavigate)();

  var _useForm = (0, _reactHookForm.useForm)(),
      signup = _useForm.signup,
      errors = _useForm.errors,
      handleSubmit = _useForm.handleSubmit;

  var _useSelector = (0, _reactRedux.useSelector)(_userSlice.userSelector),
      isFetching = _useSelector.isFetching,
      isSuccess = _useSelector.isSuccess,
      isError = _useSelector.isError,
      errorMessage = _useSelector.errorMessage;

  var onSubmit = function onSubmit(data) {
    dispatch((0, _userSlice.loginUser)(data));
  };

  (0, _react.useEffect)(function () {
    return function () {
      dispatch((0, _userSlice.clearState)());
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (isError) {
      _reactHotToast["default"].error(errorMessage);

      dispatch((0, _userSlice.clearState)());
    }

    if (isSuccess) {
      dispatch((0, _userSlice.clearState)());
      history.push('/');
    }
  }, [isError, isSuccess]);
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "sm:mx-auto sm:w-full sm:max-w-md"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    "class": "mt-6 text-center text-3xl font-extrabold text-gray-900"
  }, "Sign in to your account")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
  }, /*#__PURE__*/_react["default"].createElement("form", {
    className: "space-y-6",
    onSubmit: handleSubmit(onSubmit),
    method: "POST"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    "class": "mt-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "relative"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "relative flex justify-center text-sm"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    "class": "px-2 bg-white text-gray-500"
  }, "Or ", /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "signup"
  }, " Signup")))))))));
};

var _default = Login;
exports["default"] = _default;