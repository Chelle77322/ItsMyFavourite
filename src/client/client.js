import React from 'react';
import {hydrate} from 'react-dom';
import configureStore from './redux/store.js';

import {Provider} from 'react-redux';

import { App } from './App.jsx';

const state = window.__STATE__;
delete window.__STATE__;

const store = configureStore(state);
hydrate(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);