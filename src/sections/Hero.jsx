import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { profile } from '../data/portfolio'
import Button from '../components/Button'

function Visual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]" role="img" aria-label="Composition graphique provisoire avec le monogramme AW">
      <div className="absolute left-[12%] top-[4%] h-[76%] w-[76%] rounded-full bg-primary" />
      <div className="absolute bottom-[8%] right-[2%] h-[36%] w-[36%] rotate-12 rounded-[28%] bg-secondary" />
      <div className="absolute bottom-[14%] left-[2%] h-[24%] w-[24%] rounded-full bg-accent" />
      <div className="absolute right-[10%] top-0 h-[13%] w-[13%] -rotate-12 rounded-2xl bg-highlight" />
      <span className="absolute left-[27%] top-[26%] font-display text-[min(26vw,7.5rem)] font-bold leading-none text-white">{profile.monogram}</span>
      <span className="absolute left-0 top-[18%] rounded-2xl border border-line bg-surface px-3 py-2 font-display text-sm font-bold shadow-float">{'</>'} Technologie</span>
      <span className="absolute bottom-[30%] right-0 rounded-2xl border border-line bg-surface px-3 py-2 font-display text-sm font-bold shadow-float">Créativité</span>
      <span className="absolute bottom-0 left-[14%] rounded-2xl bg-navy px-3 py-2 font-display text-sm font-bold text-white">Business</span>
    </div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  })

  return (
    <section id="accueil" aria-labelledby="hero-title" className="pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.p {...fade(0)} className="badge bg-highlight text-navy">Technologie · Créativité · Business</motion.p>
          <motion.h1 {...fade(0.08)} id="hero-title" className="mt-5 text-5xl font-bold leading-none tracking-tight sm:text-7xl lg:text-[5.25rem]">
            Arielle <span className="text-link">Watchou</span>
          </motion.h1>
          <motion.p {...fade(0.16)} className="mt-5 font-display text-lg font-medium sm:text-2xl">{profile.title}</motion.p>
          <motion.p {...fade(0.24)} className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{profile.tagline}</motion.p>
          <motion.div {...fade(0.32)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#projets">Voir mes projets <ArrowRight size={18} aria-hidden="true" /></Button>
            <Button href="#contact" variant="outline">Me contacter</Button>
          </motion.div>
        </div>
        <motion.div {...fade(0.2)}>
          <Visual />
          {!profile.photo && <p className="mt-3 text-center text-sm text-muted">Composition provisoire : emplacement de la photo professionnelle.</p>}
        </motion.div>
      </div>
    </section>
  )
}
