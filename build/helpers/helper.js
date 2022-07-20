"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _server = require("react-dom/server");

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _reactRouterConfig = require("react-router-config");

var _serializeJavascript = _interopRequireDefault(require("serialize-javascript"));

var _reactHelmet = require("react-helmet");

var _Routes = _interopRequireDefault(require("../client/Routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// eslint-disable-next-line import/no-anonymous-default-export
var _default = function _default(request, store, context) {
  var content = (0, _server.renderToString)( /*#__PURE__*/React.createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, {
    location: request.path,
    context: context
  }, /*#__PURE__*/React.createElement("div", null, (0, _reactRouterConfig.renderRoutes)(_Routes["default"])))));

  var helmet = _reactHelmet.Helmet.renderStatic();

  return "<!DOCTYPE html>\n            <head>\n                ".concat(helmet.title.toString(), "\n                ").concat(helmet.meta.toString(), "\n                ").concat(helmet.link.toString(), "\n                <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n            </head>\n            <body>\n                <div id=\"root\">").concat(content, "</div>\n                <script>\n                    window.__PRELOADED_STATE__ = ").concat((0, _serializeJavascript["default"])(store.getState()).replace(/</g, "\\u003c"), "\n                </script>\n                <script src=\"/bundle.js\"></script>\n                <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n            </body>\n    </html>");
};

exports["default"] = _default;