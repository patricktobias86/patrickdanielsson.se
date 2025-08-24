<template>
  <div>
    <Hero />
    <ContentDoc path="/about" v-slot="{ doc }">
      <section class="max-w-6xl mx-auto py-6">
        <h2 class="sr-only">{{ doc.title }}</h2>
        <p class="text-lg text-gray-700">{{ doc.lead }}</p>
        <div class="prose mt-6" v-html="doc.body"></div>
      </section>
    </ContentDoc>
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
</script>