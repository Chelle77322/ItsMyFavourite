import path from 'path';
import clientConfig from "./webpack.client.dev.js";
import serverConfig from "./webpack.server.dev.js";
import WebpackShellPluginNext from 'webpack-shell-plugin-next';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import {merge} from 'webpack-merge';
import process from 'process';
import DotenvWebpackPlugin from 'dotenv-webpack';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name', __dirname);

const paths = {
  BUILD: path.resolve(__dirname, './build/'),
  SRC: path.resolve(__dirname, './src/'),
};

export default (clientConfig, serverConfig) => {
  return merge ([{
  
  mode: 'development',
  entry: {
  javascript:'./src/Index.jsx',
  html: './src/public/index.html',
  },
  output: {
    filename:{ javascript:'index.js',
    html: 'index.html',
    inject: 'body',
    
  },
    path: path.resolve(__dirname, 'build'),
  },
 
  entry:path.resolve(__dirname, './index.jsx'),
  output: {
    path: path.join(__dirname, "build"),
    publicPath: process.env.PUBLIC_URL || "/",
   filename: '[name].bundle.js',
   clean: true
  },
 target: "node", node: {__filename: false},


 devServer: {
    historyApiFallback: true,
    static: {
    directory: path.join(__dirname, '/build'),
  },
 
  },  devtool: false,

  externals: {
          config: JSON.stringify({
          apiUrl: 'http://localhost:8080/src/Routes/api',
         
          whitelist: ['express', 'mongodb', 'body-parser', 'react', 'react-dom, redux', 'mongodb-client-encryption'],
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
         
      })
    },
    plugins: [
     
      new WebpackShellPluginNext({
        onBuildStart:{
          scripts: ['echo "===> Starting the packing with WEBPACK 5.75"'],
          blocking: true,
          parallel: false
        },
        onBuildEnd:{
          scripts: ['npm run start'],
          blocking: false,
          parallel: true
        },
        
      }),
     
     new HtmlWebpackPlugin({
      title: 'itsmyfavourite',
      publicPath: './src/public/',
      favicon: './src/public/favicon.png',
      meta: {
        charset: "utf-8" ,
       rel: "favicon", href: "%PUBLIC_URL%/favicon.png" ,
      name: "viewport" ,content: "width=device-width, initial-scale=1, shrink-to-fit=yes",
      name: "theme-color", content: "#000000",
      name: "description",
        content: "A React-Redux App called Its My Favourite that allows users to login and save all there favourite places using Google Search API",
      name: "keywords",
      content: "Google Places, Favourites, React, Redux, Locations, Shops, Restaurants, Favourite, ItsMyFavourite, API, MichelleHall"},
      inject: 'body',
      inject: 'head',
      template: './public/index.html',
      
        filename: '[name].html',
        chunkFilename: '[id].html',
    }),
      
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
          
        }),
       
      //new webpack.ProvidePlugin({
       // process: 'process/browser',
      //}),
    
    new webpack.DefinePlugin({
      'process.platform': JSON.stringify(process.platform)
  }),
  new DotenvWebpackPlugin({

    path: '.env.developing'
  })

  ],
module:{
rules: [
  // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
  //Loader Rule 1
  { test: /\.js?$|jsx?$|ts?$|tsx.$/, 
  exclude: /node_modules/,
  use: {loader: 'source-map-loader'},
},
  //Loader Rule 2
  {
    test: /\.js?$|jsx?$/,
    exclude: /node_modules/,
    options: { presets: ['@babel/env','@babel/preset-react'] },
    loader:'babel-loader',
    

  },
    //Loader Rule 3
  {
    test: /\.(sass|css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: "postcss-loader",
            options: {
              plugins: 'autoprefixer'
            }
          }
              ],
            },
          
         
        


  //Loader Rule 4
{
  test: /\.(gif|jpe?g|png|ico)$/,
  exclude: /node_modules/,
  use: {loader: 'url-loader?limit=1000000'}
},
  //Loader Rule 5
{
  test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
  exclude: /node_modules/,
  use: {loader: 'url-loader?limit=10000'}
},
  //Loader Rule 6
{
  test: /\.tsx?$/, 
  exclude: /node_modules/,
  use: {loader: "awesome-typescript-loader"}
  },
  {
    type: 'javascript/auto',
    test: /\.json$/,
    use: 'json-loader'
  },
  //Loader Rule 7 to get rid of Snappy error
  {
    test: /\.node$/,
    loader: "node-loader",
  },
  { test: /\.txt$/, use: 'raw-loader' }

],
},

resolve: {
  extensions: ['*', '.js', '.jsx', '.tsx', '.ts.'],
  alias: {
    '~': path.resolve(__dirname, '/src'),
  },
  //fallback: {
    //fs: meta.resolve("fs"),
    //tls: false,
    //net: false,
    //path: meta.resolve("path-browserify"),
   // zlib: false,
   // http: meta.resolve("stream-http"),
    //https: meta.resolve("stream-http"),
   // stream: meta.resolve("stream-browserify"),
    //crypto: meta.resolve("crypto-browserify"),
    //assert: false,
    //async_hooks: false,
   // url: meta.resolve("url/"),
  //},
    },
       
  }])
  //if (process.env.NODE_ENV === 'production') {
  //module.exports devtool = '#source-map'
   // export plugins = (module.exports.plugins || []).concat([
   //   new webpack.DefinePlugin({
   //     'process.env': { NODE_ENV: '"production"' }
   //   }),
   //   new webpack.optimize.UglifyJsPlugin({
   //     sourceMap: true,
   //     compress: { warnings: false }
   //   }),
   //   new webpack.LoaderOptionsPlugin({ minimize: true })
   // ])
  }
  

  //export default config (clientConfig, serverConfig);