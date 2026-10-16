import { skillCategories } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'

export default function Skills() {
  return (
    <section id="competences" aria-labelledby="skills-title" className="section-pad">
      <div className="container-page">
        <SectionHeading id="skills-title" label="Compétences" title="Quatre terrains de jeu" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((c, i) => (
            <SkillCard key={c.id} category={c} className={i % 2 === 1 ? 'lg:mt-8' : ''} />
          ))}
        </div>
      </div>
    </section>
  )
}
