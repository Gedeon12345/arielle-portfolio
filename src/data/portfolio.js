/**
 * Source unique du contenu. Modifier ici, sans toucher aux composants.
 * Une valeur null signifie « non renseigné » : l'élément correspondant n'est pas affiché.
 */
export const profile = {
  name: 'Arielle Watchou',
  monogram: 'AW',
  title: 'Étudiante en Génie Logiciel | Développeuse & Profil Polyvalent',
  tagline:
    'Allier l’ingénierie logicielle, la stratégie marketing et l’expérience utilisateur pour concevoir des solutions web performantes et orientées business.',
  footerLine: 'Technologie, créativité et impact.',
  photo: null, // ex. '/images/arielle.jpg' une fois la photo fournie
}

export const navLinks = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'a-propos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' },
  { id: 'projets', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
]

// À valider avec Arielle avant publication.
export const about = {
  paragraphs: [
    'Je suis Arielle Watchou, étudiante en génie logiciel, avec un intérêt pour la conception de solutions numériques utiles et adaptées aux besoins des utilisateurs.',
    'Mon profil associe une formation technique en informatique à des compétences et des expériences dans les domaines du design, du marketing, de la vente et de la relation client.',
    'Cette complémentarité m’amène à considérer les projets dans leur ensemble : comprendre un besoin, réfléchir à l’expérience utilisateur, contribuer à la conception de la solution et prendre en compte les objectifs de l’entreprise.',
    'Je souhaite continuer à développer mes compétences et contribuer à des projets numériques qui associent technologie, créativité et valeur ajoutée.',
  ],
  cards: [
    { icon: 'code', title: 'Technique', text: 'Comprendre les problématiques et contribuer à la conception de solutions informatiques.', tone: 'primary' },
    { icon: 'palette', title: 'Créativité', text: 'Associer cohérence visuelle, ergonomie et expérience utilisateur.', tone: 'secondary' },
    { icon: 'briefcase', title: 'Business', text: 'Comprendre les attentes des clients et les objectifs commerciaux.', tone: 'highlight' },
  ],
}

export const skillCategories = [
  { id: 'dev', icon: 'code', tone: 'primary', title: 'Développement & Technique', description: 'Concevoir et construire des solutions logicielles.', skills: ['Génie logiciel', 'Programmation', 'Intégration web', 'Conception d’applications'] },
  { id: 'design', icon: 'palette', tone: 'secondary', title: 'Design & Création', description: 'Donner une forme claire et expressive aux idées.', skills: ['Design d’interfaces', 'Supports visuels', 'Marketing visuel', 'Créativité graphique'] },
  { id: 'client', icon: 'headset', tone: 'accent', title: 'Relation client & Vente', description: 'Écouter, convaincre et accompagner.', skills: ['Relation client', 'Expérience en centre d’appel', 'Techniques de vente', 'Communication professionnelle'] },
  { id: 'marketing', icon: 'trending', tone: 'highlight', title: 'Marketing & Stratégie', description: 'Rendre une solution visible et désirable.', skills: ['Marketing opérationnel', 'Promotion de produits', 'Stratégie digitale', 'Communication commerciale'] },
]

export const projects = [
  {
    id: 'gestion-presences',
    name: 'Système de Gestion des Présences',
    category: 'Application web',
    description: 'Application conçue pour automatiser et simplifier le suivi des présences, organiser les informations et faciliter les opérations de gestion.',
    objectives: ['Simplifier le suivi des présences', 'Organiser les informations', 'Réduire les tâches manuelles répétitives', 'Améliorer l’expérience utilisateur'],
    image: null, // capture réelle à fournir
    technologies: [], // à renseigner avec les technologies réellement utilisées
    demoUrl: null,
    repoUrl: null,
    published: true,
  },
]

export const beyondCode = [
  { number: '01', title: 'Comprendre', text: 'Identifier les besoins des utilisateurs et les objectifs du projet.', tone: 'primary' },
  { number: '02', title: 'Concevoir', text: 'Participer à la création d’une solution fonctionnelle, claire et agréable à utiliser.', tone: 'secondary' },
  { number: '03', title: 'Valoriser', text: 'Comprendre comment le marketing, la communication et la relation client contribuent à la réussite d’une solution.', tone: 'accent' },
]

export const contact = {
  title: 'Une idée, une opportunité ou un projet à partager ?',
  text: 'Je suis ouverte aux opportunités professionnelles, aux collaborations et aux projets qui me permettront d’apprendre, de créer et de contribuer à des solutions utiles. Parlons de vos idées !',
  email: null,
  phone: null,
  linkedin: null,
  github: null,
}
