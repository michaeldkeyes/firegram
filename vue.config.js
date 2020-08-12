module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/_config.scss"',
      },
    },
  },
};
