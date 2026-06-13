<script setup lang="ts">
const activeIndex = ref(0)

const timeline = [
  {
    year: '2026',
    role: 'Extend Marketing',
    title: 'Marketing automation specialist',
    details: 'Building CRM workflows, lifecycle journeys and measurable automation systems for growth teams.',
  },
  {
    year: '2023',
    role: 'The Incredibly Journey',
    title: 'Marketing automation specialist',
    details: 'Delivered HubSpot workflows, email systems and conversion-focused operational improvements.',
  },
  {
    year: '2021',
    role: 'Nordic Tech Lead',
    title: 'Cross-market web architecture',
    details: 'Owned web architecture across Denmark, Finland, Norway and Sweden while coordinating agency delivery.',
  },
  {
    year: '2016',
    role: 'Nordic Digital Manager',
    title: 'Digital strategy and growth',
    details: 'Drove digital strategy, analytics standards and growth experiments including a 66 percent conversion lift.',
  },
  {
    year: '2016',
    role: 'Technical Project Manager',
    title: 'Nordic website migration',
    details: 'Led customer-facing website migrations and master data model implementation across four Nordic markets.',
  },
]
</script>

<template>
  <section id="work" class="mx-auto max-w-7xl py-20 sm:py-28" aria-labelledby="timeline-title">
    <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div class="lg:sticky lg:top-28">
        <p class="text-sm font-medium uppercase tracking-[0.22em] text-cyan-200/80">Experience Timeline</p>
        <h2 id="timeline-title" class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          From enterprise delivery to automation architecture.
        </h2>
        <p class="mt-5 max-w-xl text-sm leading-6 text-slate-400">
          Hover or tap each milestone to reveal the operating context behind the role.
        </p>
      </div>

      <ol class="relative space-y-4 before:absolute before:left-4 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-cyan-300/70 before:via-white/15 before:to-transparent">
        <li
          v-for="(item, index) in timeline"
          :key="`${item.year}-${item.role}`"
          class="relative pl-12"
          @mouseenter="activeIndex = index"
        >
          <button
            type="button"
            class="group w-full rounded-3xl border p-5 text-left transition duration-300"
            :class="activeIndex === index ? 'border-cyan-300/35 bg-white/[0.07] shadow-[0_26px_90px_rgba(34,211,238,0.10)]' : 'border-white/10 bg-white/[0.035] hover:border-cyan-300/25 hover:bg-white/[0.055]'"
            @click="activeIndex = index"
          >
            <span
              class="absolute left-2.5 top-7 h-3 w-3 rounded-full border border-cyan-200 bg-slate-950 shadow-[0_0_20px_rgba(103,232,249,0.55)]"
              aria-hidden="true"
            />
            <span class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span>
                <span class="text-sm font-semibold text-cyan-200">{{ item.year }}</span>
                <span class="mt-1 block text-xl font-semibold tracking-tight text-white">{{ item.role }}</span>
              </span>
              <span class="text-sm text-slate-400">{{ item.title }}</span>
            </span>
            <span
              class="grid transition-all duration-300"
              :class="activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
            >
              <span class="overflow-hidden">
                <span class="mt-4 block border-t border-white/10 pt-4 text-sm leading-6 text-slate-300">
                  {{ item.details }}
                </span>
              </span>
            </span>
          </button>
        </li>
      </ol>
    </div>
  </section>
</template>
