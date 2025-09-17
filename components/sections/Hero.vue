<template>
  <div
    class="card m-auto w-full md:min-h-[500px] flex items-center"
    id="heroCarousel"
  >
    <Carousel
      :value="slides"
      :numVisible="1"
      :numScroll="1"
      :circular="true"
      :autoplayInterval="40000"
      :showIndicators="true"
      :showNavigators="true"
      class="custom-carousel w-full px-4"
    >
      <template #item="slotProps">
        <div
          class="flex flex-col md:flex-row items-center justify-center md:gap-8 min-h-[500px]"
        >
          <!-- Container da photo -->
          <div class="w-full md:w-[40%] flex items-center justify-center">
            <img
              :src="slotProps.data.photo"
              alt="Imagem do carrossel"
              class="w-auto h-[400px] object-cover hero-image"
            />
          </div>

          <!-- Container do texto -->
          <div
            class="slide flex items-center justify-center text-center relative text-black bg-cover bg-center w-full md:w-[50%]"
          >
            <div
              class="content p-6 md:p-10 rounded-[8px] flex flex-col items-start w-full"
            >
              <h2 class="text-2xl md:text-[40px] mb-4 md:mb-[20px] title-hero">
                {{ slotProps.data.title }}
              </h2>
              <a
                :href="slotProps.data.link"
                class="cta-button p-button"
                :target="
                  slotProps.data.link.startsWith('http') ? '_blank' : null
                "
                :rel="
                  slotProps.data.link.startsWith('http')
                    ? 'noopener noreferrer'
                    : null
                "
              >
                {{ slotProps.data.textButton }}
              </a>
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

.cta-button {
  background-color: #000;
  border: 1px solid black;
  color: #ffd700;
  padding: 10px 20px;
  cursor: pointer;
  font-family: "Playfair", serif;
  font-weight: 900;
  position: relative;
}

.cta-button .p-button-label {
  transition: all 0.3s ease-in-out;
  background-color: black;
}

.p-button:not(:disabled):hover {
  background-color: black !important;
  color: gold !important;
  border: 1px solid black !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.hero-image {
  width: 30rem;
  border-radius: 80px;
  box-shadow: 4px 7px 11px 0px #b8860b5c;
}

.title-hero {
  text-align: justify;
  hyphens: auto;
}

@media (max-width: 768px) {
  .slide {
    padding: 20px;
  }

  .p-carousel[data-v-031d8a61][data-v-031d8a61] {
    padding-top: 8rem;
  }
}

@media (max-width: 500px) {
  .p-carousel[data-v-031d8a61][data-v-031d8a61][data-v-031d8a61] {
    padding-top: 9rem;
  }
}

@media (max-width: 370px) {
  .p-carousel[data-v-031d8a61][data-v-031d8a61][data-v-031d8a61] {
    padding-top: 10rem;
  }
}
</style>
