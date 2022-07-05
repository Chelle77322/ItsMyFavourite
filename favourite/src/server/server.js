/* eslint-disable no-unused-vars */
/**All imports are here */
import path from 'path';
import  React from 'react';
import { renderToString } from 'ReactDOMServer'
import ReactDOMServer from 'react-dom/server';
import  * as Express from 'express';
import { configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import favouriteApp from '../client/reducers';
import * as App from '../client/App.js';

const app = Express()
const port = process.env.port || 3000


//Serve static files
app.use('/static',Express.static('static'));

// This is fired every time the server side receives a request
app.use(handleRender)

//This function handles the Render

function handleRender(request, result) {
  const store = configureStore(favouriteApp)
  //Renders the component to a string
  const html = renderToString(

    <Provider store = {store}>
      <App />
    </Provider>
  )
  //Gets the initial state from Redux strore
  const preloadedState = store.getState()
  //Sends the rendered page back to the client
  result.send(renderFullPage(html, preloadedState))
  console.log(result);
}

//This function renders the full page from server to client
function renderFullPage(html, preloadedState){
  return `
  <!doctype html>
  <html>
  <head>
  <title>It's My Favourite</title>
  </head>
  <body>
  <div id = "root>${html}</div>
  <script>
  window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g,'\\u003c')}
  </script>
  <script src = "/favourite/build/static/"></script>
  </body>

  </html>`
}


app.listen(port)
console.log(port);

