<template>
  <div class="md:p-1 flex relative md:pl-8">
    <i class="flex place-items-center place-content-center size-8 rounded-md border-zinc-400
      md:absolute md:top-4 md:-left-8 md:bg-black/25 md:border md:size-12">
      <slot name="icon"></slot>
    </i>
    <div class="flex-1 ml-4">
      <h3 class="mb-0.5 text-white font-medium text-lg">{{ title }}</h3>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>
