<script setup lang="ts">
const route = useRoute()
const service = services.find(s => s.slug === route.params.service)
if (!service) throw createError({ statusCode: 404, statusMessage: 'Page introuvable', fatal: true })

const path = `/${service.slug}`
const others = services.filter(s => s.slug !== service.slug)
const photos = realisations.some(r => r.services.includes(service.name as ServiceName))

usePageSeo({
  title: service.metaTitle,
  description: service.metaDescription,
  path,
  image: service.ogImage,
  schema: [
    {
      '@type': 'Service',
      'name': service.title,
      'serviceType': service.name,
      'description': service.metaDescription,
      'url': absoluteUrl(path),
      'provider': { '@id': `${absoluteUrl('/')}#entreprise` },
      'areaServed': areaServed.map(name => ({ '@type': 'AdministrativeArea', name })),
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': service.name,
        'itemListElement': service.items.map(i => ({ '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': i.title, 'description': i.text } })),
      },
    },
    breadcrumbSchema([{ name: service.name, path }]),
    faqSchema(service.faq),
  ],
})
</script>

<template>
  <div>
    <PageHero :title="service.title" :lead="service.excerpt" :crumbs="[{ name: service.name, path }]">
      <div class="actions">
        <a :href="`tel:${site.phoneIntl}`" class="btn btn--primary"><AppIcon name="phone" />{{ site.phone }}</a>
        <NuxtLink to="/contact" class="btn btn--outline">Devis gratuit</NuxtLink>
      </div>
    </PageHero>

    <section class="section">
      <div class="container intro">
        <div>
          <p class="eyebrow">{{ service.name }}</p>
          <h2>{{ service.name }} à Tours et en Indre-et-Loire</h2>
          <p v-for="(p, i) in service.intro" :key="i">{{ p }}</p>
        </div>
        <aside class="card aside">
          <h3>Devis gratuit</h3>
          <ul class="check-list">
            <li>Déplacement et conseils offerts</li>
            <li>Devis détaillé et sans engagement</li>
            <li>Particuliers & professionnels</li>
            <li>Tours, Indre-et-Loire, Centre-Val de Loire, Pays de la Loire</li>
          </ul>
          <a :href="`tel:${site.phoneIntl}`" class="btn btn--primary"><AppIcon name="phone" />{{ site.phone }}</a>
        </aside>
      </div>
    </section>

    <section class="section section--paper">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Nos interventions</p>
          <h2>Nos prestations de {{ service.name.toLowerCase() }}</h2>
        </div>
        <div class="grid grid--3">
          <div v-for="item in service.items" :key="item.title" class="card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section v-if="photos" class="section">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Réalisations</p>
          <h2>Nos chantiers de {{ service.name.toLowerCase() }}</h2>
        </div>
        <RealisationGallery :service="service.name" />
        <p class="more"><NuxtLink to="/realisations" class="btn btn--dark">Toutes nos réalisations <AppIcon name="arrow" /></NuxtLink></p>
      </div>
    </section>

    <section :class="['section', { 'section--paper': photos }]">
      <div class="container">
        <div class="section-head section-head--center">
          <p class="eyebrow">FAQ</p>
          <h2>Questions fréquentes – {{ service.name.toLowerCase() }}</h2>
        </div>
        <FaqList :items="service.faq" />
      </div>
    </section>

    <section :class="['section', { 'section--paper': !photos }]">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Découvrez aussi</p>
          <h2>Nos autres savoir-faire</h2>
        </div>
        <div class="grid grid--2">
          <NuxtLink v-for="o in others" :key="o.slug" :to="`/${o.slug}`" class="card other">
            <h3>{{ o.title }}</h3>
            <p>{{ o.excerpt }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <CtaBanner :title="`Votre projet de ${service.name.toLowerCase()} à Tours`" />
  </div>
</template>

<style scoped>
.actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 24px; }
.intro { display: grid; grid-template-columns: 1.6fr 1fr; gap: 48px; align-items: start; }
.aside { position: sticky; top: 140px; }
.card p { color: var(--muted); }
.more { margin-top: 32px; }
.other { text-decoration: none; transition: transform .2s; }
.other:hover { transform: translateY(-3px); }
.other h3 { color: var(--charcoal); }
@media (max-width: 900px) { .intro { grid-template-columns: 1fr; } .aside { position: static; } }
</style>
