<script setup lang="ts">
type TechItem = {
  name: string
  icon: string
}

const techStack: TechItem[] = [
  { name: 'HubSpot', icon: 'logos:hubspot' },
  { name: 'Nuxt', icon: 'logos:nuxt-icon' },
  { name: 'Vue', icon: 'logos:vue' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'Figma', icon: 'logos:figma' },
  { name: 'Google Analytics', icon: 'logos:google-analytics' },
  { name: 'Docker', icon: 'logos:docker-icon' },
  { name: 'GitHub', icon: 'logos:github-icon' },
  { name: 'OpenAI', icon: 'logos:openai-icon' }
]
</script>

<template>
  <section id="tech-stack" class="max-w-6xl mx-auto py-16">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Platforms &amp; tech</p>
        <h2 class="mt-2 text-2xl font-semibold">Tools I work with</h2>
      </div>
      <p class="max-w-2xl text-gray-600 dark:text-gray-300">
        A mix of marketing automation, modern web delivery, analytics, design, and AI tooling.
      </p>
    </div>

    <ul class="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11">
      <li
        v-for="tech in techStack"
        :key="tech.name"
        class="group relative flex aspect-square items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-soft transition hover:-translate-y-0.5 hover:border-gray-300 focus-within:-translate-y-0.5 focus-within:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:focus-within:border-gray-600"
      >
        <button
          type="button"
          class="flex h-full w-full items-center justify-center rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-gray-900"
          :aria-label="tech.name"
        >
          <Icon
            :name="tech.icon"
            class="h-10 w-10 opacity-60 grayscale saturate-0 transition duration-200 group-hover:opacity-100 group-hover:grayscale-0 group-hover:saturate-100 group-focus-within:opacity-100 group-focus-within:grayscale-0 group-focus-within:saturate-100"
          />
        </button>
        <span
          role="tooltip"
          class="pointer-events-none absolute -top-3 left-1/2 z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-gray-950 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100 group-focus-within:opacity-100 dark:bg-white dark:text-gray-950"
        >
          {{ tech.name }}
        </span>
      </li>
    </ul>
  </section>
</template>
