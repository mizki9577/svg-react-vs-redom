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
}

// vim: set ts=2 sw=2 et:
