module.exports = {
  name: 'host',
  // remotes: {
  //   remote: 'remote@http://localhost:3002/remoteEntry.js',
  // },
  shared: {
    react: {
      singleton: true,
      requiredVersion: '18.1.0',
    },
    'react-dom': {
      singleton: true,
      requiredVersion: '18.1.0',
    },
  },
};
