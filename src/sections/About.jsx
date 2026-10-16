import { about } from '../data/portfolio'
import { icons, tones } from '../utils/ui'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <section id="a-propos" aria-labelledby="about-title" className="section-pad">
      <div className="container-page">
        <SectionHeading id="about-title" label="À propos" title="Une ingénieure qui pense aussi produit" />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="max-w-prose space-y-4 text-base leading-relaxed sm:text-lg">
            {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
          <ul className="flex flex-col gap-4">
            {about.cards.map((c, i) => {
              const Icon = icons[c.icon]
              return (
                <li key={c.title} className={`flex gap-4 rounded-3xl border border-line bg-surface p-5 ${i === 1 ? 'sm:ml-8' : ''}`}>
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${tones[c.tone]}`}><Icon size={22} aria-hidden="true" /></span>
                  <div>
                    <h3 className="text-xl font-bold">{c.title}</h3>
                    <p className="mt-1 text-muted">{c.text}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
