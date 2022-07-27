import { resolve } from 'path';
import merge from 'webpack-merge';
import webpackConfig from './webpack-config.js';

const config = {
  mode: 'development',
  // Tell webpack to root file of our server app
  entry: 'client.js',

  // Tell webpack where to put output file
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '/build/')
  },
  devtool: 'inline-source-map'
};

export default merge(webpackConfig, config);