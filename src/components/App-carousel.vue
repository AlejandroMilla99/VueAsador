<template>
  <div class="carousel-container">
    <div class="carousel">
      <!-- Botón izquierdo -->
      <button class="carousel-button left-button" @click="rotateLeft">
        <span>&lt;</span>
      </button>

      <!-- Imágenes del carrusel -->
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="getClass(index)"
        @click="handleClick(index)"
      >
        <div class="image-wrapper">
          <img :src="image" alt="gallery image" />
        </div>
      </div>

      <!-- Botón derecho -->
      <button class="carousel-button right-button" @click="rotateRight">
        <span>&gt;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppCarousel",
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    imageCount() {
      return this.images.length;
    },
  },
  methods: {
    getClass(index) {
      const diff = (index - this.currentIndex + this.imageCount) % this.imageCount;
      if (diff === 0) return "carousel-image active"; // Central
      if (diff === 1) return "carousel-image right"; // Derecha
      if (diff === this.imageCount - 1) return "carousel-image left"; // Izquierda
      return "carousel-image hidden"; // Resto (no visibles)
    },
    handleClick(index) {
      const diff = (index - this.currentIndex + this.imageCount) % this.imageCount;
      if (diff === 1) {
        this.rotateRight(); // Simula clic en derecha
      } else if (diff === this.imageCount - 1) {
        this.rotateLeft(); // Simula clic en izquierda
      }
    },
    rotateLeft() {
      this.currentIndex = (this.currentIndex - 1 + this.imageCount) % this.imageCount;
    },
    rotateRight() {
      this.currentIndex = (this.currentIndex + 1) % this.imageCount;
    },
  },
};
</script>

<style scoped>
.carousel-container {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.carousel-image {
  flex: 0 0 60%;
  transform: scale(0.8);
  opacity: 0.5;
  transition: all 1s ease;
  cursor: pointer;
  position: absolute;
}

.image-wrapper {
  width: 100%;
  height: 600px; /* Altura fija para todas las imágenes */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
}

.carousel-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Mantiene las proporciones sin distorsión */
}

.carousel-image.active {
  transform: scale(1.1);
  opacity: 1;
  z-index: 2;
  position: relative;
}

.carousel-image.left {
  transform: translateX(-145%) scale(0.4);
  z-index: 1;
  opacity: 0.5;
}

.carousel-image.right {
  transform: translateX(145%) scale(0.4);
  z-index: 1;
  opacity: 0.5;
}

.carousel-image.hidden {
  display: none;
}

.carousel-button {
  background-color: rgba(139, 69, 19, 0.7);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  padding: 0.5rem 1rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.carousel-button:hover {
  background-color: rgba(139, 69, 19, 0.9);
}

.carousel-button.left-button {
  left: 7%;
}

.carousel-button.right-button {
  right: 7%;
}

@media (max-width: 768px) {
  .carousel-image {
    flex: 0 0 100%;
    transform: scale(1);
    opacity: 1;
    position: relative;
  }
  .image-wrapper {
  width: 100%;
  height: 300px; /* Altura fija para todas las imágenes */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
}
  .carousel-image:not(.active) {
    display: none;
  }
  .carousel-button.left-button {
    left: -4%;
  }
  .carousel-button.right-button {
    right: -4%;
  }

  .carousel-button:hover {
  background-color: rgba(139, 69, 19, 0.5);
}

}
</style>
