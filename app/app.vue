<template>
  <div :class="[{ dark: isDark }, 'min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100']">
    <SiteHeader />
    <main class="px-6 md:px-10 lg:px-20">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
// Import shared layout components used across all pages. These components
// provide the header, footer and wrapper styling for the site.
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'
import { useTheme } from '~/composables/useTheme'
const { isDark } = useTheme()
useSchemaOrg([
  {
    "@type": "Person",
  name: "Patrick Danielsson",
  description: "I help teams automate marketing, optimize conversion and ship web projects.",
  sameAs: [
    "https://github.com/patricktobias86",
    "https://www.linkedin.com/in/patrick-danielsson",
    "https://patrickdanielsson.se"
  ],
  url: "https://patrickdanielsson.se"
}
])
</script>