/** Retourne l'URL si elle est http(s) valide, sinon null (le lien n'est alors pas affiché). */
export function safeUrl(value) {
  if (!value) return null
  try {
    const url = new URL(value)
    return ['http:', 'https:'].includes(url.protocol) ? url.href : null
  } catch {
    return null
  }
}
