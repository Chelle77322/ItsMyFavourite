import { resolve } from 'path';
import merge from 'webpack-merge';
import webpackNodeExternals from 'webpack-node-externals';
import initialConfig from './webpack.config.js';

const config = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: 'node',

  mode: 'production',

  // Tell webpack the root file of our
  // server application
  entry: 'index.js',
  // We don't serve bundle.js for server, so we can use dynamic external imports
  externals: [webpackNodeExternals()],

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '/favourite/build')
  }
};

export default merge(initialConfig, config);