<script setup>
import { ref, computed } from "vue";
import testemonialsData from "@/assets/db/testemonials.json";

const testemonials = ref(testemonialsData.testemonials);
const currentIndex = ref(0);
const currentDepoimento = computed(
  () => testemonials.value[currentIndex.value]
);
</script>

<template>
  <div class="bg-black pt-6" id="depoimentos">
    <h1 class="text-[2rem] text-center text-[#ffd700] title-hero">
      Depoimentos
    </h1>
    <div>
      <div class="flex items-start gap-2 py-10 px-auto">
        <div class="card w-full">
          <Carousel
            :value="testemonials"
            :numVisible="1"
            :numScroll="1"
            @update:page="currentIndex = $event"
            circular
            :autoplayInterval="3000"
            :showNavigators="false"
            :showIndicators="false"
            orientation="vertical"
            containerClass="flex items-end"
          >
            <template #item="slotProps">
              <div
                class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4"
              >
                <div class="mb-4">
                  <div class="relative mx-auto w-[300px] h-[150px]">
                    <img
                      :src="slotProps.data.photo"
                      :alt="slotProps.data.name"
                      class="w-full rounded"
                    />
                  </div>
                </div>
                <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
              </div>
            </template>
          </Carousel>
        </div>
        <div class="ml-8 w-full">
          <div class="relative bg-white rounded-lg shadow-md p-4 w-120">
            <div
              class="absolute -left-4 top-1/2 transform -translate-y-1/2"
            ></div>
            <!-- Triângulo -->
            <div class="triangle"></div>

            <h3 class="font-semibold text-lg">{{ currentDepoimento.name }}</h3>
            <p class="text-gray-600">{{ currentDepoimento.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.triangle {
  position: absolute;
  left: -40px;
  top: 51%;
  z-index: 0;
  width: 0;
  height: 4px;
  border-left: 0px solid transparent;
  border-right: 42px solid rgb(255, 255, 255);
  filter: drop-shadow(-2px 1px 1px rgba(0, 0, 0, 0.2));
  border-top: 17px solid transparent;
  border-bottom: 10px solid transparent;
}
</style>
