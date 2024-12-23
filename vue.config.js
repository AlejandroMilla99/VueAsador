const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/VueAsador/' : '/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        // Configuración para usar la API moderna de Sass
        implementation: require('sass'),
        sassOptions: {
          api: 'modern'
        },
        // Cargar tu archivo SCSS globalmente
        additionalData: `@use "@/assets/styles/main.scss" as *;`
      }
    }
  }
});
