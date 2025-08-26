<script setup lang="ts">
import About from '~/components/About.vue';
import ExperienceCards from '~/components/ExperienceCards.vue'
defineOgImageComponent('Pergel')
</script>

<template>
  <main>
  <div>
    <Hero />
      <section class="max-w-6xl mx-auto py-6">
        
      </section>
    <About />
    <ExperienceCards />
    <ProjectsGrid />
    <ContactCta />
  </div>
  </main>
</template>