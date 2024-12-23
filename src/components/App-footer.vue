<template>
  <footer class="footer">
    <div class="footer-content container">
      <div class="footer-logo">
        <h2>Asador Guadalmina</h2>
        <p>¡El mejor lugar para disfrutar de un asado inolvidable!</p>
      </div>
      <div class="footer-social">
      </div>
      <div class="footer-contact">
        <p><strong>Contacto:</strong></p>
        <p>Email: contacto@asadorguadalmina.com</p>
        <p>Teléfono: +34 952 883 003</p>
      </div>
      <a href="https://twitter.com" target="_blank" class="social-icon">
          <img :src="images.mail" alt="Email Icon" class="icon" />
      </a>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Asador Guadalmina. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script>
import images from '../assets/images/images.js';

export default {
  data() {
    return {
      images,
    };
  },
};
</script>

<style scoped>
</style>
