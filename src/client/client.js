import React from 'react';
import {hydrate} from 'react-dom';
import {Provider} from "react-redux";
import configuredStore from "../redux/configureStore";

import App from "../components/App";

var state = global.__STATE__;

delete global.__STATE__;

const store = configuredStore(state);
hydrate(
  <Provider store={store} >
    <App />
  </Provider>,
  document.querySelector('#app')
)