/**
 * Envoi du formulaire de contact.
 * Aucun envoi n'est simulé : sans endpoint configuré, le service le dit clairement.
 * Pour connecter un service, renseigner VITE_CONTACT_ENDPOINT (voir README).
 */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT

export const isContactConfigured = Boolean(ENDPOINT)

export async function sendContactMessage(data) {
  if (!ENDPOINT) return { ok: false, code: 'NOT_CONFIGURED' }
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
    return res.ok ? { ok: true } : { ok: false, code: 'SERVER_ERROR' }
  } catch {
    return { ok: false, code: 'NETWORK_ERROR' }
  }
}
