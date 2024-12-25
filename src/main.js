import router from './router';
import { createApp } from 'vue';
import App from './App.vue';

import { createI18n } from 'vue-i18n';
import es from './locales/es.json';
import en from './locales/en.json';

const i18n = createI18n({
  locale: navigator.language.startsWith('es') ? 'es' : 'en', // Idioma por defecto basado en el navegador
  fallbackLocale: 'en',
  messages: {
    es,
    en,
  },
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');