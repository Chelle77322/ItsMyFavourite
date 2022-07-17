import { resolve } from 'path';//need to install
import merge from 'webpack-merge';//check to see if installation is needed
import webpackNodeExternals from 'webpack-node-externals';
import * as webpackConfig from './webpack-config';

const config = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: 'node',

  mode: 'production',

  // Tell webpack the root file of our
  // server application
  entry: 'server.js',
  // We don't serve bundle.js for server, so we can use dynamic external imports
  externals: [webpackNodeExternals()],

  //fallbacks webpack
  fallback: {
    "zlib": require.resolve("browserify-zlib"),
    "querystring": require.resolve("querystring-es3"),
    "path": require.resolve("apth-browserify-webpack"),
    "url": require.resolve("url"),
    "stream-browserify": require.resolve("stream-browserify"),
    "crypto": require.resolve("crypto")
  },

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '/favourite/build/')
  }
};

export default merge(webpackConfig, config);