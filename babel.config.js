module.exports = {
  env: {
    test: {
      plugins: ["@babel/plugin-transform-modules-commonjs"],
    },
  },
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
