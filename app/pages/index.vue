<script setup lang="ts">
const faq = [
  { q: 'Quels travaux réalise O.M.T ?', a: 'O.M.T est une entreprise de maçonnerie basée à Tours. Nous réalisons la maçonnerie générale (construction, extension, murs, dalles, ouvertures, rénovation), le terrassement et le ravalement de façade.' },
  { q: 'Dans quelles villes intervenez-vous ?', a: 'Nous intervenons à Tours et dans toute l\'Indre-et-Loire (Joué-lès-Tours, Saint-Cyr-sur-Loire, Saint-Avertin, Chambray-lès-Tours, Amboise…), ainsi que dans la région Centre-Val de Loire et en Pays de la Loire.' },
  { q: 'Le devis est-il gratuit ?', a: `Oui, le déplacement et le devis sont gratuits et sans engagement. Appelez le ${site.phone} ou écrivez-nous via le formulaire de contact.` },
  { q: 'Travaillez-vous pour les particuliers et les professionnels ?', a: 'Oui, nous intervenons pour les particuliers, les professionnels, les syndics et les collectivités, en neuf comme en rénovation.' },
]

usePageSeo({
  title: 'O.M.T Maçonnerie Tours – Maçon, terrassement & ravalement de façade (37)',
  description: 'O.M.T, entreprise de maçonnerie à Tours : maçonnerie générale, terrassement et ravalement de façade en Indre-et-Loire, Centre-Val de Loire et Pays de la Loire. Devis gratuit au 07 65 51 29 66.',
  path: '/',
  schema: [faqSchema(faq)],
})

const strengths = [
  { title: 'Artisan local', text: 'Une entreprise tourangelle qui connaît le bâti de la région, du tuffeau aux constructions récentes.' },
  { title: 'Devis gratuit', text: 'Visite sur place, conseils et devis détaillé gratuits et sans engagement.' },
  { title: 'Travail soigné', text: 'Respect des règles de l\'art, des délais annoncés et un chantier laissé propre.' },
  { title: 'Un seul interlocuteur', text: 'Du terrassement aux finitions de façade, un suivi de A à Z.' },
]
</script>

