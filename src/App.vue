<template>
  <div id="app">
    <header class="fade-in">
      <AppNavbar />
    </header>

    <main class="fade-in">
      <Suspense>
        <template #default>
          <!-- Deja que el contenido del router-view ocupe todo el espacio necesario -->
          <router-view />
        </template>
        <template #fallback>
          <!-- Cargador con el logo animado -->
          <div class="spinner">
            <img :src="images.logo" alt="Logo" class="spinner-logo" />
          </div>
        </template>
      </Suspense>
    </main>

    <footer class="fade-in">
      <AppFooter />
    </footer>
  </div>
</template>

<script>
import images from "./assets/images/images.js";  // Importa el archivo images.js

import AppNavbar from "./components/App-navbar.vue";
import AppFooter from "./components/App-footer.vue";

export default {
  components: {
    AppNavbar,
    AppFooter,
  },
  data() {
    return {
      images, // Ahora asignamos images, que contiene el logo
    };
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
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

footer {
  z-index: 10; /* Mantén el footer por encima del slider */
  position: relative;
}

/* Estilos del spinner con animación */
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInOut 2s infinite ease-in-out; /* Aplicar animación */
}

.spinner-logo {
  width: 100px; /* Ajusta el tamaño de tu logo */
  height: auto;
  opacity: 0; /* Inicialmente invisible */
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
