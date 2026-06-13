<script setup lang="ts">
defineProps<{
  title: string
  description: string
  keywords: string[]
  icon: string
}>()
</script>

<template>
  <article
    class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]"
  >
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition group-hover:opacity-100" />
    <div class="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-cyan-200">
      <Icon :name="icon" class="h-5 w-5" />
    </div>
    <h3 class="mt-6 text-xl font-semibold tracking-tight text-white">{{ title }}</h3>
    <p class="mt-3 min-h-16 text-sm leading-6 text-slate-400">{{ description }}</p>
    <div class="mt-6 flex flex-wrap gap-2">
      <span
        v-for="keyword in keywords"
        :key="keyword"
        class="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs font-medium text-slate-300"
      >
        {{ keyword }}
      </span>
    </div>
  </article>
</template>
