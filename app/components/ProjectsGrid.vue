<script setup lang="ts">
// Fetch the GitHub repos from the server-side API. During static generation,
// Nitro prefetches this route so data is available at build time.
const { data: repos } = await useFetch('/api/github')
</script>

<template>
  <section id="projects" class="max-w-6xl mx-auto py-16">
    <h2 class="text-2xl font-semibold">Selected Projects</h2>
    <p class="text-gray-600 mt-2">Pulled from my GitHub at build time.</p>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <a
        v-for="r in repos?.repos"
        :key="r.url"
        :href="r.url"
        target="_blank"
        class="block p-6 rounded-3xl border shadow-soft hover:-translate-y-0.5 transition"
      >
        <h3 class="font-medium">{{ r.name }}</h3>
        <p class="text-sm text-gray-600 mt-2 line-clamp-3" v-if="r.desc">{{ r.desc }}</p>
        <div class="mt-4 text-xs text-gray-500 flex gap-4">
          <span>★ {{ r.stars }}</span>
          <span v-if="r.lang">{{ r.lang }}</span>
        </div>
      </a>
    </div>
  </section>
</template>