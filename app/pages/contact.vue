<script setup lang="ts">
usePageSeo({
  title: 'Contact & devis gratuit – Maçon à Tours',
  description: `Contactez O.M.T Maçonnerie à Tours pour un devis gratuit : maçonnerie, terrassement, ravalement de façade. Tél. ${site.phone} – ${site.email}.`,
  path: '/contact',
  schema: [
    breadcrumbSchema([{ name: 'Contact', path: '/contact' }]),
    { '@type': 'ContactPage', 'name': 'Contact O.M.T Maçonnerie Tours', 'url': absoluteUrl('/contact'), 'about': { '@id': `${absoluteUrl('/')}#entreprise` } },
  ],
})

const form = reactive({ name: '', phone: '', email: '', city: '', service: '', message: '' })

// Site statique : le formulaire prépare un e-mail pré-rempli dans la messagerie du visiteur.
function submit() {
  const subject = `Demande de devis${form.service ? ` – ${form.service}` : ''}${form.city ? ` – ${form.city}` : ''}`
  const body = [
    `Nom : ${form.name}`,
    `Téléphone : ${form.phone}`,
    `E-mail : ${form.email}`,
    `Commune des travaux : ${form.city}`,
    `Prestation : ${form.service}`,
    '',
    form.message,
  ].join('\n')
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
</script>

<template>
  <div>
    <PageHero
      title="Contact et demande de devis gratuit"
      lead="Décrivez-nous votre projet : nous vous recontactons rapidement pour convenir d'une visite et établir votre devis, gratuitement et sans engagement."
      :crumbs="[{ name: 'Contact', path: '/contact' }]"
    />

    <section class="section">
      <div class="container contact">
        <div class="contact__info">
          <h2>Joindre O.M.T</h2>
          <a :href="`tel:${site.phoneIntl}`" class="info"><span class="info__icon"><AppIcon name="phone" /></span><span><small>Téléphone</small>{{ site.phone }}</span></a>
          <a :href="`mailto:${site.email}`" class="info"><span class="info__icon"><AppIcon name="mail" /></span><span><small>E-mail</small>{{ site.email }}</span></a>
          <div class="info"><span class="info__icon"><AppIcon name="pin" /></span><span><small>Basé à</small>{{ site.city }} – {{ site.department }}</span></div>
          <div class="info"><span class="info__icon"><AppIcon name="clock" /></span><span><small>Horaires</small>{{ site.openingHours }}</span></div>
          <a v-if="site.facebookUrl" :href="site.facebookUrl" target="_blank" rel="noopener" class="info"><span class="info__icon"><AppIcon name="facebook" /></span><span><small>Facebook</small>Suivez nos chantiers</span></a>
          <p class="zones">Interventions à Tours, en Indre-et-Loire, en région Centre-Val de Loire et en Pays de la Loire.</p>
        </div>

        <form class="card contact__form" @submit.prevent="submit">
          <h2>Demande de devis</h2>
          <div class="row">
            <label>Nom *<input v-model="form.name" required autocomplete="name" name="name"></label>
            <label>Téléphone *<input v-model="form.phone" required type="tel" autocomplete="tel" name="phone"></label>
          </div>
          <div class="row">
            <label>E-mail<input v-model="form.email" type="email" autocomplete="email" name="email"></label>
            <label>Commune des travaux<input v-model="form.city" autocomplete="address-level2" name="city" placeholder="ex : Tours"></label>
          </div>
          <label>Prestation
            <select v-model="form.service" name="service">
              <option value="">— Choisir —</option>
              <option v-for="s in services" :key="s.slug" :value="s.name">{{ s.name }}</option>
              <option value="Autre">Autre</option>
            </select>
          </label>
          <label>Votre projet *<textarea v-model="form.message" required rows="6" name="message" placeholder="Type de travaux, dimensions approximatives, délais souhaités…" /></label>
          <button type="submit" class="btn btn--primary">Envoyer ma demande <AppIcon name="arrow" /></button>
          <p class="note">Le bouton ouvre votre messagerie avec un e-mail pré-rempli. Vous pouvez aussi nous appeler directement au <a :href="`tel:${site.phoneIntl}`">{{ site.phone }}</a>.</p>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact { display: grid; grid-template-columns: 1fr 1.4fr; gap: 48px; align-items: start; }
.info { display: flex; align-items: center; gap: 16px; text-decoration: none; margin-bottom: 18px; font-weight: 700; font-size: 1.1rem; word-break: break-all; }
.info small { display: block; font-weight: 500; color: var(--muted); font-size: .85rem; text-transform: uppercase; letter-spacing: .08em; }
.info__icon { width: 52px; height: 52px; border-radius: 10px; background: var(--charcoal); color: var(--orange); display: grid; place-items: center; flex: none; }
.info__icon svg { width: 24px; height: 24px; }
a.info:hover { color: var(--orange-dark); }
.zones { color: var(--muted); }
.contact__form { display: grid; gap: 16px; }
.contact__form h2 { margin-bottom: 0; }
.row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
label { display: grid; gap: 6px; font-weight: 600; font-size: .95rem; }
input, select, textarea { font: inherit; padding: 12px 14px; border: 1px solid var(--grey-light); border-radius: 6px; background: var(--white); width: 100%; }
input:focus, select:focus, textarea:focus { outline: none; border-color: var(--orange); box-shadow: 0 0 0 3px rgb(230 126 34 / .2); }
.note { font-size: .85rem; color: var(--muted); margin: 0; }
.note a { color: var(--orange-dark); }
@media (max-width: 900px) { .contact { grid-template-columns: 1fr; } }
@media (max-width: 560px) { .row { grid-template-columns: 1fr; } }
</style>
