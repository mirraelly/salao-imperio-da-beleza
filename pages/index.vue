<template>
  <div>
    <Cabecalho />
    <Hero />
    <Sobre />
    <Servicos />
    <Depoimentos />
    <Galeria />
    <Equipe />
    <Contato />
    <Localizacao />
    <Rodape />
    <Ballon />
  </div>
</template>

<script setup>
import Cabecalho from "@/components/sections/Cabecalho.vue";
import Hero from "@/components/sections/Hero.vue";
import Sobre from "@/components/sections/Sobre.vue";
import Servicos from "@/components/sections/Servicos.vue";
import Depoimentos from "@/components/sections/Depoimentos.vue";
import Galeria from "@/components/sections/Galeria.vue";
import Equipe from "@/components/sections/Equipe.vue";
import Localizacao from "@/components/sections/Localizacao.vue";
import Contato from "@/components/sections/Contato.vue";
import Rodape from "@/components/sections/Rodape.vue";
import Ballon from "@/components/Ballon.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Raleway:ital,wght@0,500;1,500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Imperial+Script&family=Monsieur+La+Doulaise&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Monsieur+La+Doulaise&display=swap");

:root {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
    "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.title-hero {
  font-family: "Playfair", serif;
}
</style>
