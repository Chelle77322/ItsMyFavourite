import { resolve } from 'path';
import nodeExternals from 'webpack-node-externals';
const CleanWebpackPlugin = require("clean-webpack-plugin");
export const common = {
  module: {
    rules: [
      {
        test: /\/jsx?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: 'babel-loader',
          options: {
          presets: [
                    '@babel/preset-env',
                    '@babel/preset-react'
                    ]
          }
        },
        {test: /\.(scss\css)$/, 
        loader: 'style-loader!css-loader!'}
    ]
      },
      plugins: [
        new CleanWebpackPlugin()
      ]
    
  }

export const clientConfig = {
  ...common,
  mode: 'development',
  name: 'client',
  target: 'web',

  entry: {
    client: [
      '@babel/preset-react',
      './src/client/client.js',
      './scr/bundle.js'
    ],
  },
  output: {
    path: resolve(__dirname, '/build'),
    
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: module => /node_modules.test/.test(module.resource),
          enforce: true,
        },
      },
    },
  },
  devtool: 'cheap-module-source-map',
  
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
export const serverConfig = {
  ...common,
  mode: 'development',
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],

  entry: {
    server: ['@babel/preset-react', resolve(__dirname,'index.js')]
  },
  output: {
    path: resolve(__dirname),
    filename: 'index.js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.(scss|css)$/, loader: 'style-loader!css-loader!' }
    ]
  },
  devtool: 'cheap-module-source-map',
  
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
};

  mix.webpackConfig({ 
    resolve: {
      fallback: {
         "stream": false,
         "zlib": false,
         "stream": require.resolve("stream-browserify"),
         "zlib": require.resolve("browserify-zlib"),
         "net": require.resolve ("net-browserify"),
         "path": require.resolve("path-browserify"),
         "babel": "babel src -d views",

      },
    },
  });


export default [clientConfig, serverConfig, webpackConfig];