var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var htmlConfig = {
  inject: 'body',
  template: 'src/index.html'
}

var config = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
  },
  plugins: [
    new HtmlWebpackPlugin(htmlConfig)
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      include:[path.join(__dirname, 'src')],
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
       presets: ['react', 'es2015'],
       plugins: ['transform-object-rest-spread']
      }
    }, {
        test: /\.css$/,
        include: [path.join(__dirname, 'src')],
        loaders: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}

module.exports = config;
