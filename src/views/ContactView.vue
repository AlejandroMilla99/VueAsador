<template>
  <section class="contact-page section">
    <div class="container">
      <!-- Título -->
      <h1 class="section-title">{{ $t('contact.title') }}</h1>
      
      <!-- Sección de información de contacto -->
      <div class="contact-info">
        <div class="info-item">
          <i class="fas fa-envelope icon"></i>
          <p>{{ $t('contact.mail') }}</p>
          <a href="mailto:info@asadorguadalmina.com">info@asadorguadalmina.com</a>
        </div>
        <div class="info-item">
          <i class="fas fa-phone-alt icon"></i>
          <p>{{ $t('contact.phone') }}</p>
          <a href="tel:+34952883003">+34 952 883 003</a>
        </div>
        <div class="info-item">
          <i class="fas fa-map-marker-alt icon"></i>
          <p>{{ $t('contact.location') }}</p>
          <span class="spanUbi"><a href="https://maps.app.goo.gl/p7NJLk2iAox7TLV47" target="_blank">Centro Comercial Guadalmina III Urb. Guadalmina Alta, Local 3, 29670 San Pedro Alcántara, Málaga</a></span>
        </div>
      </div>

      <!-- Mapa -->
      <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3208.3154236273854!2d-5.0054887825561565!3d36.474097000000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd732a68a1f4c189%3A0xf128cdf1ba1dcd7b!2sRestaurante%20Asador%20Guadalmina!5e0!3m2!1ses!2ses!4v1735564140546!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <!-- Redes Sociales -->
      <div class="social-section">
        <h2 style="margin-top: 20px;">{{ $t('contact.social') }}</h2>
        <div class="social-icons">
          <a href="https://www.facebook.com/@asadorguadalmina/" target="_blank" class="social-icon">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" class="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" class="social-icon">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactView",
};
</script>

<style scoped>

.contact-page {
  text-align: center;
}

.section-title {
  font-size: 29px;
  margin-bottom: 2rem;
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.info-item {
  flex: 1 1 250px;
  text-align: center;
}

.info-item p {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.info-item a {
  color: #FFD700;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.info-item a:hover {
  color: wheat;
}

.icon {
  font-size: 2rem;
  color: wheat;
  margin-bottom: 1rem;
}

p {
  color: wheat;
}

.map-container {
  margin: 2rem auto; /* Centra el mapa */
  border: 2px solid #FFD700;
  border-radius: 8px;
  overflow: hidden;
  max-width: 100%; /* Asegura que no se salga del contenedor */
  
  iframe {
    width: 100%; /* Ajusta el ancho al contenedor */
    height: 450px; /* Mantiene una altura fija */
  }
}

.social-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-icon {
  font-size: 2rem;
  color: #FFD700;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: wheat;
}

.spanUbi {
  width: 260px;
  display: inline-flex;
  color: #FFD700;
}

/* Responsivo */
@media (max-width: 768px) {
  .contact-info {
    flex-direction: column;
    gap: 1.5rem;
  }

  .info-item {
  flex: auto;
}

.map-container {
    width: 90%; /* Ajusta el mapa al 90% del ancho de la pantalla */
    max-width: 400px; /* Define un límite máximo para el ancho */
    margin: 1rem auto; /* Agrega un margen más pequeño en dispositivos móviles */
  }

  .map-container iframe {
    height: 275px; /* Reduce la altura del iframe en móviles */
    width: 275px;
  }
}
</style>
