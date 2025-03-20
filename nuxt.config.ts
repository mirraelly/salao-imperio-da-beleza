// https://nuxt.com/docs/api/configuration/nuxt-config

import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import tailwindcss from "@tailwindcss/vite";
import { definePreset } from "@primeuix/themes";

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{slate.50}",
      100: "{slate.100}",
      200: "{slate.200}",
      300: "{slate.950}",
      500: "{slate.500}",
      600: "{slate.600}",
      700: "{slate.700}",
      800: "{slate.800}",
      900: "{slate.900}",
      950: "{slate.950}",
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
