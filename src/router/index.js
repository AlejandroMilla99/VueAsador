// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'; // Importar las nuevas funciones
import HomeView from '../views/HomeView.vue';
import MenuView from '../views/MenuView.vue';
import ReservationsView from '../views/ReservationsView.vue';
import GalleryView from '../views/GalleryView.vue';
import ContactView from '../views/ContactView.vue';
import AboutView from '../views/AboutView.vue';

// Crear el router sin usar Vue.use()
const router = createRouter({
  history: createWebHistory('/'), // Usar createWebHistory para Vue 3
  routes: [
    { path: '', name: 'Home-View', component: HomeView },
    { path: '/', name: 'Home-View', component: HomeView },
    { path: '/home', name: 'Home-View', component: HomeView },
    { path: '/menu', name: 'Menu-View', component: MenuView },
    { path: '/reservations', name: 'Reservations', component: ReservationsView },
    { path: '/gallery', name: 'Gallery', component: GalleryView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/about', name: 'About', component: AboutView },
  ],
});

export default router;
