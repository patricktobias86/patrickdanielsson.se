<script setup lang="ts">
type TechItem = {
  name: string
  icon: string
  color: string
  customLogo?: 'klaviyo' | 'rule'
}

const techStack: TechItem[] = [
  { name: 'HubSpot', icon: 'logos:hubspot', color: '#ff5c35' },
  { name: 'Klaviyo', icon: '', color: '#111111', customLogo: 'klaviyo' },
  { name: 'Rule.io', icon: '', color: '#05cc87', customLogo: 'rule' },
  { name: 'Google Tag Manager', icon: 'logos:google-tag-manager', color: '#4285f4' },
  { name: 'WordPress', icon: 'logos:wordpress-icon', color: '#21759b' },
  { name: 'Railway', icon: 'simple-icons:railway', color: '#0b0d0e' },
  { name: 'Node-RED', icon: 'simple-icons:nodered', color: '#8f0000' },
  { name: 'Nuxt', icon: 'logos:nuxt-icon', color: '#00dc82' },
  { name: 'Google Analytics', icon: 'logos:google-analytics', color: '#f9ab00' },
  { name: 'Looker Studio', icon: 'logos:google-data-studio', color: '#4285f4' },
  { name: 'GitHub', icon: 'logos:github-icon', color: '#181717' },
  { name: 'OpenAI', icon: 'logos:openai-icon', color: '#111111' }
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

    <ul class="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9">
      <li
        v-for="tech in techStack"
        :key="tech.name"
        class="group relative flex aspect-square items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-soft transition hover:-translate-y-0.5 hover:border-gray-300 focus-within:-translate-y-0.5 focus-within:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:focus-within:border-gray-600"
        :style="{ '--tech-color': tech.color }"
      >
        <button
          type="button"
          class="flex h-full w-full items-center justify-center rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-gray-900"
          :aria-label="tech.name"
        >
          <Icon
            v-if="tech.icon"
            :name="tech.icon"
            class="h-10 w-10 text-gray-400 opacity-60 grayscale saturate-0 transition duration-200 group-hover:text-[var(--tech-color)] group-hover:opacity-100 group-hover:grayscale-0 group-hover:saturate-100 group-focus-within:text-[var(--tech-color)] group-focus-within:opacity-100 group-focus-within:grayscale-0 group-focus-within:saturate-100 dark:text-gray-500"
          />
          <span
            v-else-if="tech.customLogo === 'klaviyo'"
            class="flex h-10 w-12 items-center justify-center text-gray-400 transition duration-200 group-hover:text-[var(--tech-color)] group-focus-within:text-[var(--tech-color)] dark:text-gray-500"
          >
            <svg
              viewBox="0 0 67.8 45.4"
              class="h-8 w-12"
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="currentColor" d="M67.8 45.4H0V0h67.8L53.6 22.7z" />
            </svg>
          </span>
          <span
            v-else-if="tech.customLogo === 'rule'"
            class="flex h-10 w-10 items-center justify-center text-gray-400 transition duration-200 group-hover:text-[var(--tech-color)] group-focus-within:text-[var(--tech-color)] dark:text-gray-500"
          >
            <svg
              viewBox="0 0 57.16 57.41"
              class="h-10 w-10"
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.28 5.71l12.17 14.28l10.99-4.72c2.06-.99 3.43-2.26 3.43-4.74c0-2.47-1.96-4.83-4.65-4.83H25.28zM0 0v46.5c0 4.49 2.73 8.42 6.71 9.99c5.52 2.17 11.19-.63 13.57-5.96l3.89-8.7l14.45 12.23c4.53 3.84 11.25 4.87 15.64.49c4.3-4.3 3.61-11.34-.68-15.64L41.04 24.2l9.32-3.91c5.25-2.2 8.14-8.05 5.96-13.57C54.76 2.73 50.82 0 46.34 0zm19.96 38.26L15.27 48.6c-1.3 2.69-3.72 4.29-6.67 3.09c-2.48-1.01-2.89-4.07-2.89-6.8v-18.7zM5.71 18.46l38.12 32.27c1.82 1.84 4.85 1.8 6.67-.02c1.83-1.83 1.83-4.86 0-6.69L17.79 5.71H5.71z"
              />
            </svg>
          </span>
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
