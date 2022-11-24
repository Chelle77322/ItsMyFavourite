import path from 'path';
import WebpackShellPluginNext from 'webpack-shell-plugin-next';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


import webpack from 'webpack';

const paths = {
  BUILD: path.resolve(__dirname, './build/'),
  SRC: path.resolve(__dirname, './src/'),
};

module.exports = {
  mode: 'development',
  entry: {
  javascript:'./src/Index.jsx',
  html: './public/index.html',

},
  output: {
    filename:{ javascript:'main.js',
    html: 'main.html',
    inject: 'body',
    
  },
    path: path.resolve(__dirname, 'build'),
  },
 
  entry:path.resolve(__dirname, './index.jsx'),
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "/",
   filename: '[name].js',
  },
  target: "async-node",

devServer: {
    historyApiFallback: true,
    static: {
    directory: path.join(__dirname, 'src/public'),
  },
 
  },  devtool: false,

  externals: {
          config: JSON.stringify({
          apiUrl: 'http://localhost:3000/Routes/api',
         
          whitelist: ['express', 'mongodb', 'body-parser', 'react', 'react-dom, redux', 'mongodb-client-encryption'],
          react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
          }
         
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
      title: 'itsmyfavourite',
      publicPath: './public',
      favicon: './public/favicon.png',
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
       
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    
    new webpack.DefinePlugin({
      'process.platform': JSON.stringify(process.platform)
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
    test: /\.css|.scss?$/,
    exclude: /node_modules/,
   use: [
    {loader: "style-loader"},
    {loader: "css-loader"},
    {loader: "sass-loader"}
   ]

},
  //Loader Rule 4
{
  test: /\.(gif|jpe?g|png|ico)$/,
  exclude: /node_modules/,
  use: {loader: 'url-loader?limit=40000'}
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


],
},

resolve: {
  extensions: ['*', '.js', '.jsx', '.tsx', '.ts.'],
  alias: {
    '~': path.resolve(__dirname, '/src'),
  },
  fallback: {
    fs: import("fs"),
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
 