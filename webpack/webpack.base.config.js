import { merge }  from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJsPlugin from "uglifyjs-webpack-plugin"
import NodePolyfillPlugin from "node-polyfill-webpack-plugin"
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
      externals:{
        "fs": "commonjs fs",
        "net": "commonjs net",
      },
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
              loader: "babel-loader",
            }
          },
          {
          test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            }
          },
          {
            test: /\.module\.(sa|sc|c)ss$/,
            use: [
              {
              loader:'style-loader',
            
              },
              {
                loader: 'css-loader',
               
              },
              'sass-loader'
            ]
          },
          {
            
            test: /\.(sa|sc|c)ss$/,
            use: [MiniCssExtractPlugin.loader,
  
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
          
          {  test: /\.html$/i,
            loader: "html-loader",
            options: {
              // Disables attributes processing
              sources: false,
            },
          }
        ],
      },
      resolve:{
        fallback:{
          "async_hooks": false
        }
      },
      
         
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: 'index.html'
        }),
        new webpack.DefinePlugin({
       'process.platform': JSON.stringify(process.platform)
        }),
      
      new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
          
        }),
        new NodePolyfillPlugin(),
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
          },})
      ],
      devServer: {
        historyApiFallback: true,
     
    },
  }]);
    };
   export default webpackBaseConfig();