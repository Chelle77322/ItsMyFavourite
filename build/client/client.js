"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _store = _interopRequireDefault(require("./redux/store.cjs"));

var _reactRedux = require("react-redux");

var _App = require("./App.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//import { BrowserRouter } from 'react-router-dom';
//import thunk from 'redux-thunk';
//import userReducer from './reducers/index.cjs';
_reactDom["default"].render( /*#__PURE__*/React.createElement(_reactRedux.Provider, {
  store: (0, _store["default"])()
}, /*#__PURE__*/React.createElement(_App.App, null)), document.querySelector('#content')); //const store = configureStore(userReducer,window.__PRELOADED_STATE__,applyMiddleware(thunk))
//delete window.__PRELOADED_STATE__
//hydrate(
//  <Provider store = {store}>
//   <App />
//  </Provider>,
// document.getElementById('root')
//);
//console.log(store);

/* SAVING FOR LATER
import '@core-js';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { configureStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import App from '../App';
import favouriteApp from './reducers';
import Routes from './Routes';

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

// Create Redux store with state injected by the server
const store = configureStore(favouriteApp, state, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store = {store}>
    <BrowserRouter>
    <div>{renderRoutes(Routes)}</div>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('#app')
)*/