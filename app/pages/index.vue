<script setup lang="ts">
import About from '~/components/About.vue';
import ExperienceCards from '~/components/ExperienceCards.vue'
import TechStack from '~/components/TechStack.vue'
defineOgImageComponent('Pergel')
</script>

<template>
  <main>
  <div>
    <Hero />
      <section class="max-w-6xl mx-auto py-6">
        
      </section>
    <About />
    <TechStack />
    <ExperienceCards />
    <ProjectsGrid />
    <ContactCta />
  </div>
  </main>
</template>
