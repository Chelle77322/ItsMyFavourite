import {default as express, urlencoded} from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import connect from "mongoose";

import "./styles/styles.scss";
import ReactDOMServer from 'react-dom/server';
import {Router as Routes, matchPath, useRouteError} from 'react-router-dom';
import { default as SendApp } from "../client/app.jsx";
import routes from "../shared/Routes/index.js";

const PORT = process.env.PORT || 8080
use(urlencoded({extended: true}));
if (process.env.NODE_ENV === "production"){
    use(express(__dirname + "/build"))
}
use(routes);
console.log(routes);
const app = express();

  connect(process.env.MONGODB_URI || "mongodb: //localhost/build/")


app.get( /\.(js|css|map|ico|png|gif)$/, express.static(path.resolve( __dirname, './build')));
app.get('/*', async(req, result)=>{
    result.sendFile(path.join(__dirname, 'build','main.html'),function(err){
       if (err){
          result.status(500).send(err)
        }
    }
    )
})

app.use('/*', async (req, result)=> {
    const matchRoute = Routes.find( route => matchPath(route));

    let componentData = null;
    if(typeof matchRoute.component.fetchData === 'function') {
        componentData = await matchRoute.component.fetchData();
    }

    let mainHTML = fs.readFileSync( path.resolve( __dirname, 'build','main.html'), { 
       encoding: 'utf8' ,
       contentType: 'application/javascript'
       
    });

    let appHTML = ReactDOMServer.renderToString(
        <Routes location = {req.route}
        context = {componentData}>
            <SendApp />
        </Routes>
    );
   mainHTML = mainHTML.replace( '<div id = "root"></div>', `<div id = "root">${ appHTML }</div>`);
   mainHTML = mainHTML.replace(
    'var initial_state = null;',
    `var initial_state = ${JSON.stringify(componentData)};`
   );

   result.contentType('application/javascript');
   result.status (200);

   return result.send( mainHTML);
});

app.listen ('8080', () => {
    console.log('Express server has been started at http://localhost:8080/server/');
});




