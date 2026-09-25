/**
 * Optimisation des images (à relancer après l'ajout de photos) : npm run images
 *  - crée une miniature « -thumb.webp » (800 px) pour chaque photo de public/images/realisations/
 *  - crée les images de partage réseaux sociaux (1200×630) de public/images/og/
 */
import { readdirSync, existsSync, mkdirSync } from 'node:fs'
import sharp from 'sharp'

const dir = 'public/images/realisations/'
for (const f of readdirSync(dir)) {
  if (!f.endsWith('.webp') || f.endsWith('-thumb.webp')) continue
  const out = dir + f.replace('.webp', '-thumb.webp')
  if (existsSync(out)) continue
  await sharp(dir + f).resize({ width: 800 }).webp({ quality: 72 }).toFile(out)
  console.log('miniature :', out)
}

// Logo de l'en-tête (affiché en 120 px, 240 px pour les écrans haute densité)
await sharp('public/images/logo-omt.png').resize({ width: 300 }).webp({ quality: 80, alphaQuality: 80, effort: 6 }).toFile('public/images/logo-omt-header.webp')

// Images de partage (Facebook, WhatsApp…) : photo recadrée + bandeau orange
mkdirSync('public/images/og', { recursive: true })
const og = {
  'og-maconnerie.jpg': 'extension-maison-gros-oeuvre-parpaing.webp',
  'og-carrelage.jpg': 'terrasse-entree-dallage-travertin.webp',
  'og-terrassement.jpg': 'terrassement-allee-enrobe-maison-neuve.webp',
  'og-ravalement.jpg': 'ravalement-maison-de-ville-enduit-pierre-avant-apres.webp',
  'og-realisations.jpg': 'couloir-parement-pierre-avant-apres.webp',
}
const logo = await sharp('public/images/logo-omt.webp').resize({ width: 230 })
  .extend({ top: 12, bottom: 12, left: 14, right: 14, background: '#0b0b0b' }).toBuffer()
const bar = Buffer.from('<svg width="1200" height="12"><rect width="1200" height="12" fill="#f55a0a"/></svg>')
for (const [name, src] of Object.entries(og)) {
  await sharp(dir + src).resize(1200, 630, { fit: 'cover', position: 'attention' })
    .composite([{ input: logo, left: 930, top: 460 }, { input: bar, left: 0, top: 618 }])
    .jpeg({ quality: 82 }).toFile(`public/images/og/${name}`)
  console.log('partage :', name)
}
