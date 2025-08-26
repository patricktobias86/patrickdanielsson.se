<template>
  <section id="contact" class="max-w-6xl mx-auto py-20">
    <div class="rounded-3xl border shadow-soft p-10 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h2 class="text-2xl font-semibold">Let’s improve your funnel</h2>
        <p class="text-gray-600 mt-2">Automation, CRO, KPIs &amp; shipping web quickly.</p>
      </div>
      <div class="mt-6 md:mt-0 flex gap-4">
        <a :href="`mailto:${runtime.public.contactEmail}`" class="px-5 py-3 rounded-xl bg-black text-white">Email me</a>
        <a :href="`mailto:${runtime.public.contactEmail}`" target="_blank" class="px-5 py-3 rounded-xl border">Book a call</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Access runtime configuration to construct the mailto link for contact.
const runtime = useRuntimeConfig()
</script>