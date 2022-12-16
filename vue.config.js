module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @use "sass:math";
          @import "@/assets/scss/reset.scss";
          @import "@/assets/scss/colors.scss";
          @import "@/assets/scss/font.scss";
          @import "@/assets/scss/global.scss";
        `,
      },
    },
  },
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './service',
    },
  },
};
