import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const paths = {
  BUILD: path.resolve(__dirname, '/build'),
  SRC: path.resolve(__dirname, '/src')
 
};
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: paths.BUILD,
    filename: '[name].js',
  },
  devServer: {
    historyApiFallback: true,
  },
externals: {
  // global app config object
  config: JSON.stringify({
      apiUrl: 'http://localhost:3000'
  })
},
target:'node',
resolve: {
  extensions: ['.js', '.jsx']
},

plugins: [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: './index.html',
    favicon: './public/favicon.png'
  })
]
}






//**TEMPORARILY_REMOVED */
// import { resolve} from 'path';
// import nodeExternals from 'webpack-node-externals';
// import {CleanWebpackPlugin} from 'clean-webpack-plugin';
// export const webpack = {
// module: {
//   rules: [
//     { 
//       test: /\/jsx?$/,
//       exclude: /(node_modules|bower_components|public\/)/,
//       rules: 'babel-loader',
//       options: {
//         presets: [
//           '@babel/preset-env',
//           '@babel/preset-react'
//         ]
//       }
//     },
//     {test: /\.(scss\css)$/,
//   rules: 'style-loader!css-loader'}
//   ]
// },
// plugins: [
//   new CleanWebpackPlugin()
// ],
// clientConfig: {
  
//   mode: 'development',
//   name: 'client',
//   target: 'web',
//   entry: {
//     client: [
//       '@babel/preset-react',
//       './src/client/client.js',
//       './build/bundle.js'
//     ],
//   },
//   output: {
//     path: resolve(__dirname, '/build'),
//     filename : '[name].js',
//   },
//   optimization: {
//     splitChunks: {
//       cacheGroups: {
//         vendor: {
//           chunks: 'initial',
//           name: 'vendor',
//           test: module => /node_modules.test/.test(module.resource),
//           enforce: true
//         },
//       },
//     },
//   },
//   devtool: 'cheap-module-source-map',
  
// },
// serverConfig: {
//   mode: 'development',
//   name: 'server',
//   target: 'node',
//   externals: [nodeExternals()],

//   entry: {
//     server: ['@babel/preset-react', resolve(__dirname,'index.js')]
//   },
//   output: {
//     path: resolve(__dirname),
//     filename: 'index.js',
//   },
//   devServer: {
//     historyApiFallback: true
// },
// externals: {
//     // global app config object
//     config: JSON.stringify({
//         apiUrl: 'http://localhost:3000'
//     })
// },
//   module: {
//     rules: [
//       { test: /\.js$/, exclude: /node_modules/, rules: "babel-loader" },
//       { test: /\.(scss|css)$/, loader: 'style-loader!css-loader!' }
//     ]
//   },
//   devtool: 'cheap-module-source-map',
  
//   node: {
//     console: false,
//     global: false,
//     process: false,
//     Buffer: false,
//     __filename: false,
//     __dirname: false,
//   },
// },
// };
