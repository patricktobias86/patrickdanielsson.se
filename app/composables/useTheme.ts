// /composables/useTheme.ts
export function useTheme() {
  const isDark = useState<boolean>('isDark', () => true)

  if (process.client) {
    const stored = localStorage.getItem('theme')
    if (stored) {
      isDark.value = stored === 'dark'
    } else {
      isDark.value = true
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
