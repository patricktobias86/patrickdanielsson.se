<template>
  <div class="min-h-screen bg-white text-gray-800">
    <SiteHeader />
    <main class="px-6 md:px-10 lg:px-20">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
// Import shared layout components used across all pages. These components
// provide the header, footer and wrapper styling for the site.
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'
</script>