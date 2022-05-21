import { resolve } from 'path';
import merge from 'webpack-merge';
import initialConfig from './webpack-config';

const config = {
  mode: 'development',
  // Tell webpack to root file of our server app
  entry: './src/client.js',

  // Tell webpack where to put output file
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '/favourite/public')
  },
  devtool: 'inline-source-map'
};

export default merge(initialConfig, config);