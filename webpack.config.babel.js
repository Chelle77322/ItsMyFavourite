import path from 'path';
import WebpackShellPluginNext from 'webpack-shell-plugin-next';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';
import store  from "./src/client/_helpers/store";
import {App}  from "./App";

const dotEnv = require('dotenv-webpack');
const paths = {
  DIST: path.resolve(__dirname, '/dist'),
  SRC: path.resolve(__dirname, '/src')
 
};
module.exports = {
  mode: 'development',
  entry:{
    main: './src/index.js'

  },
  fallback: { "url": require.resolve("url/")},
  output: {
    path: path.resolve(__dirname, '..', '/views/static/'),
   filename: '[name].js',
    publicPath: './public/scripts',
    libraryTarget: "commonjs2"
  },
  externals: {
  // global app config object
        config: JSON.stringify({
        apiUrl: 'http://localhost:3000/api',
        express: 'express',
        whitelist: ['express', 'mongodb', 'body-parser', 'react', 'react-dom']
    
    })
  },
  devtool: 'sourcemap',
  
  devServer: {
    historyApiFallback: true,
  },

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
      loaders: ["style","css", "sass"]
    
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
preLoaders: [
  // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
  { test: /\.js$/, loader: "source-map-loader" }
]
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
    template: path.join(__dirname, "/public/", "index.html"),
    new: ExtractTextPlugin('style.bundle.sass'),
    
  }),
  new webpack.ProvidePlugin({
    process: 'process/browser',
  }),
  //[new dotEnv()],
  new webpack.DefinePlugin({"process.env": {
    NODE_ENV: JSON.stringify("development"),
  },
}),

],
optimization: {
  minimize: true,
},

resolve: {
  extensions: ['*', '.js', '.jsx', '.tsx', '.ts.'],
  alias: {
    process: "process/browser",
    redux: require.resolve("redux"),
    
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
  // eslint-disable-next-line no-undef
index.js

const container = document.getElementById('#app');
const app = ReactDOMClient.createRoot(container);


app.render (
    <React.StrictMode>
    
    <Provider store = {store}>
        <React.StrictMode>
     <BrowserRouter>  
        <App/>
        </BrowserRouter>
        </React.StrictMode>
    </Provider>,
    </React.StrictMode>
   
);










