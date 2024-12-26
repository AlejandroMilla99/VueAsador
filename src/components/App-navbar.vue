<template>
  <nav class="navbar">
    <!-- Contenedor para el logo y el cambiador de idioma -->
    <div class="logo-language-container">
      <img :src="images.fullLogo" alt="Logo" class="navbarLogo" />
      <div class="language-switcher">
        <button
          :class="{ active: currentLanguage === 'es' }"
          @click="setLanguage('es')"
        >
          ES
        </button>
        <span>|</span>
        <button
          :class="{ active: currentLanguage === 'en' }"
          @click="setLanguage('en')"
        >
          EN
        </button>
      </div>
    </div>

    <!-- Menú normal para dispositivos grandes -->
    <ul class="menu-desktop">
      <li><router-link to="/home">{{ $t('header.home') }}</router-link></li>
      <li><router-link to="/menu">{{ $t('header.menu') }}</router-link></li>
      <li><router-link to="/reservations">{{ $t('header.reservations') }}</router-link></li>
      <li><router-link to="/gallery">{{ $t('header.gallery') }}</router-link></li>
      <li><router-link to="/contact">{{ $t('header.contact') }}</router-link></li>
      <li><router-link to="/about">{{ $t('header.about') }}</router-link></li>
    </ul>

    <!-- Menú móvil -->
    <div class="menu-mobile">
      <button class="explore-button" @click="toggleMenu">
        {{ isMenuOpen ? $t('header.close') : $t('header.explore') }}
      </button>

      <transition name="slide-down">
        <ul v-if="isMenuOpen" class="submenu">
          <li><router-link to="/home">{{ $t('header.home') }}</router-link></li>
          <li><router-link to="/menu">{{ $t('header.menu') }}</router-link></li>
          <li><router-link to="/reservations">{{ $t('header.reservations') }}</router-link></li>
          <li><router-link to="/gallery">{{ $t('header.gallery') }}</router-link></li>
          <li><router-link to="/contact">{{ $t('header.contact') }}</router-link></li>
          <li><router-link to="/about">{{ $t('header.about') }}</router-link></li>
        </ul>
      </transition>
    </div>
  </nav>
</template>

<script>
import images from "../assets/images/images.js";
export default {
  data() {
    return {
      currentLanguage: this.$i18n.locale, // Idioma actual
      isMenuOpen: false, // Estado del menú móvil
      images,
    };
  },
  methods: {
    setLanguage(lang) {
      this.$i18n.locale = lang; // Cambia el idioma
      this.currentLanguage = lang; // Actualiza el idioma activo
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Alterna el estado del menú
    },
  },
};
</script>

<style scoped>
/* Estilos base */
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8b4513;
  padding: 10px 20px;
  flex-direction: row;
}

/* Contenedor del logo y el cambiador de idioma */
.logo-language-container {

}

.navbarLogo {
  height: 135px;
  object-fit: contain;
}

/* Cambiador de idioma */
.language-switcher {
  display: flex;
  align-items: center;
  gap: 5px;
}

.language-switcher button {
  background: none;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.language-switcher .active {
  text-decoration: underline;
}

/* Menú normal para dispositivos grandes */
.menu-desktop {
  list-style: none;
  display: flex;
  gap: 40px;
}

.menu-desktop li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s ease;
}

.menu-desktop li a:hover {
  color: #ffd700;
}

/* Menú móvil */
.menu-mobile {
  display: none;
}

.explore-button {
  background: none;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}

.submenu {
  list-style: none;
  padding: 0;
  margin: 10px 0;
  background-color: #8b4513;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}

.submenu li {
  text-align: center;
  padding: 10px 0;
}

.submenu li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  display: block;
  transition: color 0.3s ease;
}

.submenu li a:hover {
  color: #ffd700;
}

/* Animación del submenú */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: max-height 0.3s ease-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  overflow: hidden;
}

.slide-down-enter-to,
.slide-down-leave-from {
  max-height: 300px; /* Ajusta según el contenido del submenú */
}

/* Reglas responsivas */
@media (max-width: 768px) {

  .navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8b4513;
  padding: 10px 20px;
  flex-direction: column;
}

  .menu-desktop {
    display: none;
  }

  .menu-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .logo-language-container {
    flex-direction: column; /* Cambia la dirección a columna en móvil */
    align-items: center;
  }

  .language-switcher {
    position: static;
    margin-bottom: 10px;
  }
}
</style>
