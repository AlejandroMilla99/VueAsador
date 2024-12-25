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
          test: /\.(png|jpe?g|gif|svg|webp)$/i, // Incluye todas las extensiones necesarias
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash:8].[ext]', // Mantiene el nombre original con un hash para evitar colisiones
                outputPath: 'img', // Mueve las imágenes procesadas a la carpeta dist/img
                publicPath: '/VueAsador/img', // Ajusta la ruta pública para GitHub Pages
              },
            },
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
                svgo: {
                  plugins: [
                    { removeViewBox: false },
                  ],
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
