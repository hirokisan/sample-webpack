const path   = require('path');
const merge  = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase      : path.join(__dirname, 'dist'),
    port             : 3000,
    https            : true,
    open             : true,
    publicPath       : '/',
    stats            : 'errors-only',
    watchContentBase : true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        /*
         * use: ran right to left
         * @example 1. css-loader 2. style-loader
         */
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({grid: true})
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            }
          },
          "sass-loader",
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({grid: true})
              ]
            }
          }
        ]
      },
    ]
  },
});
