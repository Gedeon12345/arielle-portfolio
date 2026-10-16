import { projects } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const published = projects.filter((p) => p.published)
  return (
    <section id="projets" aria-labelledby="projects-title" className="section-pad">
      <div className="container-page">
        <SectionHeading id="projects-title" label="Projets" title="Ce que j’ai construit" />
        <div className="flex flex-col gap-8">
          {published.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  )
}
