/**
 * Informations de l'entreprise — source unique utilisée partout sur le site
 * (affichage, balises SEO, données structurées schema.org).
 * Pour mettre à jour un numéro, un lien Facebook ou la fiche Google : c'est ici.
 */
export const site = {
  name: 'O.M.T Maçonnerie',
  shortName: 'O.M.T',
  tagline: 'Maçonnerie, terrassement et ravalement de façade à Tours',
  email: 'ant20220892@gmail.com',
  phone: '07 65 51 29 66',
  phoneIntl: '+33765512966',
  city: 'Tours',
  postalCode: '37000',
  department: 'Indre-et-Loire',
  region: 'Centre-Val de Loire',
  geo: { latitude: 47.3941, longitude: 0.6848 },
  // À compléter dès que les liens sont disponibles (ils seront ajoutés aux données structurées « sameAs »)
  facebookUrl: '',
  googleBusinessUrl: '',
  // Mentions légales — à compléter
  legal: {
    owner: '',
    siret: '',
    address: '',
    host: '',
  },
  openingHours: 'Du lundi au vendredi, 8h – 18h',
}

export interface Service {
  slug: string
  name: string
  title: string
  metaTitle: string
  metaDescription: string
  icon: 'wall' | 'shovel' | 'facade'
  excerpt: string
  intro: string[]
  items: { title: string, text: string }[]
  faq: { q: string, a: string }[]
}

export const services: Service[] = [
  {
    slug: 'maconnerie-tours',
    name: 'Maçonnerie',
    title: 'Maçonnerie générale à Tours',
    metaTitle: 'Maçon à Tours (37) – Maçonnerie générale, extension, murs',
    metaDescription: 'O.M.T, artisan maçon à Tours : construction, extension, murs, clôtures, dalles, ouvertures et rénovation en Indre-et-Loire. Devis gratuit au 07 65 51 29 66.',
    icon: 'wall',
    excerpt: 'Construction, extension, murs de clôture, dalles, ouvertures et rénovation : un travail soigné, du gros œuvre aux finitions.',
    intro: [
      'Artisan maçon basé à Tours, O.M.T réalise tous vos travaux de maçonnerie générale, pour les particuliers comme pour les professionnels, en neuf comme en rénovation.',
      'Parpaing, brique, pierre ou béton : nous choisissons avec vous la technique la plus adaptée à votre projet, à votre bâti et à votre budget, dans le respect des règles de l\'art.',
    ],
    items: [
      { title: 'Construction & extension', text: 'Fondations, élévation de murs, agrandissement de maison, garage, abri ou annexe.' },
      { title: 'Murs & clôtures', text: 'Murs de clôture, murets, murs de soutènement, piliers de portail, chaperons.' },
      { title: 'Dalles & chapes', text: 'Dalles béton, chapes, terrasses maçonnées, allées et plots.' },
      { title: 'Ouvertures & reprises', text: 'Création ou agrandissement d\'ouvertures, pose de linteaux, reprises en sous-œuvre.' },
      { title: 'Rénovation', text: 'Rénovation de murs anciens, rejointoiement de pierre, restauration du bâti tourangeau.' },
      { title: 'Petits travaux', text: 'Réparations, seuils, escaliers extérieurs, jardinières et aménagements divers.' },
    ],
    faq: [
      { q: 'Faites-vous les petits chantiers de maçonnerie ?', a: 'Oui. Nous intervenons aussi bien pour une extension complète que pour un muret, un seuil, une reprise de fissure ou la création d\'une ouverture.' },
      { q: 'Le devis de maçonnerie est-il gratuit ?', a: 'Oui, le déplacement et le devis sont gratuits et sans engagement à Tours et dans toute l\'Indre-et-Loire.' },
      { q: 'Faut-il une autorisation pour construire un mur ou une extension ?', a: 'Selon la surface et la hauteur, une déclaration préalable ou un permis de construire peut être nécessaire. Nous vous conseillons sur les démarches lors de la visite.' },
    ],
  },
  {
    slug: 'terrassement-tours',
    name: 'Terrassement',
    title: 'Terrassement à Tours et en Indre-et-Loire',
    metaTitle: 'Terrassement à Tours (37) – Fouilles, nivellement, VRD',
    metaDescription: 'Travaux de terrassement à Tours et en Indre-et-Loire : décaissement, fouilles de fondations, nivellement, tranchées, préparation de terrain. Devis gratuit O.M.T.',
    icon: 'shovel',
    excerpt: 'Décaissement, fouilles, nivellement, tranchées et préparation de terrain avant construction ou aménagement extérieur.',
    intro: [
      'Un terrassement bien réalisé est la base de tout ouvrage durable. O.M.T prépare votre terrain avant construction, extension, terrasse ou aménagement extérieur.',
      'Nous intervenons avec le matériel adapté à votre accès et à votre terrain, en ville comme à la campagne, et gérons l\'évacuation des terres.',
    ],
    items: [
      { title: 'Décaissement', text: 'Décaissement de terrain pour terrasse, allée, dalle ou stationnement.' },
      { title: 'Fouilles de fondations', text: 'Fouilles en rigole ou en pleine masse pour maison, extension, garage ou mur.' },
      { title: 'Nivellement & remblai', text: 'Mise à niveau, remblaiement et compactage pour un sol stable.' },
      { title: 'Tranchées & réseaux', text: 'Tranchées pour réseaux (eau, électricité, évacuations), drainage périphérique.' },
      { title: 'Allées & accès', text: 'Préparation de plateforme, pose de bordures, couche de forme et allées en gravier ou en enrobé.' },
      { title: 'Évacuation des terres', text: 'Chargement et évacuation des déblais vers les filières adaptées.' },
    ],
    faq: [
      { q: 'Pourquoi confier le terrassement à un maçon ?', a: 'En réalisant terrassement et maçonnerie, O.M.T garantit la cohérence entre fouilles, fondations et ouvrage : un seul interlocuteur et moins d\'aléas.' },
      { q: 'Intervenez-vous sur des terrains difficiles d\'accès ?', a: 'Oui, nous adaptons le matériel à l\'accès de votre terrain. Une visite préalable permet de définir la meilleure méthode.' },
      { q: 'Vous occupez-vous de l\'évacuation des terres ?', a: 'Oui, l\'évacuation des déblais peut être incluse dans le devis.' },
    ],
  },
  {
    slug: 'ravalement-facade-tours',
    name: 'Ravalement de façade',
    title: 'Ravalement de façade à Tours',
    metaTitle: 'Ravalement de façade à Tours (37) – Enduit, nettoyage, fissures',
    metaDescription: 'Ravalement de façade à Tours et en Indre-et-Loire : nettoyage, traitement des fissures, enduit, rejointoiement de pierre de tuffeau. Devis gratuit O.M.T.',
    icon: 'facade',
    excerpt: 'Nettoyage, traitement des fissures, enduits, décor pierre et rejointoiement : redonnez de l\'éclat à votre maison et protégez vos murs.',
    intro: [
      'La façade protège votre maison des intempéries et fait sa première impression. O.M.T assure le ravalement complet de vos façades à Tours et dans la région.',
      'Enduit traditionnel à la chaux, enduit monocouche, rejointoiement de pierre de tuffeau : nous respectons le caractère de votre bâti, qu\'il soit ancien ou récent.',
    ],
    items: [
      { title: 'Enduit décor pierre', text: 'Façade effet pierre sculptée à la main, chaînes d\'angle, encadrements et motifs décoratifs.' },
      { title: 'Nettoyage', text: 'Nettoyage et démoussage des façades, préparation des supports.' },
      { title: 'Traitement des fissures', text: 'Ouverture, traitement et rebouchage des fissures pour une façade saine.' },
      { title: 'Enduits', text: 'Enduit à la chaux, enduit monocouche gratté ou taloché, finitions au choix.' },
      { title: 'Pierre & tuffeau', text: 'Rejointoiement et restauration des façades en pierre, typiques de la Touraine.' },
      { title: 'Murs & pignons', text: 'Ravalement de pignons, murs de clôture et soubassements.' },
    ],
    faq: [
      { q: 'Tous les combien faut-il ravaler sa façade ?', a: 'En moyenne tous les 10 ans. Certaines communes peuvent imposer un ravalement ; nous vous renseignons lors du devis.' },
      { q: 'Faut-il une déclaration préalable pour un ravalement ?', a: 'Dans de nombreux cas oui, notamment en secteur protégé à Tours. Nous vous accompagnons dans la démarche.' },
      { q: 'Travaillez-vous la pierre de tuffeau ?', a: 'Oui, nous intervenons sur les façades en pierre de la région avec des mortiers et enduits adaptés au bâti ancien.' },
    ],
  },
]

