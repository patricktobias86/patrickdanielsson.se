<script setup lang="ts">
const activities = [
  {
    title: 'Latest commits',
    status: 'Sync pending',
    detail: 'Recent product, automation and portfolio changes will appear here.',
    icon: 'material-symbols:commit-rounded',
  },
  {
    title: 'Latest repositories',
    status: 'GitHub bridge ready',
    detail: 'A future feed can surface active experiments, tools and shipped utilities.',
    icon: 'material-symbols:folder-code-rounded',
  },
  {
    title: 'Latest releases',
    status: 'Release stream',
    detail: 'Versioned launches, app updates and public project milestones can be connected next.',
    icon: 'material-symbols:rocket-launch-rounded',
  },
]
</script>

<template>
  <section class="mx-auto max-w-7xl py-20 sm:py-28" aria-labelledby="activity-title">
    <div class="rounded-[2rem] border border-white/10 bg-slate-950/55 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.28)] backdrop-blur">
      <div class="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-sm font-medium uppercase tracking-[0.22em] text-cyan-200/80">Live Activity</p>
          <h2 id="activity-title" class="mt-3 text-3xl font-semibold tracking-tight text-white">Latest Work</h2>
        </div>
        <span class="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          Dashboard feed placeholder
        </span>
      </div>

      <div class="mt-5 grid gap-4 lg:grid-cols-3">
        <article
          v-for="activity in activities"
          :key="activity.title"
          class="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.065]"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-cyan-200">
              <Icon :name="activity.icon" class="h-5 w-5" />
            </div>
            <span class="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-slate-400">{{ activity.status }}</span>
          </div>
          <h3 class="mt-6 text-lg font-semibold text-white">{{ activity.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-400">{{ activity.detail }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
