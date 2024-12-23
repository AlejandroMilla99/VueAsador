<template>
    <div class="image-slider">
      <!-- Imágenes con transición -->
      <div
        v-for="(image, index) in imagesArray"
        :key="index"
        class="slide"
        :class="{ active: index === currentIndex }"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
  
      <!-- Botón centrado -->
      <button class="reserve-button">
        <i class="fas fa-phone"></i> Reserva Ya
      </button>
    </div>
  </template>
  
  <script>
  import images from "../assets/images/images.js";
  
  export default {
    data() {
      return {
        imagesArray: [images.bg1, images.bg2, images.bg3, images.bg4, images.bg5],
        currentIndex: 0,
      };
    },
    mounted() {
      this.startImageSlider();
    },
    methods: {
      startImageSlider() {
        setInterval(() => {
          this.currentIndex =
            (this.currentIndex + 1) % this.imagesArray.length;
        }, 3000); // Cambia cada 3 segundos
      },
    },
  };
  </script>

<style scoped>
</style>