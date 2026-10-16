import { useCallback, useEffect, useState } from 'react'

const KEY = 'theme'

function initialTheme() {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export default function useTheme() {
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      /* stockage indisponible : le thème par défaut reste utilisable */
    }
  }, [theme])

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])
  return { theme, toggle }
}
