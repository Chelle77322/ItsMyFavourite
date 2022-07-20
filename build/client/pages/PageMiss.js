"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function PageMiss(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === void 0 ? {} : _ref$staticContext;
  staticContext.notFound = true;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "ui container"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Oh Dear "), /*#__PURE__*/_react["default"].createElement("p", null, "We seemed to have misplaced your favourites"));
}

PageMiss.propTypes = {
  staticContext: _propTypes["default"].objectOf(_propTypes["default"].any)
};
PageMiss.defaultProps = {
  staticContext: {}
}; // eslint-disable-next-line import/no-anonymous-default-export

var _default = {
  component: PageMiss
};
exports["default"] = _default;