import { contact, navLinks, profile } from '../data/portfolio'
import { safeUrl } from '../utils/links'

export default function Footer() {
  const socials = [
    { label: 'LinkedIn', href: safeUrl(contact.linkedin) },
    { label: 'GitHub', href: safeUrl(contact.github) },
  ].filter((s) => s.href)

  return (
    <footer className="bg-navy text-white">
      <div className="container-page flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl font-bold">{profile.name}</p>
          <p className="text-highlight">{profile.footerLine}</p>
        </div>
        <nav aria-label="Navigation du pied de page" className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="py-1 hover:underline">{l.label}</a>
          ))}
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="py-1 hover:underline">{s.label}</a>
          ))}
        </nav>
        <p className="text-sm text-white/80">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  )
}
