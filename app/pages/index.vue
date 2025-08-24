<template>
  <div>
    <Hero />
    <!-- render markdown content when doc exists -->
    <ContentRenderer v-if="doc" :value="doc" />
    <!-- fallback if no doc -->
    <div v-else class="p-6">Content not found.</div>
    <ExperienceTimeline />
    <ProjectsGrid />
    <ContactCta />
  </div>
</template>

<script setup lang="ts">
import Hero from '~/components/Hero.vue'
import ExperienceTimeline from '~/components/ExperienceTimeline.vue'
import ProjectsGrid from '~/components/ProjectsGrid.vue'
import ContactCta from '~/components/ContactCta.vue'

/* avoid destructuring into undefined; keep data as a ref and guard in template */
const { data: doc } = await useAsyncData('page-index', () =>
  queryContent('/about').findOne() as Promise<Record<string, any> | null>
)
</script>
