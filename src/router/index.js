import { createRouter, createWebHistory } from 'vue-router';

// En lugar de importar las vistas directamente, las cargamos de forma perezosa:
const HomeView = () => import('../views/HomeView.vue');
const MenuView = () => import('../views/MenuView.vue');
const ReservationsView = () => import('../views/ReservationsView.vue');
const GalleryView = () => import('../views/GalleryView.vue');
const ContactView = () => import('../views/ContactView.vue');
const AboutView = () => import('../views/AboutView.vue');

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
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
