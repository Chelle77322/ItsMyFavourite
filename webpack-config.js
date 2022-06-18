/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React from 'react';
import * as ReactDOMClient from 'react-dom-client';
import { Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import store  from "./App/store";
import {App}  from "./App/App";
{
module.exports = {
  entry: {
    main: './itsmyfavourite/src/index.js'
  },
  fallback:{
    "url": require.resolve("url/"),
    "zlib": require.resolve("browserify-zlib"),
    "querystring": require.resolve("querystring-es3"),
    "path-browserify": require.resolve("path-browserify"),
    "stream-browserify": require.resolve("stream-browserify"),
    "crypto": require.resolve("crypto")
  },
  devServer: {
    inline: true
  },
  output: {
    filename: 'bundle.js',
    path: './public/scripts'
  },
  devtool: 'sourcemap',
  module: {
    loaders: [
        {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader'
    },
      {
          query: {
           presets: ['es2015', 'react']
        },
        "plugins": [
            "transform-es2015-modules-commonjs",
            "transform-react-constant-elements",
         ]
    },
  {
      test: /\.tsx?$/, 
      exclude: /node_modules/,
      loaders: ["awesome-typescript-loader"]
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        loaders: ["style","css", "sass"]
      },
    ],
    
    
    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" }
  ]
},

  alias: {
    // Other aliases
    redux: require.resolve("redux"),
  }
};
}


// eslint-disable-next-line no-undef
index.js

const container = document.getElementById('app');
const app = ReactDOMClient.createRoot(container);


app.render (
    <React.StrictMode>
    
    <Provider store = {store}>
        <React.StrictMode>
     <BrowserRouter>  
        <App/>
        </BrowserRouter>
        </React.StrictMode>
    </Provider>,
    </React.StrictMode>
   
);

