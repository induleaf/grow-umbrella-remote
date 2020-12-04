const {
  withModuleFederation,
  MergeRuntime,
} = require("@module-federation/nextjs-mf");

module.exports = {
    webpack: (config, options) => {
      const { isServer } = options;
      const mfConf = {
        name: "grow-umbrella",
        library: { type: config.output.libraryTarget, name: "grow-umbrella" },
        filename: "static/runtime/remoteEntry.js",
        remotes: {},
        exposes: {
          "./Header": "./components/Header",
        },
        shared: [],
      };
  
      // Configures ModuleFederation and other Webpack properties
      withModuleFederation(config, options, mfConf);
  
      config.plugins.push(new MergeRuntime());
  
      if (!isServer) {
        config.output.publicPath = "http://localhost:3000/_next/";
      }
  
      return config;
    },
  };

  module.exports = {
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales: ["en", "es"],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: "en",
    },
  };
