<template>
  <div class="card m-auto w-full">
    <Carousel
      :value="slides"
      :numVisible="1"
      :numScroll="1"
      :circular="true"
      :autoplayInterval="3000"
      :showIndicators="true"
      :showNavigators="true"
      class="custom-carousel"
    >
      <template #item="slotProps">
        <div class="flex items-center justify-between">
          <div class="w-[50rem] h-full flex items-start justify-items-start">
            <img
              src="../../assets/images/rita-com-tesouras.png"
              alt="Foto de Rita"
              class="w-full h-full ms-[2rem] pb-[5rem]"
            />
          </div>
          <div
            class="slide flex items-center justify-center text-center relative text-black bg-cover bg-center"
            :style="{ backgroundImage: `url(${slotProps.data.image})` }"
          >
            <div
              class="content p-[20px] rounded-[8px] flex flex-col items-start"
            >
              <h2 class="text-[52px] mb-[20px] title-hero text-start">
                Quer encontrar a sua melhor versão?
              </h2>
              <Button :label="'Agende um horário'" class="cta-button" />
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import heroData from "@/assets/db/hero.json";

const slides = ref([]);

onMounted(() => {
  slides.value = heroData;
});
</script>

<style scoped>
.p-carousel {
  background: linear-gradient(
    45deg,
    rgb(232, 206, 171) 0%,
    rgb(209 163 94) 100%
  );
}

.content {
  width: 50%;
}

.cta-button {
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>
