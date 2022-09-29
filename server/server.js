import { hydrateRoot } from "react-dom/client";
import { configureStore } from '@reduxjs/toolkit';

import { Provider }from 'react-redux';

import rootReducer from "../src/client/_reducers/index.js";

const preloadedState = window.__PRELOADED_STATE__

const clientStore = configureStore({
  reducer: rootReducer,
  preloadedState,
})
hydrateRoot(
  document.getElementById('app'),
  <Provider store={clientStore}
  serverState={preloadedState}>

    <App />
  </Provider>
)

//**OLD CODE KEPT HERE
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