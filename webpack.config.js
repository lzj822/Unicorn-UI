const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
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
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env'],
                ['@babel/preset-react'],
                ['@babel/preset-typescript']
              ]
            }
          }
      }, {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: [
              'style-loader',
              'css-loader',
              'sass-loader'
          ]
      }]
  },
  "externalsPresets": { node: true },
  "externals": [nodeExternals()]
}