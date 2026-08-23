<script setup lang="ts">
const services = [
  {
    title: 'Automation',
    description: 'Designing resilient workflows that connect CRM, analytics, operations and customer communication.',
    keywords: ['HubSpot', 'Node-RED', 'Workflows', 'CRM', 'Integrations'],
    icon: 'material-symbols:settings-suggest-rounded',
  },
  {
    title: 'Product Development',
    description: 'Building polished web products, APIs, SaaS tools and Telegram Mini App experiences from idea to launch.',
    keywords: ['Nuxt', 'Vue', 'APIs', 'SaaS', 'Telegram Mini Apps'],
    icon: 'material-symbols:deployed-code-account-rounded',
  },
  {
    title: 'AI Systems',
    description: 'Creating agentic systems, chatbots and AI-assisted workflows that turn vague tasks into reliable outputs.',
    keywords: ['OpenAI', 'Agents', 'Chatbots', 'Automation', 'Prompt Design'],
    icon: 'material-symbols:psychology-rounded',
  },
  {
    title: 'Technical Leadership',
    description: 'Translating strategy into architecture, roadmaps and cross-market delivery across technical teams.',
    keywords: ['Architecture', 'Strategy', 'Roadmaps', 'Cross-market Delivery'],
    icon: 'material-symbols:account-tree-rounded',
  },
]
</script>

<template>
  <section id="services" class="mx-auto max-w-7xl py-20 sm:py-28" aria-labelledby="services-title">
    <div class="max-w-3xl">
      <p class="text-sm font-medium uppercase tracking-[0.22em] text-cyan-200/80">What I Do</p>
      <h2 id="services-title" class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        Systems that remove friction and create leverage.
      </h2>
    </div>
    <div class="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <ServiceCard
        v-for="service in services"
        :key="service.title"
        v-bind="service"
      />
    </div>
  </section>
</template>
