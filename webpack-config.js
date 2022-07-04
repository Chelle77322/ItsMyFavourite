import { resolve } from 'path';
import nodeExternals from 'webpack-node-externals';
const common = {
  module: {
    rules: [
      {
        test: /\/jsx?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: 'babel-loader',
          options: {
          presets: [
                    '@babel/preset-env'
                    ]
          }
        },
    ]
      },
    
  }

const clientConfig = {
  ...common,
  mode: 'development',
  name: 'client',
  target: 'web',

  entry: {
    client: [
      '@babel/preset-react',
      '/favourite/src/client/client.js',
    ],
  },
  output: {
    path: resolve(__dirname, '/favourite/build/'),
    
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
    server: ['@babel/preset-react', resolve(__dirname,'server.js')]
  },
  output: {
    path: resolve(__dirname),
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