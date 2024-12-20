<template>
  <div id="app">
    <AppNavbar />
    <router-view />
    <AppFooter />
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

<style>
@import "./assets/styles/main.scss";
</style>
