import { Briefcase, Code2, Headset, Palette, TrendingUp } from 'lucide-react'

export const icons = { code: Code2, palette: Palette, briefcase: Briefcase, headset: Headset, trending: TrendingUp }

/** Classes statiques (nécessaires pour que Tailwind les détecte). */
export const tones = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-navy',
  accent: 'bg-accent text-navy',
  highlight: 'bg-highlight text-navy',
}

/** Teintes douces pour les badges (clair et sombre). */
export const tints = {
  primary: 'bg-violet-100 text-violet-900 dark:bg-violet-500/25 dark:text-violet-100',
  secondary: 'bg-pink-100 text-pink-900 dark:bg-pink-500/25 dark:text-pink-100',
  accent: 'bg-orange-100 text-orange-900 dark:bg-orange-500/25 dark:text-orange-100',
  highlight: 'bg-yellow-100 text-yellow-900 dark:bg-yellow-400/25 dark:text-yellow-100',
}
export const topBorders = {
  primary: 'border-t-primary', secondary: 'border-t-secondary', accent: 'border-t-accent', highlight: 'border-t-highlight',
}
