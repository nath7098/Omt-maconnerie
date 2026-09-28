<script setup lang="ts">
usePageSeo({
  title: 'Réalisations – Maçonnerie & façades à Tours',
  description: 'Photos avant / après des chantiers O.M.T à Tours et en Indre-et-Loire : maçonnerie, terrassement, ravalement de façade et carrelage.',
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
      :lead="`${realisations.length} chantiers en photos : murs, extensions, dalles, terrassements, façades et terrasses en travertin. Avant / après et étapes du chantier.`"
      :crumbs="[{ name: 'Réalisations', path: '/realisations' }]"
    />
    <section class="section">
      <div class="container">
        <RealisationGallery :eager="2" filters />
      </div>
    </section>
    <CtaBanner title="Vous avez un projet similaire ?" />
  </div>
</template>
