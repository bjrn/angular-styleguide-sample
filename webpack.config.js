var path = require('path');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname)) + '/app/!html'
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015'],
          cacheDirectory: true
        }
      }
    ]
  },
  plugins: [
    new DashboardPlugin({port:8089})
  ],
  context: __dirname,
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    port: 8088
  }
}
