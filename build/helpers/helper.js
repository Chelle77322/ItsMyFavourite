"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactRouterDom = require("react-router-dom");

var _toolkit = require("@reduxjs/toolkit");

var _reactRouterConfig = require("react-router-config");

var _serializeJavascript = require("serialize-javascript");

var _reactHelmet = require("react-helmet");

var _Routes = require("../client/Routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-next-line import/no-anonymous-default-export
function _default(request, store, context) {
  var content = (0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement(_toolkit.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, {
    location: request.path,
    context: context
  }, /*#__PURE__*/_react["default"].createElement("div", null, (0, _reactRouterConfig.renderRoutes)(_Routes.Routes)))));

  var helmet = _reactHelmet.Helmet.renderStatic();

  return "<!DOCTYPE html>\n            <head>\n                ".concat(helmet.title.toString(), "\n                ").concat(helmet.meta.toString(), "\n                ").concat(helmet.link.toString(), "\n                <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n            </head>\n            <body>\n                <div id=\"app\">").concat(content, "</div>\n                <script>\n                    window.__PRELOADED_STATE__ = ").concat((0, _serializeJavascript.serialize)(store.getState()).replace(/</g, "\\u003c"), "\n                </script>\n                <script src=\"/bundle.js\"></script>\n                <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n            </body>\n    </html>");
}

;