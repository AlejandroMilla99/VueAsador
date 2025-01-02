<template>
  <section class="gallery-page section">
    <div class="carousel-container">
      <!-- Sección: Nuestro espacio -->
      <div class="gallery-section">
        <h1 class="section-title">Nuestro espacio</h1>
        <AppCarousel :images="images.space" />
      </div>

      <!-- Sección: Nuestro producto -->
      <div class="gallery-section">
        <h1 class="section-title">Nuestro producto</h1>
        <AppCarousel :images="images.product" />
      </div>

      <!-- Sección: Nuestra gente -->
      <div class="gallery-section">
        <h1 class="section-title">Nuestra gente</h1>
        <AppCarousel :images="images.people" />
      </div>
    </div>
  </section>
</template>

<script>
import AppCarousel from "@/components/App-carousel.vue";
import images from "../assets/images/images.js";

export default {
  name: "GalleryView",
  components: {
    AppCarousel,
  },
  data() {
    return {
      images: {
        space: [images.bg4, images.bg2, images.bg3, images.bg5],
        product: [images.bg4, images.bg2, images.bg3,images.bg5],
        people: [images.bg4, images.bg2, images.bg3, images.bg5],
      },
    };
  },
};
</script>

<style scoped>
.gallery-page {
  text-align: center;
  width: 100%;
}

.carousel-container {
  max-width: auto;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #8b4513;
}

.gallery-section {
  margin-bottom: 3rem;
}
</style>
