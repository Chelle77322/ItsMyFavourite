
import cors from 'cors';
import pkg from 'express-ws';
import {jwt} from './helpers/jwt.js';

import {errorHandler} from './helpers/error-handler.js';
import {default as express} from 'express'//**causes critical dependency */
import routes from "./Routes/index.js";
import dotenv from 'dotenv';
dotenv.config();
const {urlencoded, json} = pkg;

const app = express();//**Causes criticl dependency */
const http = require('http');
const res = Object.create(http.ServerResponse.prototype);


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ItsMyFavourite/";

app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());//**Causes critical dependency */

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use(routes, require('./controllers/user.controller.js'));

//**Causes critical dependency */
app.use(express.static(path.join(__dirname,'src','index.js')));
if(process.env.NODE_ENV === "production"){
  use(express(__dirname + "/itsmyfavourite/build/"));
  }

app.get("/*", (request, response) => { response.sendFile(path.join(__dirname ,'./index.html')); })

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 8080;
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
 get('*',cors(),(req, res)=>{
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000/src/', '*')
  res.sendFile('index.html', { root: "/views/"});
  console.log(result.toString());
});
//** CORS LISTENING */
listen(3032,() => {
  console.log('CORS-enabled web server listening on port 3032')
})

app.get('*', function(req, res){
  res.sendFile('index.html', { root: "/views/"});
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
app.get('./src/server/', (req, res) => {
 const { preloadedState, content}  = server(initialState)
 const response = template("Server Rendered Page", preloadedState, content)
   res.setHeader('Cache-Control', 'build max-age=604800')
  res.send(response);
  console.log(res);
  console.alert("I got here");
 });

// // Pure client side rendered page
app.get('./src/client/', (req, res) => {
let response = template('Client Side Rendered page')
res.setHeader('Cache-Control', 'build, max-age=604800')
   res.send(response)
   console.log(res);
   console.alert("yeah it's the client");
 });


