import React from 'react';
import {hydrate} from 'react-dom';
import "./index.scss"
import { Provider } from 'react-redux';

import {store, persistor} from "./client/_helpers/store";
import { PersistGate } from 'redux-persist/integration/react'

import {default as App} from "./client/app";
import * as serviceWorker from "./serviceWorker";


hydrate(
    <Provider store = {store}>
        <React.StrictMode>
        <PersistGate loading = {null} persistor={persistor}>
            <App />
            </PersistGate>
        </React.StrictMode>
    </Provider>,
    document.getElementById('#app')
);
serviceWorker.unregister();