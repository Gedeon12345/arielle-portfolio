import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={dark ? 'Passer au mode clair' : 'Passer au mode sombre'}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition hover:border-primary"
    >
      {dark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
    </button>
  )
}
