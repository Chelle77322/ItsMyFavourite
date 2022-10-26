import React from 'react';
import {hydrate} from 'react-dom';
import "./index.scss"
import { Provider } from 'react-redux';

import {store} from "./client/_helpers/store";
import { PersistGate } from 'redux-persist/integration/react'

import {default as App} from "./client/app";
import * as serviceWorker from "./serviceWorker";


hydrate(
    <Provider store = {store}>
        <React.StrictMode>
        <PersistGate loading = {users} persistor={persistor}>
            <App />
            </PersistGate>
        </React.StrictMode>
    </Provider>,
    document.getElementById('#app')
);
serviceWorker.unregister();