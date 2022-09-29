import React from 'react';
import {hydrate} from 'react-dom';
import {Provider} from "react-redux";
//import {configureStore} from "@reduxjs/toolkit";
//import {combineReducers} from "redux";
//import rootReducer from "./_reducers/index";
import { store} from "./_helpers/store";

import {App} from "./app.js";



hydrate(
  <Provider store={store} >
    <App />
  </Provider>,
  document.querySelector('app')
)