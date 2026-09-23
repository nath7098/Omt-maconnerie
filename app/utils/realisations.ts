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
export interface Realisation {
  src: string
  alt: string
  title: string
  service: 'Maçonnerie' | 'Terrassement' | 'Ravalement de façade'
  city: string
  width?: number
  height?: number
}

export const realisations: Realisation[] = [
  // {
  //   src: '/images/realisations/mur-cloture-joue-les-tours.webp',
  //   alt: 'Mur de clôture en parpaing enduit à Joué-lès-Tours',
  //   title: 'Mur de clôture enduit',
  //   service: 'Maçonnerie',
  //   city: 'Joué-lès-Tours',
  //   width: 1600,
  //   height: 1200,
  // },
]
