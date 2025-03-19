// https://nuxt.com/docs/api/configuration/nuxt-config

import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import tailwindcss from "@tailwindcss/vite";
import { definePreset } from "@primeuix/themes";

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{yellow.50}",
      100: "{yellow.100}",
      200: "{yellow.200}",
      300: "{yellow.300}",
      400: "{yellow.400}",
      500: "{yellow.500}",
      600: "{yellow.600}",
      700: "{yellow.700}",
      800: "{yellow.800}",
      900: "{yellow.900}",
      950: "{yellow.950}",
    },
  },
});

export default defineNuxtConfig({
  compatibilityDate: "2025-03-06",
  modules: ["@primevue/nuxt-module"],
  primevue: {
    options: {
      theme: {
        preset: MyPreset,
        darkModeSelector: ".dark",
        cssLayer: false,
      },
    },
  },
  css: ["~/assets/css/styles.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
