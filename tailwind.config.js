/** Design system : les couleurs pointent vers des variables CSS (index.css) pour gérer les thèmes. */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        secondary: '#EC4899',
        accent: '#FF6B35',
        highlight: '#FDE047',
        navy: '#172554',
        bg: 'var(--c-bg)',
        surface: 'var(--c-surface)',
        ink: 'var(--c-text)',
        muted: 'var(--c-muted)',
        line: 'var(--c-border)',
        link: 'var(--c-link)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: { float: '0 8px 24px rgba(23, 37, 84, 0.14)' },
    },
  },
  plugins: [],
}
