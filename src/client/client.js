import React from 'react';
import ReactDOM from 'react-dom';
import {hydrate} from 'react-dom';

import { configureStore } from '@reduxjs/toolkit';
import {reducer} from "./reducers/index";

import {Provider} from 'react-redux';

import { App } from './App.jsx';



const store = configureStore(reducer, {...window.__APP_STATE});

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);