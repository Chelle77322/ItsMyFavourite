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
  mode: 'development',
  entry:{
    main: 'index.js'
  },
  entry:path.resolve(__dirname, './index.js'),
  output: {
    path: paths.BUILD,
   filename: '[name].js',
  },

devServer: {
 
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '/src/views'),
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
    use: [
      'babel-loader',
    ],
  },

  {
      test: /\.s?css$/,
      exclude: /node_modules/,
      rules: ["style","css", "sass"],
      use:["sass-loader"]
    
  },
  {
    test: /\.(png|jpg|gif)$/,
    use: [
      'file-loader',
    ],
  },
  {
    test: /\.tsx?$/, 
    exclude: /node_modules/,
    rules: ["awesome-typescript-loader"]
    },
],

rules: [
  // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
  { test: /\.js$/, loader: "source-map-loader" }
]
},

//optimization: {
  //minimize: true,
//},
resolve: {
  extensions: ['*', '.js', '.jsx', '.tsx', '.ts.'],
  alias: {
    '~': path.resolve(__dirname, '/src'),
  },
  fallback: {
    fs: false,
    tls: false,
    net: false,
    path: false,
    zlib: false,
    http: false,
    https: false,
    stream: false,
    crypto: false,
    assert: false,
    async_hooks: false,
  },
    },
    // eslint-disable-next-line no-undef    
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










