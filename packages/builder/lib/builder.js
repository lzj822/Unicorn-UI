#!/usr/bin/env node
console.log('123');

const webpack = require('webpack');
const path = require('path');

const config = {
    mode: "production",
    entry: "./lib/index.ts",
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
        }]
    }
}

webpack(config, (err, status) => {
    console.log(err);
});

