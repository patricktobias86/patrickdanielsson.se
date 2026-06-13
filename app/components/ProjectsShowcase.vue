<script setup lang="ts">
const projects = [
  {
    name: 'TGO',
    category: 'Premium Shortlink Platform',
    description: 'A product-grade link platform built around branded domains, API-first workflows and monetizable usage layers.',
    tags: ['Custom Domains', 'Analytics', 'API', 'Subscriptions'],
  },
  {
    name: 'Loop Generator',
    category: 'Telegram Emoji Creation Platform',
    description: 'A creation engine for animated emoji loops with export flows tuned for Telegram ecosystems.',
    tags: ['CSS-Doodle', 'Animation Engine', 'WebM Export', 'Telegram Integration'],
  },
  {
    name: 'BotifyModBot',
    category: 'Telegram Moderation Platform',
    description: 'Automation-first moderation tooling that turns community operations into measurable workflows.',
    tags: ['Node-RED', 'Automation', 'Moderation', 'Analytics'],
  },
  {
    name: 'GIF Directory',
    category: 'Desktop Media Management App',
    description: 'A focused desktop utility for organizing, finding and reusing media assets across daily workflows.',
    tags: ['Tauri', 'Cross Platform', 'Media Library', 'Productivity'],
  },
]
</script>

<template>
  <section id="projects" class="mx-auto max-w-7xl py-20 sm:py-28" aria-labelledby="projects-title">
    <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div class="max-w-3xl">
        <p class="text-sm font-medium uppercase tracking-[0.22em] text-cyan-200/80">Featured Projects</p>
        <h2 id="projects-title" class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Products, platforms and operating systems.
        </h2>
      </div>
      <p class="max-w-md text-sm leading-6 text-slate-400">
        Selected work shaped as product surfaces, automation engines and ecosystem tools.
      </p>
    </div>

    <div class="mt-10 grid gap-5 md:grid-cols-2">
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        v-bind="project"
      />
    </div>
  </section>
</template>
