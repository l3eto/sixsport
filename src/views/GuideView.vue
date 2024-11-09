<template>
  <div class="grid p-4 md:p-0 min-h-inherit">
    <div class="md:mt-10 divide-y divide-zinc-700 max-w-7xl w-full mx-auto">

      <section v-for="(option, optionIndex) in options"
        class="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
      >
        <h3 class="text-base font-semibold text-white">{{ option.title }}</h3>
          <ul class="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
            <li v-for="(subOption, subOptionIndex) in option.subOptions">
                <button @click="openModal(optionIndex, subOptionIndex)"
                  class="w-full text-left group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-zinc-800 before:opacity-0 hover:before:opacity-100 before:-z-10"
                >
                  <div class="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img :src="subOption.image" alt="" class="absolute inset-0 h-full w-full px-12 bg-[#6d7e51]" />
                  </div>
                  <div class="mt-4 text-sm font-medium text-white group-hover:text-[#e79d52]">
                    {{ subOption.title }}
                  </div>
                  <div class="relative mt-1.5 text-xs font-medium text-slate-300">
                    {{ subOption.subtitle }}
                  </div>
                </button>
            </li>
          </ul>
      </section>

      <ImageModal
        v-if="isModalOpen"
        :group="group"
        :image="current.image"
        :title="current.title"
        :subtitle="current.subtitle"
        :description="current.description"
        @close="isModalOpen = false"
        @navigate="navigateImage"
      />

    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import ImageModal from '../components/ImageModal.vue';

import formacionImg from '@/assets/images/formacion.jpg';
import rotacionImg from '@/assets/images/rotacion.jpg';
import servicioImg from '@/assets/images/servicio.jpg';
import recepcionPaso1Img from '@/assets/images/recepción-paso-1.jpg';
import recepcionPaso2Img from '@/assets/images/recepcion-paso-2.jpg';
import recepcionLateralPaso2Img from '@/assets/images/recepcion-lateral-paso-2.jpg';
import segundoToqueCentralImg from '@/assets/images/segundo-toque-central.jpg';
import segundoToqueLateralImg from '@/assets/images/segundo-toque-lateral.jpg';
import ultimoToqueImg from '@/assets/images/ultimo-toque.jpg';

onMounted(() => {
  document.title = "Guía de Juego | SixSports";
})

const options = [
  {
    title: 'Inicio',
    subOptions: [
      { title: 'Posiciones', subtitle: 'Posicionamiento en rombo', image: formacionImg },
      { title: 'Rotaciones', subtitle: 'Rotación sentido horario', image: rotacionImg },
      { title: 'Servicio', subtitle: 'Momento saque', image: servicioImg }
    ]
  },
  {
    title: 'Primer Toque',
    subOptions: [
      { title: 'Posiciones', subtitle: 'Defensivo en recepción', image: recepcionPaso1Img },
      { title: 'Recepción Central', subtitle: 'Pase al colocador', image: recepcionPaso2Img },
      { title: 'Recepción Lateral', subtitle: 'Pase al colocador', image: recepcionLateralPaso2Img }
    ]
  },
  {
    title: 'Segundo Toque',
    subOptions: [
      { title: 'Colocación Central', subtitle: 'Colocación a laterales', image: segundoToqueCentralImg },
      { title: 'Colocación Lateral', subtitle: 'Colocación a centro y lateral', image: segundoToqueLateralImg },
    ]
  },
  {
    title: 'Último Toque',
    subOptions: [
      { title: 'Pasar el balón', subtitle: 'Matar o colocar', image: ultimoToqueImg },
    ]
  }
]

const isModalOpen = ref(false);
const currentOptionIndex = ref(0);
const currentSubOptionIndex = ref(0);

const group = computed(() => {
  return options[currentOptionIndex.value].title
});

const current = computed(() => {
  return options[currentOptionIndex.value].subOptions[currentSubOptionIndex.value]
});

function openModal(optionIndex, subOptionIndex) {
  currentOptionIndex.value = optionIndex;
  currentSubOptionIndex.value = subOptionIndex;
  isModalOpen.value = true;
}

function navigateImage(direction) {
  const currentOptions = options[currentOptionIndex.value].subOptions;

  if (direction === "next") {
    if (currentSubOptionIndex.value < currentOptions.length - 1) {
      currentSubOptionIndex.value++;
    } else {
      if (currentOptionIndex.value < options.length - 1) {
        currentOptionIndex.value++;
        currentSubOptionIndex.value = 0;
      } else {
        currentOptionIndex.value = 0;
        currentSubOptionIndex.value = 0;
      }
    }
  } else if (direction === "prev") {
    if (currentSubOptionIndex.value > 0) {
      currentSubOptionIndex.value--;
    } else {
      if (currentOptionIndex.value > 0) {
        currentOptionIndex.value--;
        currentSubOptionIndex.value = options[currentOptionIndex.value].subOptions.length - 1;
      } else {
        currentOptionIndex.value = options.length - 1;
        currentSubOptionIndex.value = options[currentOptionIndex.value].subOptions.length - 1;
      }
    }
  }
}


</script>

