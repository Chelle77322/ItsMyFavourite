 import path from 'path';
 import {resolve} from 'path';
 import webpackNodeExternals
 from 'webpack-node-externals';
 //import mongodbClientEncryption from 'mongodb'
import { fileURLToPath } from 'url';
import {merge} from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name', __dirname);

const common = () => {
  return merge ([{
  module: {
    rules: [
      {
        test: /\/jsx?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: 'babel-loader',
          options: {
          presets: [
                    '@babel/preset-env',
                    '@babel/preset-react',
                    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-jsx",
    
                    ]
          }
        },
    ]
      },
    
  }
])
}

let clientConfig = () => {
  return merge ([
    {
      ...common,
 mode: 'development',
// Tell webpack to root file of our server app
name: 'client',
  entry: './src/Index.jsx',
  target: "web",

//  Tell webpack where to put output file
   output: {
   
     path: resolve(__dirname, 'build'),
    
    filename: 'client.js',
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
    config: JSON.stringify({apiUrl: "http://localhost:8080/src/Routes/api"}),
    externals: [webpackNodeExternals()], 
    React: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      esm: 'module'
    },
    'react-router-dom': {
      root: 'ReactRouterDOM',
      commonjs2: 'react-router-dom',
      commonjs: 'react-router-dom',
      amd: 'react-router-dom',
    },
   }
 }
]);
}


export default clientConfig = () => {
  return merge[({
  mode: "development",
  entry: {
    client: path.join(__dirname, "/client/client.jsx"),
  },
  output: {
    path: path.join(__dirname, "/client/"),
    publicPath: "/",
    filename: "client.jsx",
    libraryTarget: "es6",
  },
  target: "web",
  clean: 'true'
})]
}