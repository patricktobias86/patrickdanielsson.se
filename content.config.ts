import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    experience: defineCollection({
      type: 'data',
      source: 'content/*.yml',
      schema: z.array(z.object({
        role: z.string(),
        org: z.string(),
        period: z.string(),
        bullets: z.array(z.string())
      })) as unknown as z.ZodObject<any>
    }),
    content: defineCollection({
      type: 'page',
      source: 'content/*.md'
    })
  }
})
