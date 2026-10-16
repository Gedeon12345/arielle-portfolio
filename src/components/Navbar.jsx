import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'
import ThemeToggle from './ThemeToggle'
import Button from './Button'

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('accueil')
  const reduce = useReducedMotion()

  // Section active, suivie au défilement.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Échap ferme le menu mobile.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const link = (id, label, mobile) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={() => setOpen(false)}
      aria-current={active === id ? 'true' : undefined}
      className={
        mobile
          ? `block border-b border-line py-4 font-display text-2xl font-bold ${active === id ? 'text-link' : ''}`
          : `border-b-2 py-1 text-[15px] font-medium transition ${active === id ? 'border-primary text-link' : 'border-transparent hover:text-link'}`
      }
    >
      {label}
    </a>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg">
      <nav aria-label="Navigation principale" className="container-page flex h-16 items-center justify-between lg:h-[72px]">
        <a href="#accueil" className="flex items-center gap-3 font-display text-lg font-bold">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm text-white">{profile.monogram}</span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => link(l.id, l.label))}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Button href="#contact" onClick={() => setOpen(false)}>Me contacter</Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-line bg-bg lg:hidden"
          >
            <div className="container-page max-h-[calc(100dvh-4rem)] overflow-y-auto pb-6 pt-2">
              {navLinks.map((l) => link(l.id, l.label, true))}
              <Button href="#contact" onClick={() => setOpen(false)} className="mt-6 w-full">Me contacter</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
