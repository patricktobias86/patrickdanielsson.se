// /composables/useTheme.ts
export function useTheme() {
  const isDark = useState<boolean>('isDark', () => false)

  if (process.client) {
    const stored = localStorage.getItem('theme')
    if (stored) {
      isDark.value = stored === 'dark'
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  }

  function toggleTheme() {
    isDark.value = !isDark.value
    if (process.client) {
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }
  }

  return { isDark, toggleTheme }
}
