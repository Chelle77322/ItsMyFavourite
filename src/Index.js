import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from "./client/_helpers/store";

import {createBrowserHistory} from '/helpers/history';
import App from "./client/App";
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