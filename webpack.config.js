const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    app: ['./src/index.js'],
  },
  module: {
    rules: [{
      test: /\.js?/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    },
      {
        test: /\.(woff|woff2|eot|ttf|otf|jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              name: '[name].[ext]',
            }
          }
        ]
      },
      {
        test: /\.(svg)$/,
        use: [
          '@svgr/webpack',
          'url-loader'
        ]
      },],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}