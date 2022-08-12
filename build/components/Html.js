"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("../helpers/helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Html(_ref) {
  var children = _ref.children,
      initialState = _ref.initialState,
      scripts = _ref.scripts;
  return /*#__PURE__*/_react["default"].createElement("html", null, /*#__PURE__*/_react["default"].createElement("head", null, /*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/_react["default"].createElement("title", null, "Welcome to It's My Favourite")), /*#__PURE__*/_react["default"].createElement("body", null, /*#__PURE__*/_react["default"].createElement("div", {
    id: "app",
    dangerouslySetInnerHTML: {
      __html: children
    }
  }), initialState && /*#__PURE__*/_react["default"].createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.APP_STATE=".concat(JSON.stringify(initialState))
    }
  }), scripts.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("script", {
      key: index,
      src: item
    });
  })));
}

var _default = Html;
exports["default"] = _default;