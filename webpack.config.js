const HtmlWebPackPlugin = require('html-webpack-plugin');
const crypto = require('crypto');
const path = require('path');

function hash(data) {
  return crypto.createHash('md5').update(data).digest("hex");
}

const htmlPlugin = new HtmlWebPackPlugin({
  template: 'example/index.html',
  filename: 'index.html',
});

module.exports = {
  mode: 'development',
  entry: './example/index.tsx',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'example/dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [htmlPlugin],
};
