const variants = {
  primary: 'bg-primary text-white hover:bg-violet-700 active:scale-[.98]',
  outline: 'border-2 border-ink text-ink hover:bg-ink hover:text-bg active:scale-[.98]',
}

/** Lien (si href) ou bouton. Les liens servent à naviguer, les boutons à agir. */
export default function Button({ href, variant = 'primary', className = '', children, ...props }) {
  const cls = `inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`
  return href ? (
    <a href={href} className={cls} {...props}>{children}</a>
  ) : (
    <button className={cls} {...props}>{children}</button>
  )
}
