require('dotenv').config();

module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ["@babel/preset-env", { "modules": false }],
      "@babel/preset-react",
      "@babel/preset-typescript"
    ],
    plugins: [
      ["babel-plugin-react-docgen-typescript", { exclude: "node_modules" }],
      ["module-resolver", {
        "alias": {
          "~/src": "./src",
          "~/styles": "./styles"
        }
      }],
      ["transform-inline-environment-variables"]
    ]
  };
};
