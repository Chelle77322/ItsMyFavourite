import qs from 'qs';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from '../client/_reducers/index'
import App from "../components/App";


module.exports = function handleRender(request, result){
  const params = qs.parse(request.query)
  const preloadedState = window.__PRELOADED_STATE__
 const store = configureStore(rootReducer(preloadedState))

 let content = renderToString(
  <Provider store={store} >
     
    <App />
  </Provider>
  );
 const finalState = store.getState()

 result.send(renderFullPage(content, finalState))
}

//import { hydrateRoot } from "react-dom/client";
//import { configureStore } from '@reduxjs/toolkit';
//import { Provider }from 'react-redux';

//import rootReducer from "../src/client/_reducers/index.js";

//const preloadedState = window.__PRELOADED_STATE__

//const clientStore = configureStore({
 // reducer: rootReducer,
 // preloadedState,
//})
//hydrateRoot(
 // document.getElementById('#app'),
  //<Provider store={clientStore}
  //serverState={preloadedState}>

   // <App />
  //</Provider>
//)

