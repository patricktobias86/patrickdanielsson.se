<!-- /components/ExperienceCards.vue -->
<template>
  <section id="work" class="max-w-6xl mx-auto py-16">
    <h2 class="text-2xl font-semibold">Experience</h2>

    <div class="mt-8 space-y-8">
      <div
        v-for="(item, i) in itemsToRender"
        :key="i"
        class="p-6 rounded-3xl border dark:border-gray-700 shadow-soft"
      >
        <div class="flex items-center justify-between">
          <h3 class="font-medium">
            {{ item.role }} — <span class="text-gray-600 dark:text-gray-300">{{ item.org }}</span>
          </h3>
          <span class="text-sm text-gray-500 dark:text-gray-400">{{ item.period }}</span>
        </div>

        <ul class="mt-3 list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
          <li v-for="(b, j) in item.bullets" :key="j">{{ b }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ExperienceItem } from '~/composables/useExperience'
const props = defineProps<{
  /** Optional: pass a custom array instead of using the composable */
  items?: ExperienceItem[]
}>()

const { experience } = useExperience()
const itemsToRender = computed(() => props.items ?? experience)
</script>