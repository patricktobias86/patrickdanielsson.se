<!-- /components/About.vue -->
<template>
  <article id="about" class="max-w-6xl mx-auto py-16">
    <h2 class="text-2xl font-semibold">About</h2>
    <div class="mt-8 leading-9 space-y-8">
      <div class="p-6 rounded-3xl border dark:border-gray-700 shadow-soft">
        <p>I help teams <strong>automate marketing</strong>, <strong>optimize conversion</strong> and <strong>ship web projects</strong> across the Nordics.</p>
        <h3 class="font-medium">Highlights</h3>
        <ul class="mt-3 list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
        <li>Grew conversion <span
    class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
  ><Icon name="material-symbols:show-chart" /><p class="text-sm whitespace-nowrap">+66%</p>
  </span> via A/B testing &amp; growth tactics.  </li>
        <li>Led multi–market site migrations and defined a <strong>master data model</strong> across 4 markets.  </li>
        <li>Built automated <strong>dashboards</strong> (GA + ERP) and standardized KPIs Nordic-wide.  </li>
        </ul>
        <p><strong>Recent:</strong> Marketing Automation Specialist @ <em>The Incredibly Journey</em> (HubSpot).<br><strong>Before:</strong> Nordic Tech Lead / Nordic Digital Manager @ <em>Carglass Nordics</em>; Technical PM, Web Developer.<br><strong>Tools:</strong> HubSpot, CMS, low/no-code, AI/bots, analytics, automation.</p>
        <blockquote>
        <p><span class="inline-flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-1 text-purple-700"><Icon name="material-symbols:add-location-rounded" /></span> Stockholm, Sweden · Available for consulting</p>
        </blockquote>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
// Access runtime configuration to display contact details and location. Nuxt's
// useRuntimeConfig exposes values defined in nuxt.config.ts under runtimeConfig.
const runtime = useRuntimeConfig()
</script>