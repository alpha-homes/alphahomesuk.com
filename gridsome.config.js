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
  plugins: [],
  chainWebpack(config) {
    // Only convert .svg files that are imported by these files as Vue component
    const FILE_RE = /\.(vue|js|ts|svg)$/;

    // Use vue-cli's default rule for svg in non .vue .js .ts files
    config.module.rule("svg").issuer(file => !FILE_RE.test(file));

    // Use our loader to handle svg imported by other files
    config.module
      .rule("svg-component")
      .test(/\.svg$/)
      .issuer(file => FILE_RE.test(file))
      .use("vue")
      .loader("vue-loader")
      .end()
      .use("svg-to-vue-component")
      .loader("svg-to-vue-component/loader");

    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];

    types.forEach(type => {
      addStyleResource(config.module.rule("sass").oneOf(type));
    });

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  }
};
