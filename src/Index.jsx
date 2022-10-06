import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';

import store from "./client/_helpers/store";

import {createBrowserHistory} from '../server/helpers/history';
import App from "./client/app";
import * as serviceWorker from "./serviceWorker";
const container = document.getElementById('app');
const app = ReactDOMClient.createRoot(container);

app.render(
<React>
    <Provider store={store}>
        <App history = {createBrowserHistory}/>
    </Provider>
    </React>
    );
    serviceWorker.unregister();