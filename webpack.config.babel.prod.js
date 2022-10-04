import path from 'path';
import WebpackShellPluginNext from 'webpack-shell-plugin-next';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';
import webpackNodeExternals from 'webpack-node-externals'
 

//import store  from "./src/client/_helpers/store"
//import {App}  from "./App";

const paths = {
  BUILD: path.resolve(__dirname, './build/'),
  SRC: path.resolve(__dirname, './src/'),
};

module.exports = {
  mode: 'production',
 
   entry: ["react-hot-loader/patch", "./index.js"],
  node: {
    __dirname: false
  },
  entry:path.resolve(__dirname, './index.js'),
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "/",
   filename: '[name].js',
  },
  target: "web",

devServer: {
  hot: true,

  historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '/views'),
  },
 
  },  devtool: false,

  externals: {
    //global app config object,
          config: JSON.stringify({
          apiUrl: 'http://localhost:3000/Routes/api',
          express: 'express',
          whitelist: ['express', 'mongodb', 'body-parser', 'react', 'react-dom, redux'],
         
      })
    },
    plugins: [
      new WebpackShellPluginNext({
        onBuildStart:{
          scripts: ['echo "===> Starting packing with WEBPACK 5.7.4"'],
          blocking: true,
          parallel: false
        },
        onBuildEnd:{
          scripts: ['npm run dev'],
          blocking: false,
          parallel: true
        },
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "./views/", "index.html"),
        new: ExtractTextPlugin('style.bundle.sass'),
        
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    
    new webpack.DefinePlugin({
      'process.platform': JSON.stringify(process.platform)
  })

  ],

  module: {
    rules: [
      {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loaders: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        }
      }
    },
  
    {
        test: /\.sass?css$/,
        exclude: /node_modules/,
        rules: ["style","css", "sass"],
        use:["sass-loader"]
      
    },
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
    {
      test: /\.tsx?$/, 
      exclude: /node_modules/,
      rules: ["awesome-typescript-loader"]
      },
  ],
  
  rules: [
    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    { test: /\.js|jsx|ts|tsx.$/, loader: "source-map-loader" },
    
  
  ]
  }, 
  };
  if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
        'process.env': { NODE_ENV: '"production"' }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: { warnings: false }
      }),
      new webpack.LoaderOptionsPlugin({ minimize: true })
    ])
  }
   // eslint-disable-next-line no-undef










