//**serve -s build -l 3000 */

import * as express from 'express';
import path from 'path';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import * as reducers from './client/reducers';

import Html from './components/Html';
import App from './App';

const app = express();
app.use(express.static(path.join(__dirname, 'favourite/build/index.html')));

app.get('/*', async (request, result) =>
{
  const scripts = ['vendor.js', 'client.js'];
  const initialState = { initialText: 'Welcome to Its My Favourite App Server side'};

  const store = configureStore(reducers, initialState);
  
  const appMarkup = ReactDOMServer.renderToString(

    <Provider store = {store}>
      <App />
    </Provider>
  );

const html = ReactDOMServer.renderToStaticMarkup(
  <Html
  children = {appMarkup}
  scripts = {scripts}
  initialState = {initialState}>
</Html>
);
result.send (`<!DOCTYPE html>${html}`);
});
app.listen(3000, () => console.log("Listening turned on"))