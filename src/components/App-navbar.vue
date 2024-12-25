<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/home">{{ $t('header.home') }}</router-link></li>
      <li><router-link to="/menu">{{ $t('header.menu') }}</router-link></li>
      <li><router-link to="/reservations">{{ $t('header.reservations') }}</router-link></li>
      <li><router-link to="/gallery">{{ $t('header.gallery') }}</router-link></li>
      <li><router-link to="/contact">{{ $t('header.contact') }}</router-link></li>
      <li><router-link to="/about">{{ $t('header.about') }}</router-link></li>
    </ul>
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
  </nav>
</template>

<script>
export default {
  data() {
    return {
      currentLanguage: this.$i18n.locale, // Idioma actual
    };
  },
  methods: {
    setLanguage(lang) {
      this.$i18n.locale = lang; // Cambia el idioma
      this.currentLanguage = lang; // Actualiza el idioma activo
    },
  },
};
</script>
 
<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  background-color: #8b4513;
  padding: 10px;
}
.navbar ul {
  list-style: none;
  display: flex;
  gap: 100px;
}
.navbar li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s ease;
}
.navbar li a:hover {
  color: #ffd700;
}
</style>
