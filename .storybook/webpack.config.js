// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
      plugins: [['babel-plugin-typescript-to-proptypes', { comments: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');

  // Return the altered config
  return config;
};
