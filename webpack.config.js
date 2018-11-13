const path = require('path');

module.exports = {
  entry: path.join(__dirname,`./client/index.jsx`),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public'),
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        include: path.join(__dirname, '/client'),
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-0'],
        },
      },
      {
        test: [/\.css$/],
        include: path.join(__dirname, '/client/styles'),
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
};