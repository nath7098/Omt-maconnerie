interface PageSeo {
  title: string
  description: string
  path: string
  image?: string
  schema?: Record<string, unknown>[]
}

/** Balises SEO communes : title, description, canonical, Open Graph, Twitter et JSON-LD optionnel. */
export function usePageSeo({ title, description, path, image = '/images/og-omt-maconnerie-tours.jpg', schema = [] }: PageSeo) {
  const url = absoluteUrl(path)
  const img = absoluteUrl(image)

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: url,
    ogType: 'website',
    ogLocale: 'fr_FR',
    ogSiteName: site.name,
    ogImage: img,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: `${site.name} – maçon à Tours`,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: img,
  })

  useHead({
    link: [{ rel: 'canonical', href: url }],
    script: schema.map(s => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify({ '@context': 'https://schema.org', ...s }),
    })),
  })
}

/** Fil d'Ariane au format schema.org */
export function breadcrumbSchema(items: { name: string, path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    'itemListElement': [{ name: 'Accueil', path: '/' }, ...items].map((it, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': it.name,
      'item': absoluteUrl(it.path),
    })),
  }
}

export function faqSchema(faq: { q: string, a: string }[]) {
  return {
    '@type': 'FAQPage',
    'mainEntity': faq.map(f => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': { '@type': 'Answer', 'text': f.a },
    })),
  }
}

/** Fiche entreprise locale (schema.org) — injectée sur toutes les pages */
export function businessSchema() {
  const sameAs = [site.facebookUrl, site.googleBusinessUrl].filter(Boolean)
  return {
    '@type': ['HomeAndConstructionBusiness', 'GeneralContractor'],
    '@id': `${absoluteUrl('/')}#entreprise`,
    'name': site.name,
    'alternateName': ['O.M.T', 'OMT Maçonnerie Tours', 'O.M.T Maçonnerie Tours'],
    'description': 'Artisan maçon à Tours : maçonnerie générale, terrassement et ravalement de façade en Indre-et-Loire, région Centre-Val de Loire et Pays de la Loire.',
    'url': absoluteUrl('/'),
    'logo': absoluteUrl('/images/logo-omt.png'),
    'image': absoluteUrl('/images/og-omt-maconnerie-tours.jpg'),
    'telephone': site.phoneIntl,
    'email': site.email,
    'priceRange': '€€',
    'address': {
      '@type': 'PostalAddress',
      ...(site.legal.address ? { streetAddress: site.legal.address } : {}),
      'addressLocality': site.city,
      'postalCode': site.postalCode,
      'addressRegion': site.region,
      'addressCountry': 'FR',
    },
    'geo': { '@type': 'GeoCoordinates', ...site.geo },
    'areaServed': areaServed.map(name => ({ '@type': 'AdministrativeArea', name })),
    'openingHoursSpecification': [{
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '08:00',
      'closes': '18:00',
    }],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Prestations',
      'itemListElement': services.map(s => ({
        '@type': 'Offer',
        'itemOffered': { '@type': 'Service', 'name': s.name, 'url': absoluteUrl(`/${s.slug}`) },
      })),
    },
    ...(sameAs.length ? { sameAs } : {}),
  }
}
