import React from 'react';
import {hydrateRoot} from 'react-dom/client';
import "./index.scss"
import { Provider } from 'react-redux';

import {store} from "./client/_helpers/store";
import { PersistGate } from 'redux-persist/integration/react'

import {default as App} from "./client/app";
import * as serviceWorker from "./serviceWorker";


hydrateRoot(document.getElementById('#app'),
    <Provider store = {store}>
        <React.StrictMode>
        <PersistGate loading = {store}>
            <App />
            </PersistGate>
        </React.StrictMode>
    </Provider>
   
);
serviceWorker.unregister();