<template>
  <div>
    <section class="hero bricks">
      <div class="container hero__inner">
        <div class="hero__text">
          <p class="eyebrow">Entreprise de maçonnerie à Tours</p>
          <h1>Votre <span class="accent">maçon à Tours</span> pour construire, rénover et embellir</h1>
          <p class="lead">
            <strong>O.M.T</strong> réalise vos travaux de <NuxtLink to="/maconnerie-tours">maçonnerie</NuxtLink>,
            de <NuxtLink to="/terrassement-tours">terrassement</NuxtLink> et de
            <NuxtLink to="/ravalement-facade-tours">ravalement de façade</NuxtLink> à Tours, en Indre-et-Loire,
            en région Centre-Val de Loire et en Pays de la Loire.
          </p>
          <div class="hero__actions">
            <a :href="`tel:${site.phoneIntl}`" class="btn btn--primary"><AppIcon name="phone" />{{ site.phone }}</a>
            <NuxtLink to="/contact" class="btn btn--outline">Devis gratuit <AppIcon name="arrow" /></NuxtLink>
          </div>
          <ul class="hero__badges">
            <li><AppIcon name="check" /> Devis gratuit</li>
            <li><AppIcon name="check" /> Particuliers & pros</li>
            <li><AppIcon name="check" /> Neuf & rénovation</li>
          </ul>
        </div>
        <div class="hero__logo">
          <img src="/images/logo-omt-dark.webp" alt="O.M.T Maçonnerie Tours" width="400" height="261" fetchpriority="high">
        </div>
      </div>
    </section>

    <section class="section section--paper">
      <div class="container">
        <div class="section-head section-head--center">
          <p class="eyebrow">Nos prestations</p>
          <h2>Maçonnerie, terrassement et ravalement de façade</h2>
          <p class="lead">Trois savoir-faire complémentaires pour mener votre projet du terrain nu jusqu'à la façade finie.</p>
        </div>
        <ServiceCards />
      </div>
    </section>

    <section class="section">
      <div class="container about">
        <div>
          <p class="eyebrow">Pourquoi O.M.T</p>
          <h2>Un artisan maçon de confiance en Touraine</h2>
          <p>
            Implantée à Tours, <strong>O.M.T Maçonnerie</strong> accompagne les particuliers et les professionnels
            dans leurs projets de construction et de rénovation. Extension de maison, mur de clôture, dalle béton,
            préparation de terrain ou ravalement de façade : chaque chantier est réalisé avec rigueur et
            dans le respect du bâti tourangeau.
          </p>
          <p>
            Nous intervenons à Tours et dans son agglomération (Joué-lès-Tours, Saint-Cyr-sur-Loire,
            Saint-Avertin, Chambray-lès-Tours, Saint-Pierre-des-Corps, La Riche, Fondettes…), dans toute
            l'<NuxtLink to="/zone-intervention">Indre-et-Loire</NuxtLink> et dans les départements voisins.
          </p>
          <NuxtLink to="/contact" class="btn btn--dark">Parlons de votre projet <AppIcon name="arrow" /></NuxtLink>
        </div>
        <div class="grid grid--2 strengths">
          <div v-for="s in strengths" :key="s.title" class="card">
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--paper">
      <div class="container">
        <div class="section-head section-head--center">
          <p class="eyebrow">Réalisations</p>
          <h2>Nos derniers chantiers</h2>
        </div>
        <RealisationGallery :limit="6" />
        <p v-if="realisations.length" class="center"><NuxtLink to="/realisations" class="btn btn--dark">Voir toutes nos réalisations</NuxtLink></p>
      </div>
    </section>

    <section class="section section--dark bricks">
      <div class="container zone">
        <div>
          <p class="eyebrow">Zone d'intervention</p>
          <h2>Tours, l'Indre-et-Loire et au-delà</h2>
          <p class="lead">Basés à Tours, nous nous déplaçons dans tout le département et dans les régions Centre-Val de Loire et Pays de la Loire.</p>
          <NuxtLink to="/zone-intervention" class="btn btn--primary">Voir les communes desservies <AppIcon name="arrow" /></NuxtLink>
        </div>
        <ul class="zone__list">
          <li v-for="z in zones" :key="z.name"><AppIcon name="pin" /><span><strong>{{ z.name }}</strong><br>{{ z.cities.slice(0, 5).join(', ') }}…</span></li>
        </ul>
      </div>
    </section>

    <section class="section section--paper">
      <div class="container">
        <div class="section-head section-head--center">
          <p class="eyebrow">Questions fréquentes</p>
          <h2>Vos questions sur nos travaux</h2>
        </div>
        <FaqList :items="faq" />
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<style scoped>
.hero { color: var(--white); padding: clamp(56px, 9vw, 110px) 0; border-bottom: 6px solid var(--orange); }
.hero__inner { display: grid; grid-template-columns: 1.3fr 1fr; gap: 48px; align-items: center; }
.hero .lead { color: #d6d6d6; }
.hero .lead a { color: var(--white); text-decoration-color: var(--orange); text-underline-offset: 3px; }
.hero__actions { display: flex; gap: 12px; flex-wrap: wrap; margin: 28px 0; }
.hero__badges { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 10px 24px; font-weight: 600; font-size: .95rem; }
.hero__badges li { display: inline-flex; align-items: center; gap: 8px; }
.hero__badges svg { width: 18px; height: 18px; color: var(--orange); }
.hero__logo img { width: 100%; max-width: 420px; margin-inline: auto; filter: drop-shadow(0 20px 40px rgb(0 0 0 / .4)); border-radius: 8px; }
.about { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
.about a:not(.btn) { color: var(--orange-dark); }
.strengths .card { padding: 22px; }
.strengths p { color: var(--muted); font-size: .95rem; }
.zone { display: grid; grid-template-columns: 1.2fr 1fr; gap: 48px; align-items: center; }
.zone__list { list-style: none; padding: 0; margin: 0; display: grid; gap: 16px; }
.zone__list li { display: flex; gap: 14px; background: rgb(255 255 255 / .06); padding: 18px; border-radius: var(--radius); border-left: 4px solid var(--orange); color: #d6d6d6; }
.zone__list strong { color: var(--white); }
.zone__list svg { width: 22px; height: 22px; color: var(--orange); flex: none; margin-top: 2px; }
.center { text-align: center; margin-top: 32px; }
@media (max-width: 900px) {
  .hero__inner, .about, .zone { grid-template-columns: 1fr; }
  .hero__logo { order: -1; }
  .hero__logo img { max-width: 260px; }
}
</style>
