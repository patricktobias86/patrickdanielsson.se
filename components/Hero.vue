<template>
  <section class="max-w-6xl mx-auto py-16 md:py-24 grid md:grid-cols-2 gap-10">
    <div>
      <h1 class="text-4xl md:text-5xl font-bold leading-tight">
        Marketing Automation &amp; Technical PM
      </h1>
      <p class="mt-5 text-lg text-gray-600">
        HubSpot automation, growth experiments, and multi-market web delivery across the Nordics.
      </p>
      <div class="mt-8 flex gap-4">
        <a href="#contact" class="px-5 py-3 rounded-xl bg-black text-white shadow-soft">Start a project</a>
        <a href="#projects" class="px-5 py-3 rounded-xl border">See my work</a>
      </div>
    </div>
    <div class="rounded-3xl p-8 border shadow-soft">
      <ul class="space-y-3 text-sm">
        <li><strong>Based in:</strong> {{ runtime.public.location }}</li>
        <li><strong>Email:</strong> <a :href="`mailto:${runtime.public.contactEmail}`" class="underline">{{ runtime.public.contactEmail }}</a></li>
        <li><strong>Phone:</strong> {{ runtime.public.contactPhone }}</li>
      </ul>
      <p class="mt-6 text-gray-600">Award: Belron Exceptional Customer Service (2016). Education: Media &amp; Webdesign, Jensen Gymnasium.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
// Access runtime configuration to display contact details and location. Nuxt's
// useRuntimeConfig exposes values defined in nuxt.config.ts under runtimeConfig.
const runtime = useRuntimeConfig()
</script>