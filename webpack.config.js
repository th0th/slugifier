const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  src: path.resolve(__dirname, 'src'),
};

module.exports = {
  devtool: process.env.GATSBY_WEBGAZER_ENVIRONMENT === 'development' ? 'source-map' : false,
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': config.src,
    },
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'robots.txt'),
        to: path.resolve(__dirname, 'public/robots.txt'),
      },
    ]),
  ],
};
