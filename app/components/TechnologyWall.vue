<script setup lang="ts">
const categories = [
  {
    name: 'Automation',
    tools: ['HubSpot', 'Node-RED', 'Zapier', 'Make'],
  },
  {
    name: 'Development',
    tools: ['Nuxt', 'Vue', 'Node.js', 'TypeScript'],
  },
  {
    name: 'Analytics',
    tools: ['GA4', 'Looker Studio', 'Google Tag Manager'],
  },
  {
    name: 'AI',
    tools: ['OpenAI', 'Agents', 'Prompt Engineering'],
  },
]
</script>

<template>
  <section id="tech-stack" class="mx-auto max-w-7xl py-20 sm:py-28" aria-labelledby="tech-title">
    <div class="max-w-3xl">
      <p class="text-sm font-medium uppercase tracking-[0.22em] text-cyan-200/80">Technology Wall</p>
      <h2 id="tech-title" class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        A practical stack for shipping systems.
      </h2>
    </div>

    <div class="mt-10 grid gap-4 md:grid-cols-2">
      <article
        v-for="category in categories"
        :key="category.name"
        class="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:border-cyan-300/25 hover:bg-white/[0.06]"
      >
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-semibold tracking-tight text-white">{{ category.name }}</h3>
          <Icon name="material-symbols:category-rounded" class="h-5 w-5 text-cyan-200/80" />
        </div>
        <div class="mt-6 flex flex-wrap gap-2">
          <span
            v-for="tool in category.tools"
            :key="tool"
            class="rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-2 text-sm font-medium text-slate-300"
          >
            {{ tool }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
