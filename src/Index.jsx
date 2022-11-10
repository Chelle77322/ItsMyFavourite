/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.scss"
import { Provider } from 'react-redux';
import _  from 'lodash';

import {store} from "./client/_helpers/store";
import { PersistGate } from 'redux-persist/integration/react'

import {default as App} from "./client/app";
import * as serviceWorker from "./serviceWorker";
function component(){
const element = document.createElement('div')
element.innerHTML = _.join([['Hello']])
return element;
} 

const root = ReactDOM.hydrateRoot(document.getElementById('root'));
root.render(
   
    <Provider store = {store}>
         <React.StrictMode>
        <PersistGate loading = {store}>
            <App />
            </PersistGate>
            </React.StrictMode>
        
    </Provider>,
    document.body.appendChild(component('root'))
     
   
);
serviceWorker.unregister();