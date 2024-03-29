import React from 'react';
import { renderToString} from 'react-dom/server';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from '@reduxjs/toolkit';
import { renderRoutes } from 'react-router-config';
import {serialize} from 'serialize-javascript';
import { Helmet} from 'react-helmet';
import {Routes} from '../Routes/index.js';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (request, store, context) {
  let content = renderToString(
    <Provider store={store}>
      <BrowserRouter location={request.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </Provider>
  );
  const helmet = Helmet.renderStatic();
  return `<!DOCTYPE html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${serialize(store.getState()).replace(
    /</g,
    '\\u003c'
  )}
                </script>
                <script src="/main.js"></script>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            </body>
    </html>`;
};