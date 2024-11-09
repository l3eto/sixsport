<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="absolute inset-x-0 top-0 flex p-4 justify-between text-white h-16">
    <RouterLink to="/">
      <img alt="SixSport" class="invert h-8" src="@/assets/sixsport_horizontal.svg" />
    </RouterLink>
    <div class="flex gap-4">
      <RouterLink class="hover:bg-[#e79d52] hover:bg-opacity-10" active-class="text-[#e79d52]" to="/">Inicio</RouterLink>
      <RouterLink class="hover:bg-[#e79d52] hover:bg-opacity-10" active-class="text-[#e79d52]" to="/guide">Guia de Juego</RouterLink>
    </div>
  </header>
  <main class="pt-16 min-h-[calc(100svh-4rem)]">
    <RouterView />
  </main>
</template>
