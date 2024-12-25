const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/VueAsador/' : '/',
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
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i, // Extensiones soportadas
          type: 'asset/resource', // Usa el nuevo sistema de Webpack 5 para recursos
          generator: {
            filename: 'img/[name].[hash:8][ext]', // Rutas de salida personalizadas
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          enforce: 'pre', // Procesa imágenes antes de que lleguen a otros loaders
          use: [
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true,
                disable: process.env.NODE_ENV === 'development',
                mozjpeg: {
                  progressive: true,
                  quality: 75,
                },
                optipng: {
                  optimizationLevel: 7,
                },
                pngquant: {
                  quality: [0.65, 0.90],
                  speed: 4,
                },
                gifsicle: {
                  interlaced: false,
                },
                webp: {
                  quality: 75,
                },
              },
            },
          ],
        },
      ],
    },
  },
});
