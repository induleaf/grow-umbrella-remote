const {
  withModuleFederation,
  MergeRuntime,
} = require("@module-federation/nextjs-mf");

module.exports = {
    i18n: {
      locales: ["en", "es"],
      defaultLocale: "en",
    },
    webpack: (config, options) => {
      const { isServer } = options;
      const mfConf = {
        name: "growUmbrellaRemote",
        library: { type: config.output.libraryTarget, name: "growUmbrellaRemote" },
        filename: "static/runtime/remoteEntry.js",
        remotes: {

        },
        // Components this module exposes so it can be use by a consumer
        exposes: {
          "./Overview": "./components/Overview",
          "./overviewList": "./components/models/overviewList",
          "./umbrellaLocale": "./content/locale",
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

