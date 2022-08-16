import React from 'react';
import {hydrate} from 'react-dom';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import rootReducer from "./reducers/index";

import App from "../components/App";

var state = global.__STATE__;

delete global.__STATE__;
const reducer = combineReducers(rootReducer);

const store = configureStore(reducer, state);
hydrate(
  <Provider store={store} >
    <App />
  </Provider>,
  document.querySelector('#app')
)