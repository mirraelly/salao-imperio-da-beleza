<template>
  <div class="card fixed top-0 left-0 w-full z-50 mb-[60px]">
    <div class="py-1 px-6 bg-[#000000a1] topo" v-show="mostrarTopo">
      <div>
        <div
          class="flex justify-between items-center flex-col md:flex-row gap-0.5"
        >
          <div
            class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-0.5 sm:gap-4"
          >
            <div class="flex items-center gap-1.5">
              <i class="pi pi-clock text-white"></i>
              <span class="text-[14px] text-white"
                >Ter a sáb: das 09:00 às 18:00</span
              >
            </div>
            <div class="flex items-start sm:items-center gap-1.5">
              <i class="pi pi-home text-white"></i>
              <span class="text-[14px] text-white"
                >2ª Travessa Dr. Pedro Lopes Cardoso - Pajuçara, Natal -
                RN</span
              >
            </div>
          </div>
          <div class="flex sm:flex-row justify-between items-center gap-4">
            <div>
              <a href="https://wa.me/5584988675840" target="_blank">
                <i class="pi pi-whatsapp text-white hover:text-[#19ff00]"></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/rita_imperiodabeleza/"
                target="_blank"
              >
                <i class="pi pi-instagram text-white"></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/ritabelezaofc"
                target="_blank"
                class="rounded-full transition"
              >
                <i class="pi pi-facebook facebook-icon"></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.tiktok.com/@ritaferreira989?_t=ZM-8zmwMx6xHx2&_r=1"
                target="_blank"
                class="rounded-full"
              >
                <i class="pi pi-tiktok tiktok-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <MegaMenu
        :model="items"
        class="flex items-center justify-between"
        style="
          padding: 0 0.6rem 0 1.5rem;
          border-radius: 0;
          border: none;
          background-color: black;
        "
      >
        <template #start>
          <div class="logo w-[4rem] h-[2.5rem] py-1">
            <img src="../../assets/images/rk_.png" class="w-full h-full" />
          </div>
        </template>
        <template #item="{ item }">
          <a
            v-if="item.root"
            class="flex items-center cursor-pointer px-4 py-2 overflow-hidden relative text-base"
            :href="item.url"
            style="border-radius: 2rem"
          >
            <span class="menu-options">{{ item.label }}</span>
          </a>
          <a
            v-else-if="!item.image"
            class="flex items-center p-4 cursor-pointer mb-2 gap-3"
          >
            <span
              class="inline-flex items-center justify-center rounded-full bg-primary text-primary-contrast w-12 h-12"
            >
              <i :class="[item.icon, 'text-base']"></i>
            </span>
            <span class="inline-flex flex-col gap-1">
              <span class="font-bold text-lg">{{ item.label }}</span>
              <span class="whitespace-nowrap">{{ item.subtext }}</span>
            </span>
          </a>
          <div v-else class="flex flex-col items-start gap-4 p-2">
            <img alt="megamenu-demo" :src="item.image" class="w-full" />
            <span>{{ item.subtext }}</span>
            <Button :label="item.label" outlined />
          </div>
        </template>
      </MegaMenu>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: "Início",
    root: true,
    url: "#heroCarousel",
  },
  {
    label: "Sobre",
    root: true,
    url: "#sobre",
  },
  {
    label: "Depoimentos",
    root: true,
    url: "#depoimentos",
  },
  {
    label: "A equipe",
    root: true,
    url: "#equipe",
  },
  {
    label: "Serviços",
    root: true,
    url: "#servicos",
  },
  {
    label: "Resultados",
    root: true,
    url: "#resultados",
  },
  {
    label: "Contato",
    root: true,
    url: "#contato",
  },
]);

const mostrarTopo = ref(true);

onMounted(() => {
  const heroSection = document.querySelector("#heroCarousel");

  if (heroSection) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        mostrarTopo.value = entry.isIntersecting;
      },
      { threshold: 0.2 }
    );

    observer.observe(heroSection);
  }
});
</script>

<style>
.pi-instagram:hover {
  background: linear-gradient(
    135deg,
    #405de6,
    #5b51d8,
    #833ab4,
    #c13584,
    #e1306c,
    #fd1d1d
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.facebook-icon {
  color: white;
  transition: color 0.3s ease-in-out;
}

.facebook-icon:hover {
  color: #1877f2;
  background-color: white;
  border-radius: 50%;
}

.tiktok-icon {
  color: white; /* cor inicial */
  transition: all 0.3s ease-in-out;
}

.tiktok-icon:hover {
  background: linear-gradient(90deg, #25f4ee 0%, #fe2c55 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.menu-options {
  color: #ffd700;
  position: relative;
}

.menu-options:hover {
  font-weight: 900;
  background: linear-gradient(90deg, #ffd700, #ffae00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #000;
}

/* .menu-options::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0%;
  height: 2px;
  background: linear-gradient(90deg, #ffd700, #ffae00);
  transition: width 0.3s ease-in-out;
}

.menu-options:hover {
  color: #ffd700;
}

.menu-options:hover::after {
  width: 100%;
} */

.topo {
  transition: opacity 0.5s ease-in-out;
}

* {
  font-family: "Playfair", serif;
  font-weight: 700;
}
</style>
