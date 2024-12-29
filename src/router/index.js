import { createRouter, createWebHistory } from 'vue-router';

// Cargar vistas de forma perezosa
const HomeView = () => import('../views/HomeView.vue');
const MenuView = () => import('../views/MenuView.vue');
const ReservationsView = () => import('../views/ReservationsView.vue');
const GalleryView = () => import('../views/GalleryView.vue');
const ContactView = () => import('../views/ContactView.vue');
const AboutView = () => import('../views/AboutView.vue');

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Usa BASE_URL para manejar rutas automáticamente
  routes: [
    { path: '/', name: 'HomeView', component: HomeView },
    { path: '/home', name: 'Home', component: HomeView },
    { path: '/menu', name: 'Menu', component: MenuView },
    { path: '/reservations', name: 'Reservations', component: ReservationsView },
    { path: '/gallery', name: 'Gallery', component: GalleryView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/about', name: 'About', component: AboutView },
    { path: '/:pathMatch(.*)*', redirect: '/' }, // Redirige cualquier ruta desconocida a la página de inicio
  ],
});

export default router;
