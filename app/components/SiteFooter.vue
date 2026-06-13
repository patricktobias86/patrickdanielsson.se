<template>
  <footer class="border-t border-white/10 bg-[#05070d] px-6 md:px-10 lg:px-20">
    <div class="mx-auto flex max-w-7xl flex-col gap-4 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <span>© {{ new Date().getFullYear() }} Patrick Danielsson</span>
      <div class="flex gap-4">
        <a href="https://github.com/patricktobias86" target="_blank" class="transition hover:text-cyan-100">GitHub</a>
        <a href="https://www.linkedin.com/in/patrick-danielsson" target="_blank" class="transition hover:text-cyan-100">LinkedIn</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Simple footer component; links to external profiles.
</script>
