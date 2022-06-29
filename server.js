/* eslint-disable no-unused-vars */
/**All imports are here */
import path from 'path';
import  React from 'react';
import { renderToString } from 'ReactDOMServer'
import ReactDOMServer from 'react-dom/server';
import  * as Express from 'express';
import { configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import favouriteApp from './favourite/src/client/reducers';
import * as reducers from './favourite/src/client/reducers';
import Html from './favourite/src/components/Html';
import App from './favourite/src/App';

const app = Express()
const port = process.env.port || 3031

/*if(process.env.NODE_ENV === 'production'){
    use(Express(`${__dirname}/favourite/build/index.html`));
}*/

//Serve static files
app.use(Express.static(path.join(__dirname, '/favourite/build/')));

app.get('*' ,async(request, result) => {
  const scripts = ['vendor.js', 'client.js'];
  const initialState = { initialText: "It's My favourite has been rendered on the server"};
  const store = configureStore(reducers,initialState);
  const appMarkup = ReactDOMServer.renderToString(
    <Provider store = {store}>
      <App  />
    </Provider>
  );
  const html = ReactDOMServer.renderToStaticMarkup(<Html
    children = {appMarkup}
    scripts={scripts}
    initialState={initialState}/>
    );
result.send(`<!doctype html ${html}`);
});

// This is fired every time the server side receives a request
app.use(handleRender)

// We are going to fill these out in the sections to follow

function handleRender(request, result) {
 

  // Create a new Redux store instance
  const { store, html } = renderStore()

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Send the rendered page back to the client
  result.send(renderFullPage(html, preloadedState))
  

  function renderStore() {
    const store = configureStore(favouriteApp)
    console.log(`${store}`);

    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    )
    return { store, html }
  }
}
function renderFullPage(html, preloadedState) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>It's My Favourite</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // https://redux.js.org/usage/server-rendering#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
              /</g,
              '\\u003c'
            )}
          </script>
          <script src="/static/bundle.js"></script>
        </body>
      </html>
      `
  }

app.listen(port)
console.log("Listening on" `${port}`);

