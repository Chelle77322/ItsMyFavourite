import express from 'express'
import path from 'path'
//import template from './src/template'
import server from './src/server/server.js'
import mongoose from 'mongoose';
import data from './data/users.json' assert {type: "json"};

const app = express();
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ItsMyFavourite";

// Serving static files
app.use('/build', express.static(path.resolve(__dirname, 'build')));
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
mongoose.connect(MONGODB_URI , {
  useNewUrlParser: true,
  useFindAndModify: false
});

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3000);

let initialState = {
  isFetching: false,
  apps: data
}
console.info(initialState);
// server rendered home page
app.get('/', (request, result) => {
  const { preloadedState, content}  = server(initialState)
  const response = template("Server Rendered Page", preloadedState, content)
  result.setHeader('Cache-Control', 'build max-age=604800')
  result.send(response);
});

// Pure client side rendered page
app.get('/client', (request, result) => {
  let response = template('Client Side Rendered page')
  result.setHeader('Cache-Control', 'build, max-age=604800')
  result.send(response)
});