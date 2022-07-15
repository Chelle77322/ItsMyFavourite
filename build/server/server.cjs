'use strict';
import _react from 'react';
var _react2 = _interopRequireDefault(_react);

import _server from 'react-dom/server';
var _server2 = _interopRequireDefault(_server);

import _reactRedux from'react-redux';
import _express from 'express';
var _express2 = _interopRequireDefault(_express);

import ('isomorphic-fetch');
import {getUsers} from '../client/redux/selectors.cjs'

import _store from'../client/redux/store';
var _store2 = _interopRequireDefault(_store);

import _App from'../client/App.js';

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(object) { return object && object.__esModule ? object: {default: object}; }

var app = (0, _express2.default)();

app.use(_express2.default.static(__dirname + '/../'));
app.use(_express2.default.static(__dirname + '/../../data'));

app.get('*', function (request, result){
    var store = (0, _store2.default)();

    var unsubscribe = store.subscribe(function (){var users = (0, _selectors.getUsers)(store.getState());
        if (users !== null && users.length > 0)
        {unsubscribe();
        result.set('Content-Type', 'text/html');
        result.send(
            '\n        <html>\n          <head>\n            <title>App</title>\n            <style>\n              body {\n                font-size: 18px;\n                font-family: Verdana;\n              }\n            </style>\n          </head>\n          <body>\n            <div id="content">'+ _server2.default.renderToString(_react2.default.createElement(_reactRedux.Provider,
                {store: store},
                _react2.default.createElement(_App2.default, null)
                 )) + '</div>\n            <script>\n              window.__APP_STATE = ' + JSON.stringify(store.getState()) + '; \n            </script>\n            <script src="/bundle.js"></script>\n          </body>\n        </html>\n      ');
        }
    });
    _server2.default.renderToString(_react2.default.createElement(
        _reactRedux.Provider, 
        {store: store},
        _react2.default.createElement(_App2.default, null)
        ));
});
app.listen(3000, function () {
    return console.log('Its My Favourite');
});