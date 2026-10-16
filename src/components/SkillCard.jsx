import { icons, tints, tones, topBorders } from '../utils/ui'

export default function SkillCard({ category, className = '' }) {
  const Icon = icons[category.icon]
  return (
    <article className={`card border-t-[6px] transition duration-200 hover:-translate-y-1 hover:shadow-float ${topBorders[category.tone]} ${className}`}>
      <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${tones[category.tone]}`}>
        <Icon size={22} aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-xl font-bold">{category.title}</h3>
      <p className="mt-2 text-muted">{category.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {category.skills.map((s) => (
          <li key={s} className={`badge text-sm ${tints[category.tone]}`}>{s}</li>
        ))}
      </ul>
    </article>
  )
}
