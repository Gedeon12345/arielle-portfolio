# Portfolio d'Arielle Watchou

Site vitrine (React + Vite + Tailwind CSS + Framer Motion + Lucide).

## Prérequis
Node.js 18 ou plus récent.

## Commandes
```
npm install
npm run dev      # développement
npm run build    # build de production
npm run preview  # prévisualiser le build
```

## Organisation
- `src/data/portfolio.js` : tout le contenu (textes, compétences, projets, coordonnées). Une valeur `null` n'est pas affichée.
- `src/components/` : composants réutilisables (Navbar, Button, Footer...).
- `src/sections/` : sections de la page.
- `src/hooks/useTheme.js` : thème clair/sombre (mémorisé dans localStorage).
- `src/services/contactService.js` : envoi du formulaire.
- `tailwind.config.js` et `src/index.css` : design system (couleurs, thèmes, typographie).

## À renseigner avant publication
Photo (`profile.photo`), coordonnées et liens (`contact`), technologies/démo/dépôt du projet (`projects`), domaine (balise canonical dans `index.html`).

## Formulaire de contact
Aucun envoi n'est simulé. Copier `.env.example` en `.env` et renseigner `VITE_CONTACT_ENDPOINT` quand un service sera connecté.

## État d'avancement
Toutes les sections sont développées. Reste à tester (npm run build, navigateur, accessibilité) et à renseigner les informations manquantes.
