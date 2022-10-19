 import { resolve } from 'path';
import merge from 'webpack-merge';
import webpackConfig from './webpack-config';
 CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
 mode: 'development',
// Tell webpack to root file of our server app
  entry: './src/index.js',

//  Tell webpack where to put output file
   output: {
    filename: 'bundle.js',
     path: resolve(__dirname, '/build/')
  },
  module: {
    rules: [
       {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
{test: /\.(scss|css)$/,loader: 'style-loader!css-loader!'},
{
  test: /\.(gif|jpe?g|png|ico)$/,
  exclude: /node_modules/,
  loader: 'url-loader?limit=10000'
},
{
  test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
  exclude: /node_modules/,
  loader: 'url-loader?limit=10000'
},
    ],
    
  },
  
plugins:
  [
    new CleanWebpackPlugin({
    template: './public/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true
   },
  externals: {
    config: JSON.stringify({apiUrl: "http://localhost:3000/api"}),
    externals: [webpackNodeExternals()]
   }
 };

 export default merge(webpackConfig, config);