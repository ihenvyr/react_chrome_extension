var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var extractCSS = new ExtractTextPlugin('./build/assets/css/[name].css');
var resolve = require('path').resolve;

module.exports = {
  entry: {
    content: './src/entry.content.js',
    background: './src/entry.background.js',
    options: './src/entry.options.js',
    popup: './src/entry.popup.js',
    vendor: [
      'prop-types',
      'react',
      'react-dom',
      'react-redux',
      'react-chrome-redux',
      'redux',
      'redux-thunk',
      'styled-components',
    ]
  },
  output: {
    filename: "./build/assets/js/[name].js"
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader' },
      { test: /\.scss$/i, loader: extractCSS.extract(['css-loader','sass-loader']) }
    ]
  },
  plugins: [
    extractCSS,
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'build/assets/js/vendor.js' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        unused: true,
        dead_code: true,
        warnings: false
      }
    }),
    new CopyWebpackPlugin([{ from: resolve(__dirname, 'src', 'static'), to: resolve(__dirname, 'build') }])
  ]
};
