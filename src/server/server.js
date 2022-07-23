/* eslint-disable no-unused-vars */
/**All imports are here */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux/redux';
import express from 'express';
import 'isomorphic-fetch';

import { getUsers } from '../client/redux/selectors';
import { configureStore} from '../client/redux/store';

import App from '../client/App';

const app = express();

app.use(express.static(__dirname + '/../'));
app.use(express.static(__dirname + '/../../data'));

app.get('*', (request, result) => {
  const store = configureStore();
  const unsubscribe = store.subscribe(() => {
    const users = getUsers(store.getState());

    if (users !== null && users.length > 0)
    {
      unsubscribe();
      result.set('Content-Type', 'text/html');
      result.send(`
        <html>
          <head>
            <title>App</title>
            <style>
              body {
                font-size: 18px;
                font-family: Verdana;
              }
            </style>
          </head>
          <body>
            <div id="content">${ ReactDOMServer.renderToString(<Provider store={ store }><App /></Provider>) }</div>
            <script>
              window.__APP_STATE = ${ JSON.stringify(store.getState()) };
            </script>
            <script src="/bundle.js></script>
          </body>
        </html>
      `);
    }
  });
  ReactDOMServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

app.listen(3000, () => console.log('Its My Favourite is live on port 3000!'));