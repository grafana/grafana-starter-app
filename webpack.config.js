module.exports.getWebpackConfig = (config, options) => {
  return {
    ...config,
    externals: [
      ...config.externals,
      'react-router-dom',
    ],
  }
};
