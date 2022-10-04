import path from 'path';
import WebpackShellPluginNext from 'webpack-shell-plugin-next';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import webpack from 'webpack';

 

//import store  from "./src/client/_helpers/store"
//import {App}  from "./App";

const paths = {
  BUILD: path.resolve(__dirname, './build/'),
  SRC: path.resolve(__dirname, './src/'),
};

module.exports = {
  mode: 'development',
 
   entry: ["react-hot-loader/patch", "./index.js"],
   node: {
    global: false
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
contentBase: "./build",
  historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '/views'),
  },
 
  },  devtool: false,

  externals: {
    //global app config object,
          config: JSON.stringify({
          apiUrl: 'http://localhost:3000/Routes/api',
         
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
     
      new HtmlWebpackPlugin(),
      
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
          
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
      test: /\.(css)$/,
      exclude: /node_modules/,
      rules: ["style","css", "sass"],
      use:["style-loader, css-loader "]
    
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
  { test: /\.js|jsx|ts|tsx.$/, 
  exclude: /node_modules/,}

  

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
    fs: require.resolve("fs"),
    tls: false,
    net: false,
    path: require.resolve("path-browserify"),
    zlib: false,
    http: require.resolve("stream-http"),
    https: require.resolve("stream-http"),
    stream: require.resolve("stream-browserify"),
    crypto: require.resolve("crypto-browserify"),
    assert: false,
    async_hooks: false,
    url: require.resolve("url/"),
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
 











