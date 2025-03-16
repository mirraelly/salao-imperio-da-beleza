
<template>
    <div class="card">
        <div class="py-1 px-6 bg-[#000000a1] topo">
            <div>
                <div class="flex justify-between items-center gap-0.5">
                    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-0.5 sm:gap-4">
                        <div class="flex items-center gap-1.5">
                            <i class="pi pi-clock text-white"></i>
                            <span class="text-[14px] text-white">Ter a sáb: das 9:00 às 18:00</span>
                        </div>
                        <div class="flex items-start sm:items-center gap-1.5">
                            <i class="pi pi-home text-white"></i>
                            <span class="text-[14px] text-white">2ª Travessa Dr. Pedro Lopes Cardoso - Pajuçara, Natal - RN</span>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row justify-between items-center gap-0.5 sm:gap-4">
                        <div>
                            <a href="https://wa.me/5584988675840" target="_blank">
                                <i class="pi pi-whatsapp text-white hover:text-[#19ff00]"></i>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/rita_imperiodabeleza/" target="_blank">
                                <i class="pi pi-instagram text-white"></i>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/ritabelezaofc" target="_blank" class="rounded-full hover:bg-blue-700 transition">
                                <i class="pi pi-facebook !text-white"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MegaMenu :model="items" class="flex items-center justify-between" style="padding: 0 0.6rem 0 1.5rem; border-radius: 0; border: none; background-color: black;">
            <template #start>
                <div class="logo">
                    <img src="../../assets/images/logo_RK_versao2.svg" class="w-[5rem] h-[3rem]">
                    <!-- <span style="font-family: Imperial Script, cursive" class="text-[4rem]">R</span>
                    <span style="font-family: Imperial Script, cursive" class="text-[4rem]">K</span> -->
                </div>
            </template>
            <template #item="{ item }">
                <a v-if="item.root"
                    class="flex items-center cursor-pointer px-4 py-2 overflow-hidden relative text-base"
                    style="border-radius: 2rem">
                    <span class="menu-options">{{ item.label }}</span>
                </a>
                <a v-else-if="!item.image" class="flex items-center p-4 cursor-pointer mb-2 gap-3">
                    <span
                        class="inline-flex items-center justify-center rounded-full bg-primary text-primary-contrast w-12 h-12">
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
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Início',
        root: true,
    },
    {
        label: 'Sobre',
        root: true
    },
    {
        label: 'Depoimentos',
        root: true
    },
    {
        label: 'A equipe',
        root: true
    },
    {
        label: 'Galeria',
        root: true
    },
    {
        label: 'Contato',
        root: true
    },
    {
        label: 'Localização',
        root: true
    },
]);
</script>

<style>

.pi-instagram:hover {
  background: linear-gradient(135deg, #405DE6, #5B51D8, #833AB4, #C13584, #E1306C, #FD1D1D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.menu-options {
    color: #ffd700;
}

</style>