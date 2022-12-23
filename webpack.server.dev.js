import {resolve} from 'path';
import path from 'path';
import webpackNodeExternals
 from 'webpack-node-externals';
 import {merge} from "webpack-merge";
 import { fileURLToPath } from 'url';
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
  let serverConfig = () => {
    return merge ([{
    ...common,
    mode: 'development',
    name: 'server',
    target: 'node',
    externals: [webpackNodeExternals()],
    entry: {
      server: ['@babel/preset-react', resolve(__dirname, "/src/server/server.js")]
    },
    output: {
      path: resolve(__dirname, 
        '/build'),
        filename: 'server.js',
    },
    module: {
      rules: [
        {test: /\.js$/, exclude: /node_modules/,
      loader: "babel-loader"},
      {test: /\.(scss|css)$/, loader:'ignore=loader'}
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
  }])
  };

export default serverConfig = () => {
  return merge [({
        mode: "development",
    entry: {
        server: path.join(__dirname, "/server/server.js"),
    },
    output: {
        path: path.join(__dirname, "/build"),
        publicPath: "/",
        filename: "[name].js",
        libraryTarget: 'es6',

    },
    target: "node",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_nodules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        caller: {
                            target: "node"
                        },
                    },
                },
                include: [path.join(__dirname,"/src")],
            },
            {
                test: /\.scss$/,
                use: ["css-loader", "sass-loader"],
                exclude: /node_modules/,
            },
        ],
    },
    devtool: "source-map",
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [webpackNodeExternals(), MongoDBNamespace(),
    ],
  })]

 }
