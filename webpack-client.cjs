import { resolve } from 'path';//Check Installation
import merge from 'webpack-merge';//Check Installation
import * as webpackConfig from './webpack-config.cjs';

const config = {
  mode: 'development',
  // Tell webpack to root file of our server app
  entry: 'server.js',

  // Tell webpack where to put output file
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '/favourite/build/')
  },
  devtool: 'inline-source-map'
};

export default merge(webpackConfig, config);