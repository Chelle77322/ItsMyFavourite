import React from 'react';
import {hydrate} from 'react-dom';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {App} from "../../server/components/App"
//import rootReducer from "../client/_reducers";
import store from "../client/_helpers/store"

const store = configureStore(store,window.__PRELOADED_STATE__)

delete window.__PRELOADED_STATE__
hydrate(
  <Provider store ={store}>
    <App />
    </Provider>,
    document.getElementById('#app')

)