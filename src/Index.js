import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from "./client/_helpers/store.js";

import {createBrowserHistory} from '/helpers/history.js';
import App from "./client/app.js";
import * as serviceWorker from "./serviceWorker.js";
const container = document.getElementById('app');
const app = ReactDOMClient.createRoot(container);

app.render(
<React.StrictMode>
    <Provider store={store}>
        <App history = {createBrowserHistory}/>
    </Provider>
    </React.StrictMode>
    );
    serviceWorker.unregister();