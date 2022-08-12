import React from 'react';
import ReactDOM, {hydrate} from 'react-dom';
import { configureStore} from '@reduxjs/toolkit';
import {fetchFavourites} from './actions';


import {rootReducer} from "./reducers/index";

import {Provider} from 'react-redux';

import {App}  from './App';

const store = configureStore(rootReducer, {...window.__APP_STATE}, fetchFavourites);
console.info({...window.__APP_STATE});
ReactDOM.hydrate(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('app')
);