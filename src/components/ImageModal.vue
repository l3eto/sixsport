<template>
  <div class="fixed inset-0 bg-black/80 flex items-center justify-center z-50" @click.self="close">
    <div class="relative w-full max-w-3xl m-4 md:m-0 rounded-lg bg-[#6d7e51]">
      <div class="bg-white/10 p-4 w-full">
        <p class="text-white text-lg font-medium text-center">{{ group }}</p>
      </div>
      <img :src="image" alt="" class="w-full h-auto" />
      <div class="p-4">
        <p class="mt-4 text-white text-lg font-medium text-center">{{ title }} - <span class="font-normal text-base">{{ subtitle }}</span></p>
      </div>
      

      <button @click="prevImage" class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-white/5 p-2 hover:bg-white/15 rounded-full">
        <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z"/></svg>
      </button>
      <button @click="nextImage" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-white/5 p-2 hover:bg-white/15 rounded-full">
        <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/></svg>
      </button>
      <button @click="close" class="absolute top-3 right-2 text-white text-2xl bg-white/5 p-2 hover:bg-white/15 rounded-full">
        <svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" ><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg>
      </button>
      
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  group: String,
  image: String,
  title: String,
  subtitle: String,
  description: String
});
const emit = defineEmits(['close', 'navigate']);

function close() {
  emit('close');
}
function nextImage() {
  emit('navigate', 'next');
}
function prevImage() {
  emit('navigate', 'prev');
}

</script>
