const webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  entry: "./index",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|\.idea/,
        loader: 'babel-loader',
        query: {presets: ['es2015']}
      },
      {
        test: /\.scss$/,
        exclude: /node_modules|\.idea/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        exclude: /node_modules|\.idea/,
        loader: "raw-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};