
<template>
    <div class="card">
        <Card>
            <template #content>
                <div class="flex justify-between items-center gap-0.5">
                    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-0.5 sm:gap-4">
                        <div class="flex items-center gap-1.5">
                            <i class="pi pi-clock" style="color: green"></i>
                            <span>Seg a sáb: das 9:00 às 18:00</span>
                        </div>
                        <div class="flex items-start sm:items-center gap-1.5">
                            <i class="pi pi-home"></i>
                            <span>2ª Travessa Dr. Pedro Lopes Cardoso - Pajuçara, Natal - RN</span>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row justify-between items-center gap-0.5 sm:gap-4">
                        <div>
                            <a href="https://wa.me/5584988675840" target="_blank">
                                <i class="pi pi-whatsapp"></i>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/rita_imperiodabeleza/" target="_blank">
                                <i class="pi pi-instagram"></i>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/ritabelezaofc" target="_blank">
                                <i class="pi pi-facebook"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </template>
        </Card>
        <MegaMenu :model="items" class="flex items-center justify-between px-8 py-2">
            <template #start>
                <div class="logo">
                    <img src="../../assets/images/sem fundo e otimizado .png" class="w-[5rem] h-[5rem]">
                </div>
            </template>
            <template #item="{ item }">
                <a v-if="item.root"
                    class="flex items-center cursor-pointer px-4 py-2 overflow-hidden relative text-base"
                    style="border-radius: 2rem">
                    <span>{{ item.label }}</span>
                </a>
                <a v-else-if="!item.image" class="flex items-center p-4 cursor-pointer mb-2 gap-3">
                    <span
                        class="inline-flex items-center justify-center rounded-full bg-primary text-primary-contrast w-12 h-12">
                        <i :class="[item.icon, 'text-lg']"></i>
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
        items: [
            [
                {
                    items: [
                        { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
                        { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
                        { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
                    ]
                }
            ],
            [
                {
                    items: [
                        { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item' },
                        { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item' },
                        { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item' }
                    ]
                }
            ],
            [
                {
                    items: [
                        { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item' },
                        { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item' },
                        { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item' }
                    ]
                }
            ],
            [
                {
                    items: [{ image: 'https://primefaces.org/cdn/primevue/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.' }]
                }
            ]
        ]
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

.pi-instagram {
  background: linear-gradient(135deg, #405DE6, #5B51D8, #833AB4, #C13584, #E1306C, #FD1D1D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>