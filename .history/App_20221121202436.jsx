import {default as express} from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';

import "./styles/styles.scss";
import ReactDOMServer from 'react-dom/server';
import {Router as Routes, matchPath} from 'react-router-dom';
import { default as SendApp } from "./src/client/app.jsx";
import routes from "./src/Routes/index.js";
const app = express();

app.get( /\.(js|css|map|ico|png|gif)$/, express.static(path.resolve( __dirname, 'build')));
app.get('/*', async(req, result)=>{
    result.sendFile(path.join(__dirname, './public/index.html'),function(err){
        if (err){
            res.status(500).send(err)
        }
    }
    )
})

app.use('/*', async (req, result)=> {
    const matchRoute = Routes.find( route => matchPath(routes));

    let componentData = null;
    if(typeof matchRoute.component.fetchData === 'function') {
        componentData = await matchRoute.component.fetchData();
    }

    let mainHTML = fs.readFileSync( path.resolve( __dirname, './build/main.html'), { 
       encoding: 'utf8' 
    });

    let appHTML = ReactDOMServer.renderToString(
        <Routes location = {req.originalUrl}
        context = {componentData}>
            <SendApp />
        </Routes>
    );
   mainHTML = mainHTML.replace( '<div id = "root"></div>', `<div id = "root">${ appHTML }</div>`);
   mainHTML = mainHTML.replace(
    'var initial_state = null;',
    `var initial_state = ${JSON.stringify(componentData)};`
   );

   result.contentType('text/html');
   result.status (200);

   return result.send( mainHTML);
});

app.listen ('8080', () => {
    console.log('Express server has been started at http://localhost:8080');
});