/** Villes et secteurs desservis (affichés sur la page Zone d'intervention) */
export const zones = [
  {
    name: 'Indre-et-Loire (37)',
    cities: ['Tours', 'Joué-lès-Tours', 'Saint-Cyr-sur-Loire', 'Saint-Avertin', 'Saint-Pierre-des-Corps', 'Chambray-lès-Tours', 'La Riche', 'Fondettes', 'Ballan-Miré', 'La Membrolle-sur-Choisille', 'Notre-Dame-d\'Oé', 'Montlouis-sur-Loire', 'Vouvray', 'Amboise', 'Montbazon', 'Veigné', 'Luynes', 'Chinon', 'Loches', 'Château-Renault'],
  },
  {
    name: 'Région Centre-Val de Loire',
    cities: ['Blois', 'Orléans', 'Vendôme', 'Romorantin-Lanthenay', 'Châteauroux', 'Bourges', 'Chartres'],
  },
  {
    name: 'Pays de la Loire',
    cities: ['Saumur', 'Angers', 'Le Mans', 'La Flèche', 'Château-du-Loir'],
  },
]

export const areaServed = ['Tours', 'Indre-et-Loire', 'Centre-Val de Loire', 'Pays de la Loire']

export function absoluteUrl(path = '/') {
  const base = useRuntimeConfig().public.siteUrl.replace(/\/$/, '')
  return path === '/' ? base : base + path
}
