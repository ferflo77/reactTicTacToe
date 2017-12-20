module.exports = {
  entry: [
    './app/bigSquare.jsx'

  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2016', 'react']
        }
      },
      {
         test: /\.css$/,
         loader: ['style-loader']
      },
      {
         test: /\.css$/,
         loader: ['css-loader']
      }
    ]
  },
  output: {
    filename: 'bundle.js' 
  },
  devServer: {
    historyApiFallback: true
  }
}