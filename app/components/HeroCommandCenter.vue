<script setup lang="ts">
const runtime = useRuntimeConfig()

const heroMetrics = [
  { value: '+66%', label: 'Conversion Growth', tone: 'emerald' },
  { value: '10+', label: 'Years Experience', tone: 'cyan' },
  { value: '4', label: 'Nordic Markets', tone: 'violet' },
  { value: '20+', label: 'Automation Projects', tone: 'amber' },
] as const

const signals = [
  'HubSpot workflows online',
  'Telegram integrations active',
  'AI agent prototypes shipping',
  'Nordic analytics normalized',
]
</script>

<template>
  <section
    class="relative -mx-6 min-h-[calc(100svh-5rem)] overflow-hidden px-6 pt-20 md:-mx-10 md:px-10 lg:-mx-20 lg:px-20"
    aria-labelledby="hero-title"
  >
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.15),transparent_30%),linear-gradient(180deg,#05070d_0%,#08111f_58%,#05070d_100%)]" />
    <div class="command-grid absolute inset-0 opacity-45" />
    <div class="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
    <div class="nodes absolute inset-0" aria-hidden="true">
      <span class="left-[14%] top-[28%]" />
      <span class="left-[64%] top-[18%]" />
      <span class="left-[82%] top-[48%]" />
      <span class="left-[38%] top-[72%]" />
      <span class="left-[8%] top-[70%]" />
    </div>

    <div class="relative mx-auto flex max-w-7xl flex-col gap-12 pb-16 lg:min-h-[calc(100svh-8rem)] lg:flex-row lg:items-center lg:justify-between">
      <div class="hero-copy max-w-4xl pt-8 lg:pt-0">
        <p class="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-cyan-100">
          <span class="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
          Command Center Portfolio
        </p>
        <h1 id="hero-title" class="mt-7 max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
          I build automation, AI agents and digital products.
        </h1>
        <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
          From Nordic enterprise platforms to Telegram ecosystems, marketing automation and SaaS products.
        </p>
        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 hover:bg-cyan-100"
          >
            View Projects
            <Icon name="material-symbols:arrow-forward-rounded" class="h-4 w-4" />
          </a>
          <a
            :href="`mailto:${runtime.public.contactEmail}`"
            class="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-white/[0.08]"
          >
            Contact Me
            <Icon name="material-symbols:alternate-email-rounded" class="h-4 w-4" />
          </a>
        </div>
      </div>

      <aside class="hero-panel w-full max-w-xl rounded-[2rem] border border-white/10 bg-slate-950/50 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl lg:w-[31rem]">
        <div class="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
          <div class="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Systems</p>
              <h2 class="mt-1 text-sm font-medium text-white">Builder Console</h2>
            </div>
            <span class="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-xs font-medium text-emerald-200">Live</span>
          </div>

          <div class="mt-4 grid grid-cols-2 gap-3">
            <MetricCard
              v-for="metric in heroMetrics"
              :key="metric.label"
              :value="metric.value"
              :label="metric.label"
              :tone="metric.tone"
            />
          </div>

          <div class="mt-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
            <div class="mb-3 flex items-center justify-between">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Signal Feed</p>
              <Icon name="material-symbols:network-check-rounded" class="h-5 w-5 text-cyan-200" />
            </div>
            <ul class="space-y-3">
              <li v-for="signal in signals" :key="signal" class="flex items-center gap-3 text-sm text-slate-300">
                <span class="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.75)]" />
                {{ signal }}
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.command-grid {
  background-image:
    linear-gradient(rgba(148, 163, 184, 0.14) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.14) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(circle at 50% 35%, black 0%, transparent 72%);
}

.nodes span {
  position: absolute;
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 9999px;
  background: rgb(103 232 249);
  box-shadow: 0 0 24px rgba(103, 232, 249, 0.72);
  animation: nodePulse 4.2s ease-in-out infinite;
}

.nodes span:nth-child(2),
.nodes span:nth-child(4) {
  animation-delay: 1.4s;
}

.nodes span:nth-child(3),
.nodes span:nth-child(5) {
  animation-delay: 2.2s;
}

.hero-copy,
.hero-panel {
  animation: riseIn 700ms ease both;
}

.hero-panel {
  animation-delay: 140ms;
}

@keyframes nodePulse {
  0%,
  100% {
    opacity: 0.28;
    transform: scale(0.9);
  }
  50% {
    opacity: 0.95;
    transform: scale(1.25);
  }
}

@keyframes riseIn {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
