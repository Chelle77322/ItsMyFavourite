import { merge }  from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import UglifyJsPlugin from 'uglifyjs-webpack-plugin';


import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import  webpack from 'webpack';
 const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name', __dirname);


let webpackBaseConfig = () => {
  return merge([
    {
      mode: 'none',
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
      module: {
      
    
        rules: [
          
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            }
          },
          {
          test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            }
          },
          {
            
              test: /\.(sa|sc|c)ss$/,
              use: [
    
                'css-loader',
                'sass-loader',
                
              ]
            
          },
          {
            test: /\.(jpg|png)$/,
            use: {
              loader: 'url-loader',
            },
          },
        
        ],

       
      },
     resolve:{
      fallback:{
        stream: false,
        url: path.resolve("url/"),
        fs: path.resolve("fs"),
    tls: false,
    net: false,
    path: path.resolve("path-browserify"),
   zlib: false,
   http: path.resolve("stream-http"),
    https: path.resolve("stream-http"),
   stream: path.resolve("stream-browserify"),
    crypto: path.resolve("crypto-browserify"),
    assert: false,
    async_hooks: false
      }
     },
      plugins: [
        new HtmlWebpackPlugin({
          template: './index.html',
          filename: 'index.html'
        }),
        new webpack.DefinePlugin({
       'process.platform': JSON.stringify(process.platform)
        }),
        //new optimize.DedupePlugin(),
       
        new UglifyJsPlugin({
          uglifyOptions: {
            mangle: true,
            warnings: false,
            compress: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                //screw_ie8: true, // no such option in uglify
            },
          },
        }),
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
          
        })
      ],
      devServer: {
        historyApiFallback: true,
        static: {
        directory: path.join(__dirname, 'dist', "js", "server"),
        
      },
    },
  }]);
    };
   export default webpackBaseConfig();