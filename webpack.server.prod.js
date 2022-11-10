import path from "path";
import webpackNodeExternals from 'webpack-node-externals';

module.exports = {
    mode: "production",
    entry:{
        server: path.join(__dirname, "src/server/server.js"),
    },
    output: {
        path: path.join(__dirname, "build"),
        publicPath: "./src/public/",
        filename: "[name].js",
        libraryTarget: "commonjs2",
    },
    target: 'node',
    moudle: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        caller: {target: "node"},
                    },
                },
                include: [path.join(__dirname, "src")],
            },
            {
                test: /\.scss$/,
                use: ["css-loader","sass-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["css-loader"],
                exclude: /node_modules/,
            },
        ],
    },
    node: {
        __dirname:false,
        __filename: false,
    },
externals: [webpackNodeExternals()],
};