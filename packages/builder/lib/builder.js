#!/usr/bin/env node
console.log('123');

const webpack = require('webpack');
const path = require('path');

const config = {
    mode: "production",
    entry: "./lib/index.tsx",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        path: path.resolve('.', 'dist'),
        filename: "index.bundle.js"
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader'
        }, {
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    }
}

webpack(config, (err, status) => {
    console.log(err, status);
});

