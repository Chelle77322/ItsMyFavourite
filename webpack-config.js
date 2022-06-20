import { resolve } from 'path';
import nodeExternals from 'webpack-node-externals';
const common = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'core-jsx',
        include: [resolve(__dirname, 'src')],
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
const clientConfig = {
  ...common,
  mode: 'development',
  name: 'client',
  target: 'web',

  entry: {
    client: [
      '@core-jsx',
      './src/client/client.js',
    ],
  },
  output: {
    path: resolve(__dirname, 'build'),
    
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
const serverConfig = {
  ...common,
  mode: 'development',
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],

  entry: {
    server: ['@core-jsx', resolve(__dirname,'server.js')]
  },
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'server.js',
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

      },
    },
  });


export default [clientConfig, serverConfig, webpackConfig];