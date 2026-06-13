import type { Config } from 'tailwindcss'

// Tailwind CSS configuration. This file extends the default color palette
// with custom brand colours and a soft shadow used throughout the site.
export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/composables/**/*.{vue,js,ts}',
    './app/pages/**/*.{vue,js,ts}',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#111827', // dark brand colour
          300: '#374151'  // mid tone used for backgrounds
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.07)'
      }
    }
  }
}
