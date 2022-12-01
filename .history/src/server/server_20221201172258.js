/* eslint-disable no-unused-vars */
/* All Imports are listed here */
import React from 'react';
import {renderToString, ReactDOMServerReadableStream} from 'react-dom/server';
import {Provider} from "@reduxjs/toolkit";
import rootReducer from '../client/_reducers/index';
import {getUsers} from "../client/redux/selectors";
import { configureStore } from '../client/_helpers/store';
import express from 'express';
import isomorphic from '@types/isomorphic-fetch';
import App from "./components/App";


module.exports = function handleRender(request, result){
  const preloadedState = window.__PRELOADED_STATE__
 const store = configureStore(rootReducer(preloadedState))

 let content = renderToString(
  <Provider store={store} >
     
    <App />
  </Provider>
  );
 const finalState = store.getState()

 // eslint-disable-next-line no-undef
 result.send(renderFullPage(content, finalState))
}


