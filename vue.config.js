const path = require("path");

module.exports = {
  pages: {
    index: {
      entry: ["src/main.js","src/test.js"]
    }
  },
  chainWebpack: config => {
    config.module
      .rule("js")
      .test(/\.js$/)
      .use(path.resolve(__dirname, "./src/loaderTest.js"))
        .loader(path.resolve(__dirname, "./src/loaderTest.js"))
        .end();
  }
};
