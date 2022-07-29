import express from 'express'
import path from 'path'
import template from './src/styles/styles'
import ssr from './src/server/server'
import data from './data/users.json'


const app = express()

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/media', express.static(path.resolve(__dirname, 'media')));

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3000);

let initialState = {
  isFetching: false,
  apps: data
}

// server rendered home page
app.get('/', (request, result) => {
  const { preloadedState, content}  = ssr(initialState)
  const response = template("Server Rendered Page", preloadedState, content)
  result.setHeader('Cache-Control', 'assets, max-age=604800')
  result.send(response);
});

// Pure client side rendered page
app.get('/client', (request, result) => {
  let response = template('Client Side Rendered page')
  result.setHeader('Cache-Control', 'assets, max-age=604800')
  result.send(response)
});