// https://nuxt.com/docs/api/configuration/nuxt-config

import PrimeVue from 'primevue/config';
import Aura from "@primeuix/themes/aura";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-03-06",
  modules: ["@primevue/nuxt-module"],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        darkModeSelector: '.dark',
        cssLayer: false
      },
    },
  },
  css: ['~/assets/css/styles.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
