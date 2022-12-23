/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.scss"
import { Provider } from 'react-redux';
import _  from 'lodash';

import {store} from "./client/_helpers/store.js";
import { PersistGate } from 'redux-persist/integration/react'

import {default as SendApp} from "./client/app.jsx";
import * as serviceWorker from "./serviceWorker.js";
function component(){
const element = document.createElement('root')
element.innerHTML = _.join([['Hello']])
return element;
} 

const root = ReactDOM.hydrateRoot(document.getElementById('root'));
root.render(
   
    <Provider store = {store}>
         <React.StrictMode>
        <PersistGate loading = {store}>
            <SendApp />
            </PersistGate>
            </React.StrictMode>
        
    </Provider>,
    document.body.appendChild(component('root'))
     
   
);
serviceWorker.unregister();