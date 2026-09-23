<script setup lang="ts">
usePageSeo({
  title: 'Réalisations – Maçonnerie & façades à Tours',
  description: 'Découvrez les chantiers réalisés par O.M.T à Tours et en Indre-et-Loire : maçonnerie, terrassement et ravalement de façade. Photos avant / après.',
  path: '/realisations',
  image: '/images/og/og-realisations.jpg',
  schema: [
    breadcrumbSchema([{ name: 'Réalisations', path: '/realisations' }]),
    ...(realisations.length
      ? [{
          '@type': 'ImageGallery',
          'name': 'Réalisations O.M.T Maçonnerie Tours',
          'image': realisations.map(r => ({ '@type': 'ImageObject', 'contentUrl': absoluteUrl(r.src), 'caption': r.alt })),
        }]
      : []),
  ],
})
</script>

<template>
  <div>
    <PageHero
      title="Nos réalisations à Tours et en Touraine"
      lead="Murs, extensions, dalles, terrassements, façades… Un aperçu du savoir-faire O.M.T sur les chantiers de nos clients."
      :crumbs="[{ name: 'Réalisations', path: '/realisations' }]"
    />
    <section class="section">
      <div class="container">
        <RealisationGallery :eager="2" />
      </div>
    </section>
    <CtaBanner title="Vous avez un projet similaire ?" />
  </div>
</template>
