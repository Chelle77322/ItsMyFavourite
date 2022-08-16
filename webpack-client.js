import { resolve } from 'path';
import merge from 'webpack-merge';
import webpackConfig from './webpack-config.js';
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  mode: 'development',
  // Tell webpack to root file of our server app
  entry: 'index.js',

  // Tell webpack where to put output file
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '/build/')
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
  devtool: 'inline-source-map'
};

export default merge(webpackConfig, config);