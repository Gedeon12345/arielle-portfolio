import { beyondCode } from '../data/portfolio'
import { tones } from '../utils/ui'
import SectionHeading from '../components/SectionHeading'

export default function BeyondCode() {
  return (
    <section id="au-dela-du-code" aria-labelledby="beyond-title" className="section-pad">
      <div className="container-page">
        <SectionHeading id="beyond-title" label="Au-delà du code" title="Comprendre, concevoir, valoriser" />
        <ol className="relative grid gap-10 md:grid-cols-3 md:gap-6">
          <div aria-hidden="true" className="absolute left-[2.2rem] top-0 hidden h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent md:left-[8%] md:right-[8%] md:top-[2.2rem] md:block md:h-1 md:w-auto md:bg-gradient-to-r" />
          {beyondCode.map((s) => (
            <li key={s.number} className="relative">
              <span className={`flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full font-display text-2xl font-bold ${tones[s.tone]}`}>{s.number}</span>
              <h3 className="mt-4 text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
