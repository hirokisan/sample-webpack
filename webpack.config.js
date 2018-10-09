const path                    = require('path');
const HtmlWebpackPlugin       = require('html-webpack-plugin')
const CleanWebpackPlugin      = require('clean-webpack-plugin');
const MiniCssExtractPlugin    = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    'main': './src/js/main.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
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
          MiniCssExtractPlugin.loader,
          //'style-loader',
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
          //'style-loader',
          MiniCssExtractPlugin.loader,
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
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath : 'img',
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              optipng: {
                enabled: true
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          {
            loader: 'csv-loader',
            options: {
              header: true,
              skipEmptyLines: true
            }
          }
        ],
      },
      {
        test: /\.(yaml|yml)$/,
        use: [
          'json-loader',
          'yaml-loader'
        ]
      },
      /*
       * webpack v4 support json default
      {
        type: 'javascript/auto',
        test: /\.json$/,
        use: [
          'json-loader'
        ]
      },
      */
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      title: 'sample',
      filename: 'hello.html',
      template: '!!pug-loader!src/pug/hello.pug',
      inject: false,
      data: require('./src/json/hello.json')
    }),
    new HtmlWebpackPlugin({
      title: 'sample',
      filename: 'index.html',
      template: 'src/html/index.html',
      inject: 'body'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  }
};
