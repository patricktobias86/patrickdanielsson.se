<script setup lang="ts">
defineProps<{
  value: string
  label: string
  tone?: 'cyan' | 'emerald' | 'violet' | 'amber'
}>()
</script>

<template>
  <div
    class="group rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.07]"
  >
    <p
      class="text-2xl font-semibold tracking-tight text-white transition duration-300 group-hover:text-cyan-100 sm:text-3xl"
      :class="{
        'group-hover:text-cyan-100': tone === 'cyan' || !tone,
        'group-hover:text-emerald-100': tone === 'emerald',
        'group-hover:text-violet-100': tone === 'violet',
        'group-hover:text-amber-100': tone === 'amber',
      }"
    >
      {{ value }}
    </p>
    <p class="mt-1 text-sm leading-5 text-slate-400">{{ label }}</p>
  </div>
</template>
