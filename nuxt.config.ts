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
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/mdc', '@nuxt/icon', '@nuxtjs/seo', '@nuxt/content', '@nuxt/fonts'],

  app: {
    head: {
      title: 'Patrick Danielsson - Automation, AI Agents & Digital Products',
      meta: [
        { name: 'description', content: 'Technical product builder creating automation, AI agents, Telegram ecosystems, marketing automation and SaaS products across Nordic markets.' },
        { property: 'og:title', content: 'Patrick Danielsson' },
        { property: 'og:description', content: 'Automation architecture, AI systems, SaaS products and technical leadership across Nordic enterprise platforms.' },
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
      location: 'Stockholm, Sweden'
    }
  },

  nitro: {
    externals: {
      inline: ['unhead']
    },
    prerender: {
      // Pre-render the GitHub API route during build to statically embed the
      // repository data so the app can serve it without a live GitHub request.
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

  icon: {
    serverBundle: 'remote',
  },

  devtools: {
    enabled: false,
  },
})