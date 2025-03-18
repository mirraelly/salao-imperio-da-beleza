<!-- 
    <template>
    <div class="flex items-center justify-center p-8">
      <div class="relative w-64 h-64">
        <div class="absolute w-1/2 h-full overflow-hidden">
          <div
            class="absolute left-0 top-0 w-full h-full rounded-full bg-blue-500"
            :style="{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }"
          >
            <div
              v-for="(item, index) in depoimentos"
              :key="index"
              class="absolute w-16 h-16 rounded-full overflow-hidden"
              :style="getPhotoPosition(index)"
            >
              <img :src="item.foto" alt="Foto" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
  
      <div class="ml-8 w-80">
        <div class="relative bg-white rounded-lg shadow-md p-4">
          <div class="absolute -left-4 top-1/2 transform -translate-y-1/2">
            <div class="w-0 h-0 border-t-8 border-r-8 border-b-8 border-l-0 border-white"></div>
          </div>
          <h3 class="font-semibold text-lg">{{ currentDepoimento.nome }}</h3>
          <p class="text-gray-600">{{ currentDepoimento.texto }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  
  const depoimentos = ref([
    {
      nome: 'João Silva',
      texto: 'Excelente serviço! Recomendo a todos.',
      foto: 'https://via.placeholder.com/150/FF0000', // Substitua pelas suas fotos
    },
    {
      nome: 'Maria Oliveira',
      texto: 'Adorei a experiência. Equipe muito atenciosa.',
      foto: 'https://via.placeholder.com/150/00FF00',
    },
    {
      nome: 'Carlos Souza',
      texto: 'Superou minhas expectativas. Parabéns!',
      foto: 'https://via.placeholder.com/150/0000FF',
    },
  ]);
  
  const currentIndex = ref(0);
  const currentDepoimento = computed(() => depoimentos.value[currentIndex.value]);
  
  onMounted(() => {
    // Simulação de troca de depoimento a cada 3 segundos
    setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % depoimentos.value.length;
    }, 3000);
  });
  
  const getPhotoPosition = (index) => {
    const numPhotos = depoimentos.value.length;
    const angle = (360 / numPhotos) * index;
    const radius = 40; // Ajuste o raio conforme necessário
    const centerX = 50;
    const centerY = 50;
  
    const x = centerX + radius * Math.cos(angle * Math.PI / 180);
    const y = centerY + radius * Math.sin(angle * Math.PI / 180);
  
    return {
      left: `${x - 8}%`, // Centraliza a foto
      top: `${y - 8}%`,
      transform: `translate(-50%, -50%) rotate(${angle}deg)`,
    };
  };
  </script> -->
  


  <template>
    <div class="flex items-center justify-center p-8">
      <!-- <div class="relative w-64 h-64">
        <div class="absolute w-1/2 h-full overflow-hidden">
          <div
            class="absolute left-0 top-0 w-full h-full rounded-full bg-blue-500"
            :style="{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }"
          >
            <div
              v-for="(item, index) in depoimentos"
              :key="index"
              class="absolute w-16 h-16 rounded-full overflow-hidden"
              :style="getPhotoPosition(index)"
            >
              <img :src="item.foto" alt="Foto" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div> -->

      <div class="card">
        <Carousel :value="testemonials":numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" containerClass="flex items-center">
            <template #item="slotProps">
                <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
                    <div class="mb-4">
                        <div class="relative mx-auto">
                            <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
                        </div>
                    </div>
                    <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
                    <div class="flex justify-between items-center">
                        <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
                        <span>
                            <Button icon="pi pi-heart" severity="secondary" outlined />
                            <Button icon="pi pi-shopping-cart" class="ml-2"/>
                        </span>
                    </div>
                </div>
            </template>
                </Carousel>
    </div>
  
      <div class="ml-8 w-80">
        <div class="relative bg-white rounded-lg shadow-md p-4">
          <div class="absolute -left-4 top-1/2 transform -translate-y-1/2">
            <div class="w-0 h-0 border-t-8 border-r-8 border-b-8 border-l-0 border-white"></div>
          </div>
          <h3 class="font-semibold text-lg">{{ currentDepoimento.nome }}</h3>
          <p class="text-gray-600">{{ currentDepoimento.texto }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import {testemonials } from '../../assets/db/testemonials.json'
  
  const testemonials = ref([]);

  const currentIndex = ref(0);
  const currentDepoimento = computed(() => testemonials.value[currentIndex.value]); //depoimento atual 

  
  onMounted(() => {
    // Simulação de troca de depoimento a cada 3 segundos
    testemonials.getTestemonials().then((data) => (testemonials.value = data.slice(0, 9)));
    setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % testemonials.value.length;
    }, 3000);
  });
  
  const getPhotoPosition = (index) => {
    const numPhotos = depoimentos.value.length;
    const angle = (360 / numPhotos) * index;
    const radius = 40; // Ajuste o raio conforme necessário
    const centerX = 50;
    const centerY = 50;
  
    const x = centerX + radius * Math.cos(angle * Math.PI / 180);
    const y = centerY + radius * Math.sin(angle * Math.PI / 180);
  
    return {
      left: `${x - 8}%`, // Centraliza a foto
      top: `${y - 8}%`,
      transform: `translate(-50%, -50%) rotate(${angle}deg)`,
    };
  };
  </script>
  
  <style scoped>
  /* Estilos adicionais podem ser incluídos aqui */
  </style>
  