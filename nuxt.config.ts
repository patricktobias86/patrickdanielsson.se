// Nuxt configuration for Patrick Danielsson's personal site.
// This config sets up modules for Tailwind CSS, content, and image support,
// defines metadata for SEO and social sharing, and exposes runtime configuration
// via public and private environment variables.

export default defineNuxtConfig({
  site: { 
    url: 'https://patrickdanielsson.se', 
    name: 'Patrick Danielsson' 
  }, 
  compatibilityDate: '2024-12-01',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/mdc', '@nuxt/icon', '@nuxtjs/seo', '@nuxt/content'],
  app: {
    head: {
      title: 'Patrick Danielsson – MarTech',
      meta: [
        { name: 'description', content: 'Marketing Automation (HubSpot), technical PM, growth & web dev across the Nordics.' },
        { property: 'og:title', content: 'Patrick Danielsson' },
        { property: 'og:description', content: 'Marketing Automation, HubSpot, growth & technical project management.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: `defineOgImageComponent('Pergel')` }
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
  },
  ogImage: {
    defaults: {
      extension: 'jpeg',
    }
  },
})