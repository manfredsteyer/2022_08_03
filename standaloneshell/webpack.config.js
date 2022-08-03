const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  // This is not needed for dynamic federation
  // remotes: {
  //   "login": "http://localhost:4201/remoteEntry.mjs",
  // },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
