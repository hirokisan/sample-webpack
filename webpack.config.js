const path = require('path');

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
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        loader: 'csv-loader',
        options: {
          header: true,
          skipEmptyLines: true
        }
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
