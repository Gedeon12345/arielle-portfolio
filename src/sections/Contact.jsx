import { useRef, useState } from 'react'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { contact } from '../data/portfolio'
import { safeUrl } from '../utils/links'
import { sendContactMessage } from '../services/contactService'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

const EMPTY = { name: '', email: '', subject: '', message: '' }
const FIELDS = [
  { key: 'name', label: 'Nom complet', type: 'text', autoComplete: 'name' },
  { key: 'email', label: 'Adresse e-mail', type: 'email', autoComplete: 'email' },
  { key: 'subject', label: 'Objet', type: 'text' },
  { key: 'message', label: 'Message', type: 'textarea' },
]
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Indiquez votre nom complet.'
  if (!v.email.trim()) e.email = 'Indiquez votre adresse e-mail.'
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Saisissez une adresse e-mail valide, par exemple nom@domaine.com.'
  if (!v.subject.trim()) e.subject = 'Indiquez l’objet de votre message.'
  if (!v.message.trim()) e.message = 'Écrivez votre message.'
  return e
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error | unconfigured
  const busy = useRef(false)

  const onChange = (key) => (ev) => {
    setValues((v) => ({ ...v, [key]: ev.target.value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  async function onSubmit(ev) {
    ev.preventDefault()
    if (busy.current) return
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      document.getElementById(`contact-${Object.keys(found)[0]}`)?.focus()
      return
    }
    busy.current = true
    setStatus('loading')
    const res = await sendContactMessage({ ...values, name: values.name.trim(), email: values.email.trim() })
    busy.current = false
    if (res.ok) {
      setValues(EMPTY)
      setStatus('success')
    } else {
      setStatus(res.code === 'NOT_CONFIGURED' ? 'unconfigured' : 'error') // les données saisies sont conservées
    }
  }

  const email = contact.email
  const links = [
    email && { label: email, href: `mailto:${email}`, Icon: Mail },
    contact.phone && { label: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}`, Icon: Phone },
    safeUrl(contact.linkedin) && { label: 'LinkedIn', href: safeUrl(contact.linkedin), Icon: Linkedin, external: true },
    safeUrl(contact.github) && { label: 'GitHub', href: safeUrl(contact.github), Icon: Github, external: true },
  ].filter(Boolean)

  const inputCls = (k) =>
    `mt-1.5 block w-full rounded-xl border bg-bg px-4 py-3 text-base text-ink ${errors[k] ? 'border-red-600 border-2' : 'border-line'}`

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-pad">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionHeading id="contact-title" label="Contact" title={contact.title} />
          <p className="max-w-prose text-base leading-relaxed text-muted sm:text-lg">{contact.text}</p>
          {links.length > 0 && (
            <ul className="mt-6 space-y-3">
              {links.map(({ label, href, Icon, external }) => (
                <li key={href}>
                  <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="inline-flex min-h-[44px] items-center gap-3 font-medium hover:text-link">
                    <Icon size={20} aria-hidden="true" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <form onSubmit={onSubmit} noValidate className="card flex flex-col gap-5 p-6 sm:p-8">
          {FIELDS.map(({ key, label, type, autoComplete }) => {
            const id = `contact-${key}`
            const common = {
              id, name: key, value: values[key], onChange: onChange(key), autoComplete,
              required: true, 'aria-required': 'true', 'aria-invalid': errors[key] ? 'true' : 'false',
              'aria-describedby': errors[key] ? `${id}-error` : undefined, disabled: status === 'loading',
              className: inputCls(key),
            }
            return (
              <div key={key}>
                <label htmlFor={id} className="text-sm font-semibold">{label}</label>
                {type === 'textarea' ? <textarea rows={5} {...common} /> : <input type={type} {...common} />}
                {errors[key] && <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-red-700 dark:text-red-400">Erreur : {errors[key]}</p>}
              </div>
            )
          })}

          <Button type="submit" disabled={status === 'loading'} aria-busy={status === 'loading'}>
            {status === 'loading' ? 'Envoi en cours…' : 'Envoyer mon message'}
          </Button>

          <div aria-live="polite">
            {status === 'success' && <p role="status" className="rounded-xl bg-green-100 p-4 font-medium text-green-900">Votre message a bien été envoyé. Merci !</p>}
            {status === 'error' && <p role="alert" className="rounded-xl bg-red-100 p-4 font-medium text-red-900">Le message n’a pas pu être envoyé. Vos informations sont conservées : réessayez dans un instant{email ? <>, ou écrivez à <a className="underline" href={`mailto:${email}`}>{email}</a></> : ''}.</p>}
            {status === 'unconfigured' && <p role="alert" className="rounded-xl bg-yellow-100 p-4 font-medium text-yellow-900">Le formulaire n’est pas encore connecté : ce message n’a pas été envoyé.{email ? <> Vous pouvez écrire directement à <a className="underline" href={`mailto:${email}`}>{email}</a>.</> : ''}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
