import {default as express, urlencoded} from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import connect from "mongoose";


import ReactDOMServer from 'react-dom/server';
import {Router as Routes, matchPath} from 'react-router-dom';
import { default as SendApp } from "../../App.jsx";
import routes from "../Routes/index.js";

const PORT = process.env.PORT || 8080
use(urlencoded({extended: true}));
if (process.env.NODE_ENV === "production"){
    use(express(__dirname + "dist"))
}
use(routes);
console.log(routes);
const app = express();
app.use(express.static(path.join(__dirname,'client','build')) )

  connect(process.env.MONGODB_URI || "mongodb: //localhost/itsmyfavourite/")


app.get( /\.(js|css|map|ico|png|gif)$/, express.static(path.resolve( __dirname, 'dist')));
app.get('/*', async(req, result)=>{
    result.sendFile(path.join(__dirname, 'dist','index.html'),function(err){
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

    let mainHTML = fs.readFileSync( path.resolve( __dirname, 'dist','index.html'), { 
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




