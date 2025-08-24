import type { Config } from 'tailwindcss'

// Tailwind CSS configuration. This file extends the default color palette
// with custom brand colours and a soft shadow used throughout the site.
export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
    './content/**/*.{md,yml}'
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