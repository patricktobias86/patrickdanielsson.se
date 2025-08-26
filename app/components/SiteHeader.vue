<template>
  <header class="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-gray-900/80 border-b dark:border-gray-700">
    <div class="max-w-6xl mx-auto flex items-center justify-between py-4">
      <NuxtLink to="/" class="font-semibold tracking-tight">Patrick Danielsson</NuxtLink>
      <nav class="flex items-center gap-6 text-sm">
        <NuxtLink to="/#work">Work</NuxtLink>
        <NuxtLink to="/#projects">Projects</NuxtLink>
        <NuxtLink to="/#contact" class="px-3 py-1.5 rounded-xl bg-black text-white shadow-soft dark:bg-white dark:text-black">Contact</NuxtLink>
        <button @click="toggleTheme" class="px-3 py-1.5 rounded-xl border dark:border-gray-700">{{ isDark ? 'Light' : 'Dark' }}</button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
// The header uses NuxtLink for client-side navigation. It stays sticky
// at the top of the viewport and provides quick access to sections on
// the homepage.
import { useTheme } from '~/composables/useTheme'
const { isDark, toggleTheme } = useTheme()
</script>