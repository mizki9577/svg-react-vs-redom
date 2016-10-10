import webpack from 'webpack'

export default {
  entry: {
    react: './react.js',
    redom: './redom.js',
  },
  output: {
    filename: '[name].bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
}

// vim: set ts=2 sw=2 et:
