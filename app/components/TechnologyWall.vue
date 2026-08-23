<script setup lang="ts">
const categories = [
  {
    name: 'Automation',
    icon: 'material-symbols:automation',
    tools: ['HubSpot', 'Node-RED', 'Zapier', 'Make'],
    note: 'Workflow glue, CRM movement, and operational triggers.',
    accent: 'bg-amber-200 text-stone-950',
    shape: 'rounded-[2rem_4rem_2.5rem_1.5rem]',
    offset: 'lg:mt-16 lg:-rotate-2',
  },
  {
    name: 'Development',
    icon: 'carbon:development',
    tools: ['Nuxt', 'Vue', 'Node.js', 'TypeScript'],
    note: 'Fast product surfaces with enough structure to keep growing.',
    accent: 'bg-stone-100 text-stone-950',
    shape: 'rounded-[4rem_2rem_1.75rem_3rem]',
    offset: 'lg:mt-0 lg:rotate-1',
  },
  {
    name: 'Analytics',
    icon: 'material-symbols:analytics',
    tools: ['GA4', 'Looker Studio', 'Google Tag Manager'],
    note: 'Readable measurement for the decisions that actually matter.',
    accent: 'bg-rose-200 text-stone-950',
    shape: 'rounded-[1.75rem_3.5rem_2rem_4rem]',
    offset: 'lg:-mt-4 lg:ml-10 lg:rotate-1',
  },
  {
    name: 'AI',
    icon: 'mingcute:ai-fill',
    tools: ['OpenAI', 'Agents', 'Prompt Engineering'],
    note: 'Agentic helpers, structured prompts, and human-in-the-loop systems.',
    accent: 'bg-lime-200 text-stone-950',
    shape: 'rounded-[3rem_1.5rem_4rem_2rem]',
    offset: 'lg:mt-12 lg:-ml-6 lg:-rotate-1',
  },
]

const tools = categories.flatMap((category) =>
  category.tools.map((tool) => ({
    name: tool,
    category: category.name,
  })),
)
</script>

<template>
  <section id="tech-stack" class="relative mx-auto max-w-7xl py-20 sm:py-28" aria-labelledby="tech-title">
    <div class="absolute left-1/2 top-24 -z-10 h-72 w-[min(42rem,90vw)] -translate-x-1/2 rounded-[45%_55%_60%_40%] bg-[#f2cf91]/10 blur-3xl" />

    <div class="relative max-w-4xl">
      <p class="text-sm font-medium uppercase tracking-[0.22em] text-amber-200/80">Technology Wall</p>
      <h2 id="tech-title" class="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-stone-50 sm:text-5xl">
        A practical stack, arranged less like inventory and more like a workshop.
      </h2>
      <p class="mt-5 max-w-2xl text-base leading-8 text-stone-300">
        The tools shift by project, but the shape stays familiar: automate the repetitive,
        build the product layer, measure what changed, then add AI where it can carry real weight.
      </p>
      <div class="absolute -bottom-9 right-0 hidden rounded-[2rem_1rem_2.5rem_1.25rem] bg-amber-100 px-5 py-3 text-sm font-semibold text-stone-950 shadow-2xl shadow-black/30 rotate-2 md:block">
        Systems over stacks
      </div>
    </div>

    <div class="mt-16 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:gap-x-10 lg:gap-y-2">
      <article
        v-for="category in categories"
        :key="category.name"
        :class="[category.shape, category.offset]"
        class="group relative min-h-64 overflow-hidden border border-stone-100/10 bg-[#17130f] p-6 shadow-2xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:border-amber-100/25 hover:bg-[#201911] sm:p-8"
      >
        <div
          class="absolute -right-10 -top-10 h-36 w-36 rounded-[40%_60%_50%_50%] opacity-80 transition duration-500 group-hover:scale-110"
          :class="category.accent"
        />
        <div class="relative flex items-start justify-between gap-6">
          <div>
            <p class="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">{{ category.name }}</p>
            <h3 class="mt-4 max-w-sm text-2xl font-semibold tracking-tight text-stone-50">
              {{ category.note }}
            </h3>
          </div>
          <Icon :name="category.icon" class="mt-1 h-6 w-6 shrink-0 text-black" />
        </div>
        <div class="relative -ml-3 mt-8 flex flex-wrap gap-2 sm:-ml-6">
          <span
            v-for="tool in category.tools"
            :key="tool"
            class="rounded-[1.25rem_0.75rem_1.5rem_0.85rem] border border-stone-100/10 bg-stone-950/60 px-4 py-2 text-sm font-medium text-stone-200 shadow-lg shadow-black/15"
          >
            {{ tool }}
          </span>
        </div>
      </article>
    </div>

    <div class="relative left-1/2 mt-14 w-screen -translate-x-1/2 overflow-hidden py-4">
      <div class="experience-feed flex w-max hover:[animation-play-state:paused]">
        <div
          v-for="copy in 2"
          :key="copy"
          :aria-hidden="copy === 2"
          class="flex shrink-0 gap-3 pr-3"
        >
          <span
            v-for="tool in tools"
            :key="`${copy}-${tool.name}`"
            class="rounded-full border border-stone-100/10 bg-stone-100 px-5 py-3 text-sm font-semibold text-stone-950 shadow-xl shadow-black/10"
          >
            {{ tool.name }}
            <span class="ml-2 text-stone-500">{{ tool.category }}</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-feed {
  animation: tech-drift 28s linear infinite;
}

@keyframes tech-drift {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .experience-feed {
    animation-play-state: paused;
  }
}
</style>
