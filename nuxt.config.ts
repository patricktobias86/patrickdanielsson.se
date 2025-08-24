// Nuxt configuration for Patrick Danielsson's personal site.
// This config sets up modules for Tailwind CSS, content, and image support,
// defines metadata for SEO and social sharing, and exposes runtime configuration
// via public and private environment variables.

export default defineNuxtConfig({
  compatibilityDate: '2024-12-01',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/image'],
  app: {
    head: {
      title: 'Patrick Danielsson – Marketing Automation & Tech PM',
      meta: [
        { name: 'description', content: 'Marketing Automation (HubSpot), technical PM, growth & web dev across the Nordics.' },
        { property: 'og:title', content: 'Patrick Danielsson' },
        { property: 'og:description', content: 'Marketing Automation, HubSpot, growth & technical project management.' },
        { property: 'og:type', content: 'website' }
      ]
    }
  },
  runtimeConfig: {
    githubUsername: process.env.GITHUB_USERNAME || 'patricktobias86',
    githubToken: process.env.GITHUB_TOKEN || '',
    public: {
      contactEmail: process.env.CONTACT_EMAIL || 'hej@patrickdanielsson.se',
      contactPhone: process.env.CONTACT_PHONE || '+46 (0) 76 319 87 58',
      location: 'Stockholm, Sweden'
    }
  },
  nitro: {
    prerender: {
      // Pre-render the GitHub API route during build to statically embed the
      // repository data. This ensures the site can be fully static on Netlify.
      routes: ['/api/github']
    }
  },
  image: {
    // Allow GitHub avatars (and other external images) to be optimized by
    // @nuxt/image.
    domains: ['avatars.githubusercontent.com']
  }
})