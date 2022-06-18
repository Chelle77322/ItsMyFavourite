import '@core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { configureStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import App from './containers/App';
import favouriteApp from './reducers';
import Routes from './Routes';

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

// Create Redux store with state injected by the server
const store = configureStore(favouriteApp, state, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store = {store}>
    <BrowserRouter>
    <div>{renderRoutes(Routes)}</div>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('#app')
)