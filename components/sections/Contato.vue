<template>
  <div class="bg-[#000000a1] text-white flex py-8" id="contato">
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 box-border"
    >
      <div class="px-4 md:px-0 max-w-[20rem] m-auto">
        <img
          src="../../assets/images/rk-salao-fundo-transparente.png"
          alt="Beauty Spa Logo"
          class="w-full h-full mr-2"
        />
      </div>
      <div class="section p-4">
        <div class="logo flex items-center">
          <h2 class="border-b border-secondary pb-2 mb-4 text-xl font-semibold">
            Rita - Império da Beleza
          </h2>
        </div>
        <div class="flex flex-col">
          <p>
            Um ambiente acolhedor e relaxante espera por você. Deixe-se cuidar e
            revitalize sua beleza!
          </p>
        </div>
        <div class="flex items-start gap-1.5 mt-4">
          <i class="pi pi-home text-white"> </i>
          <span class="text-white">
            <p>2ª Travessa Dr. Pedro Lopes, Cardoso.</p>
            <p>Pajuçara, Natal - RN. Brasil</p>
          </span>
        </div>
      </div>
      <div class="section p-4">
        <h2
          class="border-b border-secondary pb-2 mb-4 text-[1rem] md:text-xl font-semibold"
        >
          Links úteis
        </h2>
        <div class="flex justify-start gap-[3rem]">
          <ul class="list-none p-0 m-0">
            <li class="mb-2"><a href="#" class="hover:underline">Início</a></li>
            <li class="mb-2"><a href="#" class="hover:underline">Sobre</a></li>
            <li class="mb-2">
              <a href="#" class="hover:underline">Serviços</a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:underline">Depoimentos</a>
            </li>
          </ul>
          <ul class="list-none p-0 m-0">
            <li class="mb-2">
              <a href="#" class="hover:underline">A equipe</a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:underline">Galeria</a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:underline">Contato</a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:underline">Localização</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="section p-4">
        <h2
          class="border-b border-secondary pb-2 mb-4 text-[1rem] md:text-xl font-semibold"
        >
          Nossos Horários
        </h2>
        <ul class="working-hours-list list-none p-0 m-0">
          <li class="flex justify-between mb-1">
            <span>Segunda à Sábado</span> <span>09h - 18h</span>
          </li>
          <li class="flex justify-between mb-1">
            <span>Domingo</span> <span class="text-danger">Fechado</span>
          </li>
        </ul>
        <div
          class="special-offer border border-dashed border-primary py-2 px-4 mt-4 text-start"
        >
          <div class="contact-info flex flex-col gap-1">
            <div>
              <a href="https://wa.me/5584988675840" target="_blank">
                <i class="pi pi-whatsapp text-white hover:text-[#19ff00]">
                  <span> +55 (84)98867-5840</span>
                </i>
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/rita_imperiodabeleza/"
                target="_blank"
              >
                <i class="pi pi-instagram text-white">
                  <span> @rita_imperiodabeleza</span>
                </i>
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/ritabelezaofc"
                target="_blank"
                class="rounded-full hover:bg-blue-700 transition"
              >
                <i class="pi pi-facebook !text-white">
                  <span> ritabelezaofc</span>
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
