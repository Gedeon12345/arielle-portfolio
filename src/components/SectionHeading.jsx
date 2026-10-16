export default function SectionHeading({ label, title, as: Tag = 'h2', id }) {
  return (
    <header className="mb-10 max-w-3xl">
      {label && <p className="mb-2 font-semibold text-link">{label}</p>}
      <Tag id={id} className="text-3xl font-bold leading-tight sm:text-5xl">{title}</Tag>
    </header>
  )
}
