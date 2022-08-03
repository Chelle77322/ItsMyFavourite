import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore} from '@reduxjs/toolkit';


import {rootReducer} from "./reducers/index";

import {Provider} from 'react-redux';

import App from './App';

const store = configureStore(rootReducer, {...window.__APP_STATE});

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);