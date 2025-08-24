<script setup lang="ts">
// Fetch the structured experience data from the content directory. The
// `useAsyncData` call ensures this is only called once per request and is
// dehydrated on the client.
const { data } = await useAsyncData('exp', () => queryContent('/experience').findOne())
</script>

<template>
  <section id="work" class="max-w-6xl mx-auto py-16">
    <h2 class="text-2xl font-semibold">Experience</h2>
    <div class="mt-8 space-y-8">
      <div v-for="(item, i) in data?.body" :key="i" class="p-6 rounded-3xl border shadow-soft">
        <div class="flex items-center justify-between">
          <h3 class="font-medium">
            {{ item.role }} — <span class="text-gray-600">{{ item.org }}</span>
          </h3>
          <span class="text-sm text-gray-500">{{ item.period }}</span>
        </div>
        <ul class="mt-3 list-disc pl-5 space-y-1 text-gray-700">
          <li v-for="(b, j) in item.bullets" :key="j">{{ b }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>