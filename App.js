import cors from 'cors';
import { urlencoded, json } from 'express-ws';
import {jwt} from './helpers/jwt';
import {errorHandler} from './helpers/error-handler';
import express from 'express'
import routes from "./Routes/index";
import dotenv from 'dotenv';
dotenv.config()

const app = express();
const http = require('http');


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ItsMyFavourite";

app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use(routes, require('./controllers/user.controller'));


app.use(express.static(path.join(__dirname,'/src','index.js')));
if(process.env.NODE_ENV === "production"){
  use(express(__dirname + "/itsmyfavourite/build/"));
  }

app.get("/*", (request, response) => { response.sendFile(path.join(__dirname ,'./index.html')); })

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

mongoose.connect(MONGODB_URI , {
useNewUrlParser: true,
useFindAndModify: false
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

 //**GETS APP AND APPLIES CORS SETTING ETC */
 get('*',cors(),(request, result)=>{
  result.set('Access-Control-Allow-Origin', 'http://localhost:3000', '*')
  result.sendFile('index.html', { root: "/public/"});
  console.log(result.toString());
});
//** CORS LISTENING */
listen(3032,() => {
  console.log('CORS-enabled web server listening on port 3032')
})
const resulter = Object.create(http.ServerResponse.prototype);
app.get('*', function(request, result){
  resulter.sendFile('index.html', { root: "/public/"});
});

//global error handler
app.use(errorHandler);

// hide powered by express
 app.disable('x-powered-by');
// // start the server
app.listen(process.env.PORT || 3000);


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
  console.log(result);
  console.alert("I got here");
 });

// // Pure client side rendered page
app.get('/client', (request, result) => {
let response = template('Client Side Rendered page')
result.setHeader('Cache-Control', 'build, max-age=604800')
   result.send(response)
   console.log(result);
   console.alert("yeah it's the client");
 });


