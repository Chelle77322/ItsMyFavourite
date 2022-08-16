"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactRedux = require("react-redux");

var _configureStore = _interopRequireDefault(require("../redux/configureStore"));

var _App = _interopRequireDefault(require("../components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function render(initialState) {
  var store = (0, _configureStore["default"])(initialState);
  var content = (0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, "console.info(store=", store, ");", /*#__PURE__*/_react["default"].createElement(_App["default"], null)));
  var preloadedState = store.getState();
  return {
    content: content,
    preloadedState: preloadedState
  };
};