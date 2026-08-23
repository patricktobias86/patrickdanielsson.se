<script setup lang="ts">
import HeroCommandCenter from '~/components/HeroCommandCenter.vue'
import ImpactMetrics from '~/components/ImpactMetrics.vue'
import ProjectsShowcase from '~/components/ProjectsShowcase.vue'
import ServicesGrid from '~/components/ServicesGrid.vue'
import TechnologyWall from '~/components/TechnologyWall.vue'
import TimelineSection from '~/components/TimelineSection.vue'
import ContactCta from '~/components/ContactCta.vue'

defineOgImage('Pergel')

useSeoMeta({
  title: 'Patrick Danielsson - Automation, AI Agents & Digital Products',
  description:
    'Technical product builder creating automation, AI agents, Telegram ecosystems, marketing automation and SaaS products across Nordic markets.',
  ogTitle: 'Patrick Danielsson - Command Center Portfolio',
  ogDescription:
    'Automation architecture, AI systems, SaaS products and technical leadership across Nordic enterprise platforms.',
})
</script>

<template>
  <div>
    <HeroCommandCenter />
    <ServicesGrid />
    <ProjectsShowcase />
    <TimelineSection />
    <ImpactMetrics />
    <TechnologyWall />
    <ContactCta />
  </div>
</template>
