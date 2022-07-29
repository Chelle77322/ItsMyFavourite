import { DefinePlugin } from 'webpack';
import { resolve } from 'path';
import merge from 'webpack-merge';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import webpackConfig from './webpack-config.js';
const CleanWebpackPlugin = require("clean-webpack-plugin")

const config = {
  mode: 'production',
  stats: {
    colors: false,
    hash: true,
    timings: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true,
    children: true
  },
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: false
      })
    ]
  },
  // Tell webpack to root file of our server app
  entry: 'index.js',

  // Tell webpack where to put output file
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '/build/')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.(scss|css)$/, loader: 'style-loader!css-loader!'}
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new BundleAnalyzerPlugin(),
    new CompressionPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  plugins: [
    new CleanWebpackPlugin()
  ]
};

export default merge(webpackConfig,config);
