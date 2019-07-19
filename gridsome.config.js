// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "./src/assets/sass/palette.scss"),
        // or if you use scss
        path.resolve(__dirname, "./src/assets/sass/_globals.scss"),
        // you can also use a glob if you'd prefer
        path.resolve(__dirname, "./src/assets/sass/*.sass"),
        // or scss
        path.resolve(__dirname, "./src/assets/sass/*.scss")
      ]
    });
}

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Alpha Homes",
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: "nkx1492d8hke", // required
        accessToken: "chm5AdZS4mmLjwXPoWS9eL4DrpnkfRb6oGspKa2IQL0", // required
        host: "cdn.contentful.com",
        environment: "master",
        typeName: "Contentful"
      }
    }
  ],
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    config.mode("development");
    types.forEach(type => {
      addStyleResource(config.module.rule("sass").oneOf(type));
    });

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  }
};
