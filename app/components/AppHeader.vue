<script setup lang="ts">
const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })

const links = [
  ...services.map(s => ({ to: `/${s.slug}`, label: s.name.replace(' de façade', '') })),
  { to: '/realisations', label: 'Réalisations' },
  { to: '/zone-intervention', label: 'Zone d\'intervention' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <header class="header">
    <div class="topbar">
      <div class="container topbar__inner">
        <span><AppIcon name="pin" /> Tours · Indre-et-Loire · Centre-Val de Loire · Pays de la Loire</span>
        <a :href="`mailto:${site.email}`"><AppIcon name="mail" /> {{ site.email }}</a>
      </div>
    </div>
    <div class="container header__inner">
      <NuxtLink to="/" class="header__logo" aria-label="O.M.T – Oliveira Maçonnerie Tours, accueil">
        <img src="/images/logo-omt-header.webp" alt="Logo O.M.T Maçonnerie – Oliveira Maçonnerie Tours" width="141" height="72">
      </NuxtLink>

      <nav :class="['nav', { 'nav--open': open }]" aria-label="Navigation principale">
        <ul>
          <li v-for="l in links" :key="l.to">
            <NuxtLink :to="l.to" class="nav__link">{{ l.label }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <a :href="`tel:${site.phoneIntl}`" class="btn btn--primary header__call" :aria-label="`Appeler le ${site.phone}`">
        <AppIcon name="phone" /><span>{{ site.phone }}</span>
      </a>
      <button class="burger" :aria-expanded="open" aria-controls="menu" @click="open = !open">
        <AppIcon :name="open ? 'close' : 'menu'" />
        <span class="sr-only">Menu</span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header { position: sticky; top: 0; z-index: 50; background: var(--black); color: var(--white); border-bottom: 3px solid var(--orange); }
.topbar { background: #1a1a1a; color: #cfcfcf; font-size: .85rem; }
.topbar__inner { display: flex; justify-content: space-between; gap: 16px; padding-block: 7px; }
.topbar span, .topbar a { display: inline-flex; align-items: center; gap: 8px; text-decoration: none; }
.topbar svg { width: 15px; height: 15px; color: var(--orange); }
.header__inner { display: flex; align-items: center; gap: 12px; padding-block: 10px; }
.header__logo { flex: none; }
.header__logo img { width: 141px; height: auto; }
.nav { margin-left: auto; }
.nav ul { display: flex; gap: 4px; list-style: none; margin: 0; padding: 0; }
.nav__link { display: block; padding: 8px 6px; text-decoration: none; font-weight: 600; font-size: .95rem; border-radius: 6px; white-space: nowrap; }
.nav__link:hover { color: var(--orange); }
.nav__link.router-link-exact-active { color: var(--orange); }
.header__call { padding: 11px 18px; white-space: nowrap; }
.burger { display: none; background: none; border: 0; padding: 8px; cursor: pointer; color: var(--white); }
.burger svg { width: 28px; height: 28px; }

@media (max-width: 1300px) {
  .topbar span { display: none; }
  .topbar__inner { justify-content: center; }
  .burger { display: block; }
  .header__call { margin-left: auto; }
  .nav { position: absolute; left: 0; right: 0; top: 100%; background: var(--black); box-shadow: 0 12px 20px rgb(0 0 0 / .1); display: none; }
  .nav--open { display: block; }
  .nav ul { flex-direction: column; padding: 12px 20px 20px; }
  .nav__link { padding: 12px 8px; border-bottom: 1px solid #262626; }
}
@media (max-width: 520px) {
  .header__logo img { width: 110px; }
  .header__call span { display: none; }
  .header__call { padding: 11px 13px; }
}
</style>
