<template>
  <div class="bg-black py-4 px-0 sm:px-8 md:px-16" id="servicos">
    <h1 class="text-[2rem] text-center text-[#ffd700] title-hero pt-6 pb-12">
      Nossos Serviços
    </h1>
    <Carousel
      :value="services"
      :numVisible="4"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="3000"
      :showIndicators="false"
    >
      <template #item="slotProps">
        <div
          class="imagesBox rounded m-0 md:m-2 p-4 bg-white h-full flex flex-col"
        >
          <div class="flex justify-end">
            <Tag
              :value="slotProps.data.categoria"
              :class="tagColor(slotProps.data.categoria)"
              class="mb-2"
            />
          </div>
          <img
            :src="slotProps.data.photo"
            :alt="slotProps.data.serviço"
            class="w-full rounded-md mb-4"
          />
          <div class="flex-grow">
            <h2 class="text-xl font-semibold mb-2">
              {{ slotProps.data.serviço }}
            </h2>
            <p class="text-gray-600 text-justify">
              {{ slotProps.data.descrição }}
            </p>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import services from "../../assets/db/servicos.json";
import Tag from "primevue/tag";
import Carousel from "primevue/carousel";
import { ref } from "vue";

const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);

function tagColor(categoria) {
  switch (categoria) {
    case "Cabelo":
      return "p-tag-info"; // Azul claro
    case "Maquiagem":
      return "p-tag-success"; // Verde
    case "Manicure":
      return "p-tag-warning"; // Amarelo
    case "Unhas":
      return "p-tag-danger"; // Vermelho
    case "Estética":
      return "p-tag-secondary"; // Cinza
    default:
      return "p-tag-primary"; // Azul padrão
  }
}
</script>

<style scoped>
.imagesBox {
  display: flex;
  flex-direction: column;
  height: 100%;
}

@media (max-width: 575px) {
  .imagesBox {
    width: 90%;
    margin-left: 5%; /* Centraliza a div */
    margin-right: 5%; /* Centraliza a div */
  }
}
</style>
