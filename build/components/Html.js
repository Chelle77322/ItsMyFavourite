"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

require("../helpers/helper");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Html(_ref) {
  var children = _ref.children,
      initialState = _ref.initialState,
      scripts = _ref.scripts;
  return /*#__PURE__*/React.createElement("html", null, /*#__PURE__*/React.createElement("head", null, /*#__PURE__*/React.createElement("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/React.createElement("title", null, "Welcome to It's My Favourite \uD83E\uDD98 ")), /*#__PURE__*/React.createElement("body", null, /*#__PURE__*/React.createElement("div", {
    id: "#app",
    dangerouslySetInnerHTML: {
      __html: children
    }
  }), initialState && /*#__PURE__*/React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.APP_STATE=".concat(JSON.stringify(initialState))
    }
  }), scripts.map(function (item, index) {
    return /*#__PURE__*/React.createElement("script", {
      key: index,
      src: item
    });
  })));
}

var _default = Html;
exports["default"] = _default;