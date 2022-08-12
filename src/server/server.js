/* eslint-disable no-unused-vars */
/**All imports are here */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider} from '@reduxjs/toolkit';
import express from 'express';
import 'isomorphic-fetch';
import path from 'path';
import Html from "../components/Html";
import App from "../components/App";
import Store from '../store/store';

const app = express();


app.use(express.static(path.join(__dirname)));
console.info(app);

app.get ('*', async(request, result)=> {
  const scripts = ['vendor.js', 'client.js'];

  const initialState = {state:{Html}};



  const appMarkup = (
    <Provider Store={Store}>
      <App />
    </Provider>
    
  );
  const html = ReactDOMServer.renderToString(
    <Html
    children={appMarkup}
    scripts={scripts}
    initialState={initialState}
    />
  );
  result.send(`<!document html>${html}`);
  
 

});
app.listen(3000, () => console.log('Its My Favourite is live on Port 3000'
));

