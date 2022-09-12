import express from 'express';
const app = express();
import cors from 'cors';
import { urlencoded, json } from 'body-parser';
import {jwt} from './src/helpers/jwt.js';
import {errorHandler} from './src/helpers/error-handler.js';

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./src/controllers/user.controller'));
app.use(express.static(path.join(__dirname,'client','build')));

app.get("/*", (request, response) => { response.sendFile(path.join(__dirname ,'/index.html')); })

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

//**TEMPORARILY_REMOVED */
// import express from 'express'
// import path from 'path'
// //import template from './src/template'
// import server from './src/server/server.js'
// import mongoose from 'mongoose';
// import data from './data/users.json' assert {type: "json"};
// import cors from 'cors';
// import jwt from "helpers/jwt";
// import bodyParser from "body-parser";
// import errorHandler from "helpers/error-handler";
// const app = express();
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ItsMyFavourite";

// // Serving static files
// app.use('/build', express.static(path.resolve(__dirname, 'build')));
// app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
// mongoose.connect(MONGODB_URI , {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());
// app.use(cors());

// //using JWT to secure api
// app.use(jwt());

// //api routes
// app.use('/users',require('/controllers/user.controller.js'))

// //global error handler
// app.use(errorHandler);

// // hide powered by express
// app.disable('x-powered-by');
// // start the server
// app.listen(process.env.PORT || 3000);

// const server = app.listen(PORT, function(){ 
//   console.log('Server is listening on port' + PORT);
// })

// let initialState = {
//   isFetching: false,
//   apps: data
// }
// if (!window) {
//   require('localstorage-polyfill');
// }
// console.info(initialState);
// // server rendered home page
// app.get('/server', (request, result) => {
//   const { preloadedState, content}  = server(initialState)
//   const response = template("Server Rendered Page", preloadedState, content)
//   result.setHeader('Cache-Control', 'build max-age=604800')
//   result.send(response);
// });

// // Pure client side rendered page
// app.get('/client', (request, result) => {
//   let response = template('Client Side Rendered page')
//   result.setHeader('Cache-Control', 'build, max-age=604800')
//   result.send(response)
// });