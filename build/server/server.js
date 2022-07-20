"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

import { Provider } from "react-redux/redux";

var _express = _interopRequireDefault(require("express"));

import "isomorphic-fetch";

import { getUsers } from "../client/redux/selectors";

import { configureStore } from "../client/redux/store";

var _App = _interopRequireDefault(require("../client/App.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-unused-vars */

/**All imports are here */
var app = (0, _express["default"])();
app.use(_express["default"]["static"](__dirname + '/../'));
app.use(_express["default"]["static"](__dirname + '/../../data'));
app.get('*', function (request, result) {
  var store = (0, configureStore)();
  var unsubscribe = store.subscribe(function () {
    var users = (0, getUsers)(store.getState());

    if (users !== null && users.length > 0) {
      unsubscribe();
      result.set('Content-Type', 'text/html');
      result.send("\n        <html>\n          <head>\n            <title>App</title>\n            <style>\n              body {\n                font-size: 18px;\n                font-family: Verdana;\n              }\n            </style>\n          </head>\n          <body>\n            <div id=\"content\">".concat(_server["default"].renderToString( /*#__PURE__*/_react["default"].createElement(Provider, {
        store: store
      }, /*#__PURE__*/_react["default"].createElement(_App["default"], null))), "</div>\n            <script>\n              window.__APP_STATE = ").concat(JSON.stringify(store.getState()), ";\n            </script>\n            <script src=\"/bundle.js></script>\n          </body>\n        </html>\n      "));
    }
  });

  _server["default"].renderToString( /*#__PURE__*/_react["default"].createElement(Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_App["default"], null)));
});
app.listen(3000, function () {
  return console.log('Its My Favourite is live on port 3000!');
});