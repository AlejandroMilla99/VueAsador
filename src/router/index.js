import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import Reservations from "../views/Reservations.vue";
import Gallery from "../views/Gallery.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/menu", name: "Menu", component: Menu },
    { path: "/reservations", name: "Reservations", component: Reservations },
    { path: "/gallery", name: "Gallery", component: Gallery },
    { path: "/contact", name: "Contact", component: Contact },
    { path: "/about", name: "About", component: About },
  ],
});
