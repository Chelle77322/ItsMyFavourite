"use strict";

var _client = require("react-dom/client");

var _toolkit = require("@reduxjs/toolkit");

var _reactRedux = require("react-redux");

var _index = _interopRequireDefault(require("./reducers/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var preloadedState = window.__PRELOADED_STATE__;
var clientStore = (0, _toolkit.configureStore)({
  reducer: _index["default"],
  preloadedState: preloadedState
});
(0, _client.hydrateRoot)(document.getElementById('app'), /*#__PURE__*/React.createElement(_reactRedux.Provider, {
  store: clientStore,
  serverState: preloadedState
}, /*#__PURE__*/React.createElement(App, null))); //**OLD CODE KEPT HERE
//import React from 'react';
//import {renderToString} from 'react-dom/server';
//import {Provider} from "react-redux";
//import {configureStore} from "@reduxjs/toolkit"
//import rootReducer from '../client/reducers/index'
//import App from "../components/App";
//module.exports = function render(initialState){
// const store = configureStore(rootReducer(initialState))
// let content = renderToString(
//  <Provider store={store} >
//    <App />
//  </Provider>
// );
// const preloadedState = store.getState()
// return {content, preloadedState};
//}