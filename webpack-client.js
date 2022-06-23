import { resolve } from 'path';//Check Installation
import merge from 'webpack-merge';//Check Installation
import * as webpackConfig from './webpack-config';

const config = {
  mode: 'development',
  // Tell webpack to root file of our server app
  entry: './src/index.js',

  // Tell webpack where to put output file
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '/favourite/public')
  },
  devtool: 'inline-source-map'
};

export default merge(webpackConfig, config);