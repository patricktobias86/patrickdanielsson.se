<template>
  <header class="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
    <div class="max-w-6xl mx-auto flex items-center justify-between py-4">
      <NuxtLink to="/" class="font-semibold tracking-tight">Patrick Danielsson</NuxtLink>
      <nav class="flex gap-6 text-sm">
        <NuxtLink to="/#work">Work</NuxtLink>
        <NuxtLink to="/#projects">Projects</NuxtLink>
        <NuxtLink to="/#contact" class="px-3 py-1.5 rounded-xl bg-black text-white shadow-soft">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
// The header uses NuxtLink for client-side navigation. It stays sticky
// at the top of the viewport and provides quick access to sections on
// the homepage.
</script>