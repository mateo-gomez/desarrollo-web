const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './index.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader'
      },
      {
       test: /\.svg$/,
       loader: 'svg-url-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
