<template>
  <div id="app">
    <header class="fade-in">
      <AppNavbar />
    </header>
    <main class="fade-in">
      <!-- Deja que el contenido del router-view ocupe todo el espacio necesario -->
      <router-view />
    </main>
    <footer class="fade-in">
      <AppFooter />
    </footer>
  </div>
</template>

<script>
import AppNavbar from "./components/App-navbar.vue";
import AppFooter from "./components/App-footer.vue";

export default {
  components: {
    AppNavbar,
    AppFooter,
  },
};
</script>

<style lang="scss">
@use "./assets/styles/main.scss" as *;

/* Añadimos ajustes */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  z-index: 10; /* Mantén el header por encima del slider */
  position: relative;
}

main {
  flex: 1;
  position: relative; /* Importante para manejar componentes como el slider */
  overflow: hidden; /* Asegura que el contenido no se desborde */
}

footer {
  z-index: 10; /* Mantén el footer por encima del slider */
  position: relative;
}
</style>
