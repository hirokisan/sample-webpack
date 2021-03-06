const path                    = require('path');
const HtmlWebpackPlugin       = require('html-webpack-plugin')
const CleanWebpackPlugin      = require('clean-webpack-plugin');

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
    new CleanWebpackPlugin(['dist', 'src/img/tmp'], {beforeEmit: true}),
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
};
