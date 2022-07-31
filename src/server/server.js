/* eslint-disable no-unused-vars */
/**All imports are here */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider, configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import express from 'express';
import 'isomorphic-fetch';
import path from 'path';

import { getUsers } from '../client/redux/selectors';

import {reducer} from '../client/reducers';
import Html from "../components/Html";
import App from "../components/App";

const app = express();
const newReducer = combineReducers(reducer);
console.log(newReducer);

app.use(express.static(path.join(__dirname)));

app.get ('*', async(request, result)=> {
  const scripts = ['vendor.js', 'client.js'];

  const initialState = {state:'rendered on the server'};

  const store = configureStore(combineReducers(newReducer),{}, initialState);

  const appMarkup = ReactDOMServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const html = ReactDOMServer.renderToStaticMarkup(
    <Html
    children={appMarkup}
    scripts={scripts}
    initialState={initialState}
    />
  );
  result.send(`<!document html>${html}`);

});
app.listen(3000, () => console.log('Its My Favourite is live on Port 3000'
));



