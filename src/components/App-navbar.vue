<template>
  <nav class="navbar">
    <!-- Contenedor para el logo y el cambiador de idioma -->
    <img :src="images.fullLogo" alt="Logo" class="navbarLogo" />

    <div class="logo-language-container">
      <!-- Menú normal para dispositivos grandes -->
      <ul class="menu-desktop">
        <li><router-link to="/home">{{ $t('header.home') }}</router-link></li>
        <li><router-link to="/menu">{{ $t('header.menu') }}</router-link></li>
        <li><router-link to="/reservations">{{ $t('header.reservations') }}</router-link></li>
        <li><router-link to="/gallery">{{ $t('header.gallery') }}</router-link></li>
        <li><router-link to="/contact">{{ $t('header.contact') }}</router-link></li>
        <li><router-link to="/about">{{ $t('header.about') }}</router-link></li>
      </ul>
    </div>

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

    <!-- Menú móvil -->
    <div class="menu-mobile">
      <button class="explore-button" @click="toggleMenu">
        {{ $t('header.explore') }}
      </button>
    </div>

    <!-- Wrapper que aparece/desaparece -->
    <div
      v-if="isMenuTransitioning || isMenuOpen"
      :class="['mobile-wrapper', { 'closing': isClosing }]"
      @animationend="onAnimationEnd"
      @click.self="closeMenu"
    >
      <button class="close-button" @click="closeMenu">X</button>
      <ul class="mobile-menu">
        <li><router-link to="/home" @click="closeMenu">{{ $t('header.home') }}</router-link></li>
        <li><router-link to="/menu" @click="closeMenu">{{ $t('header.menu') }}</router-link></li>
        <li><router-link to="/reservations" @click="closeMenu">{{ $t('header.reservations') }}</router-link></li>
        <li><router-link to="/gallery" @click="closeMenu">{{ $t('header.gallery') }}</router-link></li>
        <li><router-link to="/contact" @click="closeMenu">{{ $t('header.contact') }}</router-link></li>
        <li><router-link to="/about" @click="closeMenu">{{ $t('header.about') }}</router-link></li>
      </ul>
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
      isMenuTransitioning: false, // Estado de la transición
      isClosing: false, // Controla la animación de cierre
      images,
    };
  },
  methods: {
    setLanguage(lang) {
      this.$i18n.locale = lang; // Cambia el idioma
      this.currentLanguage = lang; // Actualiza el idioma activo
    },
    toggleMenu() {
      if (this.isMenuOpen) {
        this.closeMenu();
      } else {
        this.isMenuOpen = true;
        this.isMenuTransitioning = true;
        document.body.style.overflow = "hidden"; // Bloquea el scroll
      }
    },
    closeMenu() {
      this.isClosing = true;
      this.isMenuTransitioning = true;
    },
    onAnimationEnd() {
      if (this.isClosing) {
        this.isMenuOpen = false;
        this.isClosing = false;
        document.body.style.overflow = ""; // Reactiva el scroll al finalizar la animación
      }
      this.isMenuTransitioning = false;
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

.logo-language-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbarLogo {
  height: 95px;
  object-fit: contain;
  right: 25%;
  position: relative;
}

/* Cambiador de idioma */
.language-switcher {
  display: flex;
  align-items: center;
  gap: 5px;
  left: 25%;
}

.language-switcher button {
  background: none;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
}

.language-switcher .active {
  text-decoration: underline;
}

/* Menú normal para dispositivos grandes */
.menu-desktop {
  list-style: none;
  display: flex;
  gap: 40px;
  left: auto;
  position: relative;
}

.menu-desktop li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s ease;
  font-size: 16px;
}

ul {
  width: 605px;
}

.menu-desktop li a:hover {
  color: #ffd700;
}

/* Wrapper para dispositivos móviles */
.mobile-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 1000;
  animation: slide-in 0.3s forwards;
  padding: 20px;
}

.mobile-wrapper.closing {
  animation: slide-out 0.3s forwards;
}

.close-button {
  align-self: flex-end;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 20px;
}

.mobile-menu {
  list-style: none;
  text-align: left;
  width: auto;
}

.mobile-menu li {
    width: 220px;
    margin: 10px 0;
    border-bottom: 1px solid white;
    justify-content: center;
    display: flex;
    padding: 7px;
    border-radius: 15px;
}

.mobile-menu li a {
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
}

.mobile-menu li a:hover {
  color: #ffd700;
}

/* Animaciones */
@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.menu-mobile .explore-button {
  display: none;
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

  .menu-mobile .explore-button {
    background: none;
    display: block;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
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
    flex-direction: column;
    align-items: center;
  }

  .language-switcher {
    position: static;
    margin-bottom: 10px;
    left: 0;
  }

  .navbarLogo {
    height: 95px;
    object-fit: contain;
    right: auto;
    right: 0;
  }
}
</style>
