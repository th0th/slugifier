const webpackConfig = require('./webpack.config');

// append custom webpack configuration
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig(webpackConfig);
};
