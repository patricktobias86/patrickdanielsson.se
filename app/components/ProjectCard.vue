<script setup lang="ts">
defineProps<{
  name: string
  logo: string
  logoClass: string
  url: string
  category: string
  description: string
  tags: string[]
}>()
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="group relative flex min-h-80 flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/55 p-6 shadow-[0_28px_100px_rgba(0,0,0,0.28)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
  >
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.14),transparent_34%),radial-gradient(circle_at_90%_70%,rgba(139,92,246,0.12),transparent_28%)] opacity-70 transition group-hover:opacity-100" />
    <img
      :src="logo"
      alt=""
      :class="logoClass"
      class="pointer-events-none absolute object-contain opacity-25 saturate-125 transition duration-500 group-hover:scale-105 group-hover:opacity-40"
      loading="lazy"
    >
    <div class="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent" />
    <div class="relative z-10 flex items-start justify-between gap-4">
      <div>
        <p class="text-sm font-medium text-cyan-200">{{ category }}</p>
        <h3 class="mt-3 text-2xl font-semibold tracking-tight text-white">{{ name }}</h3>
      </div>
      <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-slate-200 transition group-hover:scale-105 group-hover:text-cyan-100">
        <Icon name="material-symbols:arrow-outward-rounded" class="h-5 w-5" />
      </span>
    </div>

    <p class="relative z-10 mt-6 max-w-md text-sm leading-6 text-slate-300">{{ description }}</p>

    <div class="relative z-10 mt-auto pt-8">
      <div class="mb-5 h-px bg-gradient-to-r from-cyan-300/40 via-white/10 to-transparent" />
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </a>
</template>
