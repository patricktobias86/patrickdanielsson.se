<script setup lang="ts">
const metrics = [
  { value: '+66%', label: 'Conversion Increase' },
  { value: '4', label: 'Nordic Markets' },
  { value: '10+', label: 'Years Experience' },
  { value: '100+', label: 'Automations Built' },
]
</script>

<template>
  <section class="relative -mx-6 overflow-hidden border-y border-white/10 bg-white/[0.035] px-6 py-16 md:-mx-10 md:px-10 lg:-mx-20 lg:px-20">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(16,185,129,0.10),transparent_32%)]" />
    <div class="relative mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="metric in metrics"
        :key="metric.label"
        class="rounded-3xl border border-white/10 bg-slate-950/45 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
      >
        <p class="text-5xl font-semibold tracking-tight text-white sm:text-6xl">{{ metric.value }}</p>
        <p class="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-slate-400">{{ metric.label }}</p>
      </div>
    </div>
  </section>
</template>
