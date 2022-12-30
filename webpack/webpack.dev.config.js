import {merge}  from 'webpack-merge';
import  webpackBaseConfig  from './webpack.base.config.js';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
 const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name', __dirname);

let developmentConfig = () => {
  return merge([
    {
     mode: 'development',
     entry: path.join(__dirname, "src/js/client", "app.js"),
      output: {
        path: path.join(__dirname, "dist", "js"),
        filename: 'main.js',
        publicPath: "/public/",
       
      }, 
      debug: true,
      devtool: 'source-map',
      
     performance: {
      hints: process.env.NODE_ENV === 'development' ? "warning" : false
    },
  
      plugins: [

       new HtmlWebpackPlugin({
          
         title: 'Book Store',
          filename: '/public/index.html'
          
        }),
        new webpack.DefinePlugin({
          isDevelopment: true,
          'process.env': {
            NODE_ENV: JSON.stringify('development'),
          },
        }),
      ],
    },
  ]);
};
export default developmentConfig = () => merge(webpackBaseConfig(), developmentConfig());