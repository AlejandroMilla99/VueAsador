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
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            'file-loader', // Puede usar file-loader si quieres mantener la funcionalidad de archivo
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true, // para evitar que el loader se ejecute en modo de desarrollo
                disable: process.env.NODE_ENV === 'development', // Deshabilitar en desarrollo
                mozjpeg: {
                  progressive: true,
                  quality: 75, // Ajusta la calidad para JPEG
                },
                optipng: {
                  optimizationLevel: 7, // Nivel de optimización para PNG
                },
                pngquant: {
                  quality: [0.65, 0.90], // Rango de calidad para PNG
                  speed: 4, // Velocidad de la optimización de PNG
                },
                gifsicle: {
                  interlaced: false, // No usar interlaced para GIF
                },
                svgo: {
                  plugins: [
                    { removeViewBox: false }, // No eliminar la caja de vista para SVG
                  ],
                },
              },
            },
          ],
        },
      ],
    },
  },
});
