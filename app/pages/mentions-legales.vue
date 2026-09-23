<script setup lang="ts">
usePageSeo({
  title: 'Mentions légales',
  description: 'Mentions légales du site O.M.T Maçonnerie Tours.',
  path: '/mentions-legales',
})
useHead({ meta: [{ name: 'robots', content: 'noindex, follow' }] })
const todo = '[à compléter]'
</script>

<template>
  <div>
    <PageHero title="Mentions légales" :crumbs="[{ name: 'Mentions légales', path: '/mentions-legales' }]" />
    <section class="section">
      <div class="container legal">
        <h2>Éditeur du site</h2>
        <p>
          O.M.T – {{ site.fullName }}<br>
          Responsable de la publication : {{ site.legal.owner || todo }}<br>
          SIRET : {{ site.legal.siret || todo }}<br>
          Adresse : {{ site.legal.address || todo }}, {{ site.postalCode }} {{ site.city }}<br>
          Téléphone : <a :href="`tel:${site.phoneIntl}`">{{ site.phone }}</a><br>
          E-mail : <a :href="`mailto:${site.email}`">{{ site.email }}</a>
        </p>

        <h2>Hébergement</h2>
        <p>{{ site.legal.host || todo }}</p>

        <h2>Propriété intellectuelle</h2>
        <p>L'ensemble des contenus de ce site (textes, logo, photographies) est la propriété de {{ site.name }}. Toute reproduction sans autorisation est interdite.</p>

        <h2>Données personnelles</h2>
        <p>
          Les informations transmises via le formulaire de contact (nom, téléphone, e-mail, description du projet)
          sont utilisées uniquement pour répondre à votre demande de devis et ne sont jamais cédées à des tiers.
          Conformément au RGPD, vous pouvez demander l'accès, la rectification ou la suppression de vos données en
          écrivant à <a :href="`mailto:${site.email}`">{{ site.email }}</a>.
        </p>

        <h2>Cookies</h2>
        <p>Ce site n'utilise aucun cookie publicitaire ni outil de suivi.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.legal { max-width: 860px; }
.legal h2 { font-size: 1.4rem; margin-top: 1.6em; }
.legal a { color: var(--orange-dark); }
</style>
