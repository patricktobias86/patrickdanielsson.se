<script setup lang="ts">
const runtime = useRuntimeConfig()
</script>

<template>
  <section id="contact" class="pb-24 pt-12 sm:pb-32" aria-labelledby="contact-title">
    <div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.32)] backdrop-blur sm:p-10 lg:p-12">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_90%_60%,rgba(139,92,246,0.12),transparent_30%)]" />
      <div class="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-3xl">
          <p class="text-sm font-medium uppercase tracking-[0.22em] text-cyan-200/80">Contact</p>
          <h2 id="contact-title" class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Need help building smarter systems?
          </h2>
          <p class="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            I help teams automate workflows, build technical products, improve digital operations and turn ideas into working systems.
          </p>
        </div>
        <a
          :href="`mailto:${runtime.public.contactEmail}?subject=Book%20a%20call`"
          class="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 hover:bg-cyan-100"
        >
          Book a Call
          <Icon name="material-symbols:calendar-month-rounded" class="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
</template>
