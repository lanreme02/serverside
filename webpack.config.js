var webpack = require("webpack");
const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./client.js",
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: "bundle.js",
        sourceMapFilename: 'bundle.map'
    },
    devtool: '#source-map',
    module: {
        rules: [
                {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use:{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                  }
                }

            } 
            ]
    }
}