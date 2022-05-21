//import path from 'path'
import Express from 'express'
import React from 'react'
import { configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import favouriteApp from './reducers'

import App from './containers/App'

const app = Express()
const port = process.env.port || 3031

if(process.env.NODE_ENV === 'production'){
    use(Express(`${__dirname}/favourite/build/`));
}

//Serve static files
app.use('/static', Express.static('static'))

// This is fired every time the server side receives a request
app.use(handleRender)

// We are going to fill these out in the sections to follow
import { renderToString } from 'react-dom/server'
function handleRender(request, result) {
 

  // Create a new Redux store instance
  const store = configureStore(favouriteApp)

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App/>
    </Provider>
  )

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Send the rendered page back to the client
  result.send(renderFullPage(html, preloadedState))
  
}
function renderFullPage(html, preloadedState) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>My Favourites</title>
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

