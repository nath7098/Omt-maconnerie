<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer bricks">
    <div class="container footer__grid">
      <div>
        <img src="/images/logo-omt-dark.webp" alt="O.M.T – Oliveira Maçonnerie Tours" width="200" height="131" loading="lazy" class="footer__logo">
        <p><strong>O.M.T – {{ site.fullName }}</strong>, artisan maçon à Tours : maçonnerie générale, terrassement et ravalement de façade en Indre-et-Loire et dans les régions voisines.</p>
      </div>
      <div>
        <p class="footer__title">Prestations</p>
        <ul>
          <li v-for="s in services" :key="s.slug"><NuxtLink :to="`/${s.slug}`">{{ s.name }} à Tours</NuxtLink></li>
          <li><NuxtLink to="/realisations">Nos réalisations</NuxtLink></li>
        </ul>
      </div>
      <div>
        <p class="footer__title">Zone d'intervention</p>
        <ul>
          <li><NuxtLink to="/zone-intervention">Tours et agglomération</NuxtLink></li>
          <li><NuxtLink to="/zone-intervention">Indre-et-Loire (37)</NuxtLink></li>
          <li><NuxtLink to="/zone-intervention">Centre-Val de Loire</NuxtLink></li>
          <li><NuxtLink to="/zone-intervention">Pays de la Loire</NuxtLink></li>
        </ul>
      </div>
      <div>
        <p class="footer__title">Contact</p>
        <ul class="footer__contact">
          <li><a :href="`tel:${site.phoneIntl}`"><AppIcon name="phone" />{{ site.phone }}</a></li>
          <li><a :href="`mailto:${site.email}`"><AppIcon name="mail" />{{ site.email }}</a></li>
          <li><span><AppIcon name="pin" />{{ site.city }} ({{ site.postalCode.slice(0, 2) }})</span></li>
          <li><span><AppIcon name="clock" />{{ site.openingHours }}</span></li>
          <li v-if="site.facebookUrl"><a :href="site.facebookUrl" target="_blank" rel="noopener"><AppIcon name="facebook" />Facebook</a></li>
        </ul>
      </div>
    </div>
    <div class="container footer__bottom">
      <span>© {{ year }} O.M.T – {{ site.fullName }}</span>
      <NuxtLink to="/mentions-legales">Mentions légales</NuxtLink>
    </div>
  </footer>
</template>

<style scoped>
.footer { color: #cfcfcf; padding-top: 64px; font-size: .95rem; }
.footer__grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1.3fr; gap: 40px; }
.footer__logo { width: 180px; margin-bottom: 16px; }
.footer__title { color: var(--white); font-weight: 700; text-transform: uppercase; letter-spacing: .12em; font-size: .85rem; border-bottom: 2px solid var(--orange); display: inline-block; padding-bottom: 6px; }
.footer ul { list-style: none; padding: 0; margin: 0; }
.footer li { margin-bottom: 10px; }
.footer a { text-decoration: none; }
.footer a:hover { color: var(--orange); }
.footer__contact a, .footer__contact span { display: inline-flex; align-items: center; gap: 10px; word-break: break-all; }
.footer__contact svg { width: 18px; height: 18px; color: var(--orange); flex: none; }
.footer__bottom { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; border-top: 1px solid rgb(255 255 255 / .1); margin-top: 48px; padding-block: 20px; font-size: .85rem; }
@media (max-width: 900px) { .footer__grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .footer__grid { grid-template-columns: 1fr; } }
</style>
