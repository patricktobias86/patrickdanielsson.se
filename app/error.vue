<template>
  <div class="min-h-screen bg-white text-gray-800">
    <SiteHeader />
    <main class="px-6 md:px-12">
      <div class="max-w-4xl mx-auto py-16">
        <h1 class="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p class="text-lg text-gray-600">We're sorry, but we couldn't find the page you were looking for.</p>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
defineOgImageComponent('Pergel')
import SiteHeader from '~/components/SiteHeader.vue'
</script>