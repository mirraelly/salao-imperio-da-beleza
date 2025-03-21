<template>
  <div class="bg-black py-4 px-16" id="servicos">
    <h1 class="text-[2rem] text-center text-[#ffd700] title-hero pt-6 pb-12">
      Nossos Serviços
    </h1>
    <div class="flex flex-wrap items-center justify-center gap-4">
      <div
        v-for="(service, index) in services"
        :key="service.id"
        :class="{
          'w-full sm:w-1/2 md:w-1/3 lg:w-1/4': true,
        }"
      >
        <div
          class="flex flex-col bg-white rounded-md shadow-md p-4 mb-4 h-full"
        >
          <div class="flex justify-end">
            <Tag
              :value="service.categoria"
              :class="tagColor(service.categoria)"
              class="mb-2"
            />
          </div>
          <img
            :src="service.photo"
            :alt="service.serviço"
            class="w-full rounded-md mb-4"
          />
          <div class="flex-grow">
            <h2 class="text-xl font-semibold mb-2">{{ service.serviço }}</h2>
            <p class="text-gray-600 text-justify">{{ service.descrição }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import services from "../../assets/db/servicos.json";
import Tag from "primevue/tag";

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

<style scoped></style>
