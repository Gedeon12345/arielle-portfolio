import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { safeUrl } from '../utils/links'
import Button from './Button'

function Cover({ project }) {
  const [failed, setFailed] = useState(false)
  if (project.image && !failed) {
    return (
      <img
        src={project.image}
        alt={`Capture du projet ${project.name}`}
        loading="lazy"
        width="640"
        height="400"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover"
      />
    )
  }
  // Illustration de remplacement : clairement identifiée comme telle.
  return (
    <div className="relative flex h-full min-h-[220px] items-center justify-center overflow-hidden bg-navy p-6">
      <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-primary" aria-hidden="true" />
      <div className="absolute bottom-8 right-10 h-16 w-16 rotate-12 rounded-2xl bg-secondary" aria-hidden="true" />
      <p className="relative badge bg-highlight text-center text-navy">Illustration temporaire, pas une capture réelle</p>
    </div>
  )
}

export default function ProjectCard({ project }) {
  const demo = safeUrl(project.demoUrl)
  const repo = safeUrl(project.repoUrl)
  return (
    <article className="grid overflow-hidden rounded-3xl border border-line bg-surface md:grid-cols-2">
      <div className="min-h-[220px]"><Cover project={project} /></div>
      <div className="p-6 sm:p-8">
        <p className="badge bg-violet-100 text-violet-900 dark:bg-violet-500/25 dark:text-violet-100">{project.category}</p>
        <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{project.name}</h3>
        <p className="mt-3 leading-relaxed text-muted">{project.description}</p>
        {project.objectives?.length > 0 && (
          <ul className="mt-4 list-disc space-y-1 pl-5">
            {project.objectives.map((o) => <li key={o}>{o}</li>)}
          </ul>
        )}
        {project.technologies?.length > 0 && (
          <ul aria-label="Technologies utilisées" className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((t) => <li key={t} className="badge border border-line text-sm">{t}</li>)}
          </ul>
        )}
        {(demo || repo) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {demo && <Button href={demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={18} aria-hidden="true" /> Voir la démo</Button>}
            {repo && <Button href={repo} variant="outline" target="_blank" rel="noopener noreferrer"><Github size={18} aria-hidden="true" /> Code source</Button>}
          </div>
        )}
      </div>
    </article>
  )
}
