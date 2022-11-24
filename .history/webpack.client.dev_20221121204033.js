 import { resolve } from 'path';
import merge from 'webpack-merge';
import webpackConfig from './webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
 mode: 'development',
// Tell webpack to root file of our server app
  entry: './src/Index.jsx',
  target: "web",

//  Tell webpack where to put output file
   output: {
    filename: 'main.js',
     path: resolve(__dirname, 'build'),
     publicPath: '/build/',
  },
  module: {
    rules: [
       {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
{test: /\.(scss|css)$/,loader: 'style-loader!css-loader!'},
{
  test: /\.(gif|jpe?g|png|ico)$/,
  exclude: /node_modules/,
  loader: 'url-loader?limit=770000'
},
{
  test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
  exclude: /node_modules/,
  loader: 'url-loader?limit=40000'
},
    ],
    
  },
  
plugins:
  [
    new HtmlWebpackPlugin({
    template: `${__dirname}/public/index.html`,
    })
  ],
  devServer: {
    historyApiFallback: true
   },
  externals: {
    config: JSON.stringify({apiUrl: "http://localhost:8080/Routes/api"}),
    externals: [webpackNodeExternals(), mongodbClientEncryption()],
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
    },
    'react-router-dom': {
      root: 'ReactRouterDOM',
      commonjs2: 'react-router-dom',
      commonjs: 'react-router-dom',
      amd: 'react-router-dom',
    },
   }
 };

 export default merge(webpackConfig, config);