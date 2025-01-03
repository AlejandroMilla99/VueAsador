const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/VueAsador' : '/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
        sassOptions: {
          api: 'modern',
        },
        additionalData: `@use "@/assets/styles/main.scss" as *;`,
      },
    },
  }
});
