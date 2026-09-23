# O.M.T – Oliveira Maçonnerie Tours — site vitrine (Nuxt 4)

Site statique, pré-généré en HTML pour un référencement Google optimal.

## Commandes

```bash
npm install
npm run dev        # développement : http://localhost:3000
npm run generate   # génère le site statique dans .output/public
```

Le dossier `.output/public` peut être hébergé sur n'importe quel hébergeur statique (Netlify, Vercel, Cloudflare Pages, OVH…).
Définir la variable `NUXT_PUBLIC_SITE_URL` avec le vrai nom de domaine au moment du build (voir `.env.example`) :
elle sert aux URL canoniques, au sitemap, à `robots.txt` et aux données structurées.

## Modifier le contenu

| Quoi | Où |
|---|---|
| Téléphone, e-mail, Facebook, fiche Google, mentions légales | `app/utils/site.ts` (objet `site`) |
| Textes des prestations et FAQ | `app/utils/site.ts` (`services`) |
| Communes desservies | `app/utils/site.ts` (`zones`) |
| Photos des réalisations | `public/images/realisations/` + `app/utils/realisations.ts`, puis `npm run images` (miniatures) |
| Vérification Google Search Console | `site.googleSiteVerification` dans `app/utils/site.ts` |

## SEO intégré

- Pages pré-rendues (HTML complet), une page par prestation ciblant « … à Tours »
- Balises title / description / canonical / Open Graph / Twitter sur chaque page
- Données structurées schema.org : `HomeAndConstructionBusiness` (entreprise locale), `Service`, `FAQPage`, `BreadcrumbList`
- `sitemap.xml` et `robots.txt` générés automatiquement
- Aucune police ni script externe, miniatures d'images en WebP : Lighthouse SEO 100, performances 97–99
- Image de partage (Open Graph) propre à chaque prestation, page 404 en français

## Après la mise en ligne

1. Déclarer le site dans **Google Search Console** et y soumettre `/sitemap.xml`.
2. Renseigner l'URL du site sur la **fiche Google Business Profile** et sur la page **Facebook**.
3. Ajouter les liens Facebook / Google dans `site.facebookUrl` / `site.googleBusinessUrl` (ils alimentent `sameAs`).
4. Compléter les mentions légales (SIRET, adresse, hébergeur) dans `site.legal`.
