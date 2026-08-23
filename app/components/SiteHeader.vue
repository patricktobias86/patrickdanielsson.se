<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 px-6 backdrop-blur-xl md:px-10 lg:px-20">
    <div class="flex items-center justify-between py-4">
      <NuxtLink to="/" class="flex items-center gap-3 font-semibold tracking-tight text-white">
        <span class="flex h-9 w-9 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-xs text-cyan-100">PD</span>
        <span class="hidden sm:inline">Patrick Danielsson</span>
      </NuxtLink>
      <nav class="flex items-center gap-2 text-sm text-slate-300 sm:gap-4">
        <NuxtLink to="/#services" class="hidden rounded-full px-3 py-2 transition hover:bg-white/[0.06] hover:text-white md:inline-flex">Systems</NuxtLink>
        <NuxtLink to="/#work" class="hidden rounded-full px-3 py-2 transition hover:bg-white/[0.06] hover:text-white md:inline-flex">Timeline</NuxtLink>
        <NuxtLink to="/#projects" class="rounded-full px-3 py-2 transition hover:bg-white/[0.06] hover:text-white">Projects</NuxtLink>
        <NuxtLink to="/#contact" class="rounded-full bg-white px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-100">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>
