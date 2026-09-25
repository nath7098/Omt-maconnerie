<script setup lang="ts">
usePageSeo({
  title: 'Zone d\'intervention – Maçon à Tours et en Indre-et-Loire',
  description: 'O.M.T intervient à Tours, Joué-lès-Tours, Saint-Cyr-sur-Loire, Amboise, Chinon, Loches, dans toute l\'Indre-et-Loire, en Centre-Val de Loire et Pays de la Loire.',
  path: '/zone-intervention',
  schema: [breadcrumbSchema([{ name: 'Zone d\'intervention', path: '/zone-intervention' }])],
})
</script>

<template>
  <div>
    <PageHero
      title="Zone d'intervention : Tours, Indre-et-Loire et régions voisines"
      lead="Basée à Tours, l'entreprise O.M.T se déplace pour vos travaux de maçonnerie, de terrassement et de ravalement de façade dans tout le département et au-delà."
      :crumbs="[{ name: 'Zone d\'intervention', path: '/zone-intervention' }]"
    />

    <section class="section">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Communes desservies</p>
          <h2>Où intervenons-nous ?</h2>
          <p class="lead">
            Votre commune n'apparaît pas dans la liste ? Contactez-nous au
            <a :href="`tel:${site.phoneIntl}`">{{ site.phone }}</a> : nous étudions chaque demande.
          </p>
        </div>
        <div class="grid grid--3">
          <div v-for="z in zones" :key="z.name" class="card">
            <h3><AppIcon name="pin" class="pin" /> {{ z.name }}</h3>
            <ul class="cities">
              <li v-for="c in z.cities" :key="c">{{ c }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--paper">
      <div class="container text">
        <h2>Votre maçon dans l'agglomération tourangelle</h2>
        <p>
          À Tours comme dans les communes de Tours Métropole Val de Loire, O.M.T intervient rapidement pour vos
          travaux de <NuxtLink to="/maconnerie-tours">maçonnerie générale</NuxtLink> : extension, murs de clôture,
          dalles, ouvertures ou rénovation. Nous connaissons les spécificités du bâti local, notamment la pierre de
          tuffeau très présente en Touraine, et les contraintes des secteurs protégés.
        </p>
        <p>
          Nous réalisons également vos <NuxtLink to="/terrassement-tours">travaux de terrassement</NuxtLink> et vos
          <NuxtLink to="/ravalement-facade-tours">ravalements de façade</NuxtLink> et vos
          <NuxtLink to="/carrelage-tours">travaux de carrelage</NuxtLink> dans tout le département
          (Amboise, Chinon, Loches, Montlouis-sur-Loire…), ainsi que dans les départements voisins du
          Loir-et-Cher, du Loiret, de l'Indre, du Maine-et-Loire et de la Sarthe.
        </p>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<style scoped>
.card h3 { display: flex; align-items: center; gap: 8px; }
.pin { width: 22px; height: 22px; color: var(--orange); }
.cities { list-style: none; padding: 0; margin: 0; columns: 2; column-gap: 16px; color: var(--muted); font-size: .95rem; }
.cities li { break-inside: avoid; padding: 3px 0; }
.text { max-width: 860px; }
.text a, .lead a { color: var(--orange-dark); }
</style>
