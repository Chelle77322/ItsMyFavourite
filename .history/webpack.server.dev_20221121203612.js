import path from 'path';
import webpackNodeExternals
 from 'webpack-node-externals';

 module.exports = {
    mode: "development",
    entry: {
        server: path.join(__dirname, "/server/server.js"),
    },
    output: {
        path: path.join(__dirname, "/build"),
        publicPath: "/",
        filename: "[name].js",
        libraryTarget: 'commonjs2',

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
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
          },
          'react-router-dom': {
            root: 'ReactRouterDOM',
            commonjs2: 'react-router-dom',
            commonjs: 'react-router-dom',
            amd: 'react-router-dom',
          },],
 };