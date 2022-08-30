import{ resolve } from 'path';
import merge from 'webpack-merge';
import webpackNodeExternals from 'webpack-node-externals';
import webpackConfig from './webpack-config.js';
const CleanWebpackPlugin = require("clean-webpack-plugin")

export const config = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  mode: "production",
  target: 'node',
  // We don't serve bundle.js for server, so we can use dynamic external imports
  externals: [webpackNodeExternals()],

  // Tell webpack the root file of our
  // server application
  entry: 'index.js',
  output: {
    path: resolve(__dirname, '/build/'),
    filename: '[name].js',
    libraryTarget: "commonjs2"
   
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.(scss|css)$/,loader: 'style-loader!css-loader!'}
    ]
  },
  plugins:
  [
    new CleanWebpackPlugin()
  ],
  devServer: {
    historyApiFallback: true
},
externals: {
    // global app config object
    config: JSON.stringify({
        apiUrl: 'http://localhost:3000'
    })
},


  //fallbacks webpack
  fallback: {
    "zlib": require.resolve("browserify-zlib"),
    "querystring": require.resolve("querystring-es3"),
    "path": require.resolve("path-browserify-webpack"),
    "url": require.resolve("url"),
    "stream-browserify": require.resolve("stream-browserify"),
    "crypto": require.resolve("crypto")
  },

  // Tell webpack where to put the output file
  // that is generated

};

export default merge(webpackConfig, config);