/* eslint-disable no-unused-vars */
import 'core-js';
import * as Express from 'express';
import * as React from 'react';
import {matchRoutes, renderRoutes} from 'react-router-config';
import compression from './helpers/helper';
import configureStore from './store/store';
import Routes from './client/Routes';
import ReactDOM from 'react-dom/client';
import renderer from './helpers/helper';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const app = Express();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function shouldCompress(request, result){
  if(request.headers['x-no-compression'])return
  // eslint-disable-next-line no-unused-expressions
  false;
  return compression.filter(request, result);
}
app.use(
  compression({
    level: 2, //compression levels can be set from 1 - 9
    filter: shouldCompress //set predicate to determine whether there is a need to compress
  })
);
const port = process.env.PORT || 3031
app.use(Express.static('public'));
app.get('*', (request, result) => {
  const params = request.params[0].split('/');
  const id = params[2];
  //Here we create a store before rendering the html
  const store = configureStore();
  //Let's send the store to the renderer
  //Path Check here: 
  const routes = matchRoutes(Routes, request.path);
//Runs all needed load data functions
const promises = routes
.map(({ route }) => {
  return route.loadData ? route.loadData(store, id): null;
})
.map(promise => {
  if(promise){
    return new Promise((resolve, reject)=> {
      promise.then(resolve).catch(resolve);
    });
  }
  return null;
});
//After waiting for it all sends the rendered html to the browser for viewing
Promise.all(promises).then(() => {
  const context = {};
  const content = renderer(request, store, context);
  if(context.PageMiss){
    result.status(404);
  }
  result.send(content);
});
});
app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});
reportWebVitals();
