import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from '../client/_reducers/index'
import {App} from "./components/App";


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

