import {default as express} from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter, matchPath} from 'react-router-dom';
import { App } from "./src/client/app.jsx";
import routes from "./Routes/index.js";
const app = express();

app.get( /\.(js|css|map|ico|png)$/, express.static(path.resolve( __dirname, 'build')));

app.use('*', async (req, res)=> {
    const matchRoute = routes.find( route => matchPath(req.originalUrl, route));

    let componentData = null;
    if(typeof matchRoute.component.fetchData === 'function') {
        componentData = await matchRoute.component.fetchData();
    }

    let indexHTML = fs.readFileSync( path.resolve( __dirname, 'build/index.html'), { 
       encoding: 'utf8' 
    });

    let appHTML = ReactDOMServer.renderToString(
        <StaticRouter location = {req.originalUrl}
        context = {componentData}>
            <App />
        </StaticRouter>
    );
   indexHTML = indexHTML.replace( '<div id = "app"></div>', `<div id = "app">${ appHTML }</div>`);
   indexHTML = indexHTML.replace(
    'var initial_state = null;',
    `var initial_state = ${JSON.stringify(componentData)};`
   );

   res.contentType('text/html');
   res.status (200);

   return res.send( indexHTML);
});

app.listen ('3000', () => {
    console.log('Express server has been started at http://localhost:3000');
});




// // import {Routes as Router}from 'react-router-dom';
// // import {default as express} from 'express';
// // import cors from 'cors';
// // import pkg from 'express-ws';
// // import {jwt} from './helpers/jwt.js';

// // import {errorHandler} from './helpers/error-handler.js';

// // import routes from "./Routes/index.js";
// // import dotenv from 'dotenv';
// // dotenv.config();

// // const {urlencoded, json} = pkg;
// // const http = require('http');
// // const res = Object.create(http.ServerResponse.prototype);


// // const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ItsMyFavourite/";

// // // serve static assets
// // app.get( /\.(js|css|map|ico)$/, express.static( path.resolve( __dirname, './build' ) ) );

// // app.set("views", path.join(__dirname, "/views"));
// // app.use(urlencoded({ extended: true }));
// // app.use(cors());
// // app.use(express.json());
// // app.use(express.static(path.join(__dirname, "public")));

// // // use JWT auth to secure the api
// // app.use(jwt());

// // // api routes
// // app.use(routes, require('./controllers/user.controller.js'));

// // //**Causes critical dependency */
// // app.use(express.static(path.join(__dirname,'src','index.js')));
// // if(process.env.NODE_ENV === "production"){
// //   use(express(__dirname + "/itsmyfavourite/build/"));
// //   }
// //   else if (process.env.NODE_ENV === "development"){use(express(`${__dirname}/itsmyfavourite/src/`))}

// // app.get("/*", (request, response) => { response.sendFile(path.join(__dirname ,'./index.html')); })

// // // global error handler
// // app.use(errorHandler);

// // // start server
// // const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 8080;
// // const server = app.listen(port, function () {
// //     console.log('Server listening on port ' + port);
// // });

// // mongoose.connect(MONGODB_URI , {
  
// // useNewUrlParser: true,
// // useFindAndModify: false
// // });

// // app.use(bodyParser.urlencoded({extended:true}));
// // app.use(bodyParser.json());
// // app.use(cors());

// //  //**GETS APP AND APPLIES CORS SETTING ETC */
// //  get('*',cors(),(req, res)=>{
// //   res.set('Access-Control-Allow-Origin', 'http://localhost:3000/src/', '*')
// //   res.sendFile('index.html', { root: "/views/"});
// //   console.log(result.toString());
// // });
// // //** CORS LISTENING */
// // listen(3032,() => {
// //   console.log('CORS-enabled web server listening on port 3032')
// // })

// // app.get('*', function(req, res){
// //   res.sendFile('index.html', { root: "/build/"});
// // });

// // //global error handler
// // app.use(errorHandler);

// // // hide powered by express
// //  app.disable('x-powered-by');
// // // // start the server
// // app.listen(process.env.PORT || 3000);


// //  let initialState = {
// //   isFetching: false,
// //   apps: data
// //  }
// //  if (!window) {
// //    require('localstorage-polyfill');
// //  }
// //  console.info(initialState);
// //  // server rendered home page
// // app.get('./src/server/', (req, res) => {
// //  const { preloadedState, content}  = server(initialState)
// //  const response = template("Server Rendered Page", preloadedState, content)
// //    res.setHeader('Cache-Control', 'build max-age=604800')
// //   res.send(response);
// //   console.log(res);
// //   console.alert("I got here");
// //  });

// // // // Pure client side rendered page
// // app.get('./src/client/', (req, res) => {
// // let response = template('Client Side Rendered page')
// // res.setHeader('Cache-Control', 'build, max-age=604800')
// //    res.send(response)
// //    console.log(res);
// //    console.alert("yeah it's the client");
// //  });


