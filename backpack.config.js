const ExtraWatchWebpackPlugin = require("extra-watch-webpack-plugin");


module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = ["./src/index.ts"];

    config.resolve = {
      extensions: [".ts", ".js", ".json"]
    };

    config.module.rules.push({
      test: /\.ts$/,
      loader: "ts-loader",
      exclude: /node_modules/
    });
    

    config.plugins.push(
      new ExtraWatchWebpackPlugin({
        files: ["./src/**/*.graphql", "./src/**/*.gql"]
      })
    );

    return config;
  }
};
