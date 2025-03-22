<template>
  <div class="bg-black py-4 px-0 sm:px-8 md:px-16" id="galeria">
    <h1 class="text-2xl text-center text-yellow-500 pt-6 pb-12">Resultados</h1>
    <Carousel
      :value="galeria"
      :numVisible="4"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="3000"
      :showIndicators="false"
    >
      <template #item="slotProps">
        <div class="rounded m-0 md:m-2 p-4 bg-white h-full flex flex-col">
          <img
            :src="slotProps.data.photo"
            :alt="slotProps.data.titulo"
            class="w-full rounded-md mb-4 flex-grow object-cover"
          />
          <div class="flex-grow">
            <h2 class="text-xl font-semibold mb-2">
              {{ slotProps.data.titulo }}
            </h2>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import galeria from "../../assets/db/galeria.json";
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
</script>

<style scoped>
@media (max-width: 575px) {
  .imagesBox {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
}
</style>
