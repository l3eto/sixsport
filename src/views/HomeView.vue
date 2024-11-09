<template>
  <div class="grid md:grid-cols-2 p-4 md:p-0 min-h-inherit">
    <div class="md:flex md:items-center md:ml-8 md:mr-16 gap-4 my-10 md:my-0">
      <div class="flex-1">
        <h1 class="text-[#e98d30] text-4xl mb-2 font-medium">SixSport Voleyball</h1>
        <h3 class="text-lg">
          Bienvenido al equipo de SixSport de Voleyball, aquí podrás ver información relacionada al próximo torneo.<br>
          Si quieres saber un poco más 
          <a class="text-[#e79d52] hover:bg-[#e79d52] hover:bg-opacity-10" href="https://sixsport.es/nosotros/" target="_blank" rel="noopener">sobre nosotros</a> o
          si tienes alguna duda no dudes en 
          <a class="text-[#e79d52] hover:bg-[#e79d52] hover:bg-opacity-10" href="https://sixsport.es/contacto/" target="_blank" rel="noopener">contactarnos</a>.
        </h3>
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <div class="grid gap-2 mt-8 md:mt-0 md:mr-8">
        <FeatureItem title="Ubicación">
          <template #icon>
            <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon"><path fill-rule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clip-rule="evenodd"></path></svg>
          </template>
          El torneo será en el Complex Esportiu Municipal La Mar Bella, Av. del Litoral, 86-96, Sant Martí, 08005 Barcelona. 
          <a class="text-[#e79d52] hover:bg-[#e79d52] hover:bg-opacity-10" href="https://maps.app.goo.gl/P6NmUZ9WVLShsmyz5/" target="_blank" rel="noopener">¿No sabés como llegar?</a>
        </FeatureItem>

        <FeatureItem title="Día y Hora">
          <template #icon>
            <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" ><path fill-rule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clip-rule="evenodd"></path></svg>
          </template>
          El torneo será el día 04 de Enero de 2025, de 8:30h a 17:00h.
        </FeatureItem>

        <FeatureItem title="Organizador">
          <template #icon>
            <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 2c-.9 0-2 1-2 2H8c0-1-1.1-2-2-2H2v9c0 1 1 2 2 2h2.2c.4 2 1.7 3.7 4.8 4v2.08C8 19.54 8 22 8 22h8s0-2.46-3-2.92V17c3.1-.3 4.4-2 4.8-4H20c1 0 2-1 2-2V2zM6 11H4V4h2zm14 0h-2V4h2z"/></svg>
          </template>
          El evento es organizado por una entidad cristiana de deportes llamada 
          <a class="text-[#e79d52] hover:bg-[#e79d52] hover:bg-opacity-10" href="https://www.trobadajove.org/" target="_blank" rel="noopener">Trobada jove</a>.
        </FeatureItem>

        <FeatureItem title="Reglamento">
          <template #icon>
            <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/></svg>
          </template>
          El torneo será en pista y 4x4, por lo tanto Trobada Jove se encarga de definir las <a class="text-[#e79d52] hover:bg-[#e79d52] hover:bg-opacity-10" href="https://www.trobadajove.org/joves-evangelics/reglament-voleibol-2025.pdf" target="_blank" rel="noopener">normas</a>
          especificas del torneo.
        </FeatureItem>

        <FeatureItem title="Guía de Juego">
          <template #icon>
            <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19.04 4.85C17.34 3.2 15.33 2.25 13 2v3.62l9 5.18c-.28-2.3-1.27-4.3-2.96-5.95M12 22c3.44 0 6.16-1.38 8.17-4.14L17.06 16l-8.99 5.2c1.25.53 2.57.8 3.93.8m1-10.59l8.15 4.66c.44-.94.73-1.93.85-2.96l-9-5.18zm-9.12 6.4c.66.91 1.38 1.65 2.17 2.19l8.99-5.1L12 13.15zM11.04 2C10 2.09 9 2.36 8 2.8v10.35l3.04-1.74zM2 12c0 1.39.3 2.77.89 4.12L6 14.28V4c-2.67 2-4 4.65-4 8"/></svg>
          </template>
          Nos encanta competir, y hacerlo de una forma sana, por eso creemos que lo mejor es estar bien preparados para el torneo, 
          <RouterLink class="text-[#e79d52] hover:bg-[#e79d52] hover:bg-opacity-10" to="/guide">aquí</RouterLink>
          podrás ver algunas jugadas importantes para el torneo.
        </FeatureItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import FeatureItem from '../components/FeatureItem.vue'
import { ref, computed, onMounted } from 'vue';

onMounted(() => {
  document.title = "SixSports";
})
</script>
