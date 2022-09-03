import express from 'express'
import path from 'path'
//import template from './src/template'
import server from './src/server/server.js'
import mongoose from 'mongoose';
import data from './data/users.json' assert {type: "json"};
import cors from 'cors';
import jwt from "helpers/jwt";
import bodyParser from "body-parser";
import errorHandler from "helpers/error-handler";
const app = express();
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ItsMyFavourite";

// Serving static files
app.use('/build', express.static(path.resolve(__dirname, 'build')));
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
mongoose.connect(MONGODB_URI , {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

//using JWT to secure api
app.use(jwt());

//api routes
app.use('/users',require('/controllers/user.controller.js'))

//global error handler
app.use(errorHandler);

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3000);

const server = app.listen(PORT, function(){ 
  console.log('Server is listening on port' + PORT);
})

let initialState = {
  isFetching: false,
  apps: data
}
if (!window) {
  require('localstorage-polyfill');
}
console.info(initialState);
// server rendered home page
app.get('/server', (request, result) => {
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