/**
 * Photos des réalisations.
 *
 * Pour ajouter une photo :
 *  1. déposez le fichier (idéalement .webp ou .jpg, ~1600 px de large) dans public/images/realisations/
 *  2. ajoutez une entrée ci-dessous.
 *
 * Le texte « alt » est important pour Google Images : décrivez précisément la photo
 * (type de travaux + ville), par ex. « Mur de clôture en parpaing enduit à Joué-lès-Tours ».
 */
export type ServiceName = 'Maçonnerie' | 'Terrassement' | 'Ravalement de façade' | 'Carrelage'

export interface Realisation {
  src: string
  alt: string
  title: string
  description: string
  services: ServiceName[]
  /** Commune du chantier (optionnel, mais très utile pour le référencement local) */
  city?: string
  width: number
  height: number
}

export const realisations: Realisation[] = [
  {
    src: '/images/realisations/ravalement-facade-enduit-decor-pierre-avant-apres.webp',
    alt: 'Avant / après du ravalement d\'une maison : façade blanche transformée en enduit décor pierre avec encadrements',
    title: 'Ravalement en enduit décor pierre',
    description: 'Transformation complète d\'une façade enduite en façade décor pierre, avec chaînes d\'angle et encadrements des ouvertures et du garage.',
    services: ['Ravalement de façade'],
    width: 1080,
    height: 1080,
  },
  {
    src: '/images/realisations/ravalement-maison-de-ville-enduit-pierre-avant-apres.webp',
    alt: 'Avant / après du ravalement d\'une maison de ville : façade rose dégradée refaite en enduit décor pierre',
    title: 'Rénovation de façade d\'une maison de ville',
    description: 'Façade abîmée et décollée : préparation du support sous échafaudage puis enduit décor pierre avec encadrements de fenêtres et de porte.',
    services: ['Ravalement de façade'],
    width: 1366,
    height: 1200,
  },
  {
    src: '/images/realisations/couloir-parement-pierre-avant-apres.webp',
    alt: 'Avant / après d\'un couloir : murs blancs habillés de parement en pierre naturelle',
    title: 'Couloir habillé de parement pierre',
    description: 'Habillage des murs d\'un couloir en parement pierre : un intérieur chaleureux au cachet de maison de caractère, en harmonie avec le sol en travertin.',
    services: ['Maçonnerie'],
    width: 1366,
    height: 1000,
  },
  {
    src: '/images/realisations/facade-enduit-decor-pierre-pignon-dalle-beton.webp',
    alt: 'Pignon en enduit décor pierre avec médaillon fleur de lys, encadrements des ouvertures et dalle béton',
    title: 'Façade décor pierre, pignon et dalle béton',
    description: 'Enduit taloché, pignon décor pierre avec médaillon fleur de lys, chaînes d\'angle, encadrements d\'ouvertures et coulage de la dalle béton.',
    services: ['Maçonnerie', 'Ravalement de façade'],
    width: 942,
    height: 1256,
  },
  {
    src: '/images/realisations/terrassement-allee-enrobe-maison-neuve.webp',
    alt: 'Terrassement et création d\'une allée en enrobé avec bordures devant une maison neuve',
    title: 'Terrassement et allée en enrobé',
    description: 'Terrassement à la pelle mécanique, pose de bordures, préparation de la couche de forme puis réalisation d\'une allée en enrobé.',
    services: ['Terrassement'],
    width: 1080,
    height: 1080,
  },
  {
    src: '/images/realisations/extension-maison-gros-oeuvre-parpaing.webp',
    alt: 'Extension de maison en parpaing accolée à une maison en pierre : gros œuvre avec pignon, linteaux et dalle',
    title: 'Extension de maison – gros œuvre',
    description: 'Construction d\'une extension accolée à une maison ancienne en pierre : dalle, élévation des murs en parpaing, pignon, linteaux et grandes ouvertures.',
    services: ['Maçonnerie'],
    width: 1200,
    height: 1600,
  },
  {
    src: '/images/realisations/terrasse-entree-dallage-travertin.webp',
    alt: 'Terrasse d\'entrée en dallage travertin avec margelles devant une maison à façade en pierre',
    title: 'Terrasse d\'entrée en travertin',
    description: 'Création d\'un perron maçonné habillé de dalles en travertin, avec margelles et seuil de porte assortis.',
    services: ['Carrelage', 'Maçonnerie'],
    width: 1080,
    height: 810,
  },
  {
    src: '/images/realisations/allee-marches-travertin-jardin.webp',
    alt: 'Allée de jardin courbe et marches en dalles de travertin',
    title: 'Allée et marches en travertin',
    description: 'Allée de jardin aux formes courbes et marches en travertin, posées sur chape pour un rendu durable et élégant.',
    services: ['Carrelage', 'Maçonnerie'],
    width: 1200,
    height: 1600,
  },
]
