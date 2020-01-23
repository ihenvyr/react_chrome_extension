const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const glob = require("glob");
const PurgecssPlugin = require("purgecss-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, 'src')
};

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
      'webext-redux',
      'redux',
      'redux-thunk',
    ]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "./assets/js/[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ],
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    new MiniCssExtractPlugin({
      filename: "./assets/css/[name].css",
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    }),
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, 'src', 'static'), to: path.resolve(__dirname, 'build') }])
  ],
};
