var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var extractCSS = new ExtractTextPlugin('./build/content.css');
var resolve = require('path').resolve;

module.exports = {
  entry: {
    content: './src/content.js',
    background: './src/background.js',
    options: './src/options.js',
    popup: './src/popup.js'
  },
  output: {
    filename: "./build/[name].js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader' },
      { test: /\.scss$/i, loader: extractCSS.extract(['css','sass']) }
    ]
  },
  plugins: [
    extractCSS,
    new CopyWebpackPlugin([
      { from: resolve(__dirname, 'src', 'static'), to: resolve(__dirname, 'build') }
    ])
  ]
};
