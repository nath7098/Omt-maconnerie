<script setup lang="ts">
useHead({
  titleTemplate: t => (t && !t.includes('O.M.T') ? `${t} | O.M.T` : t || 'O.M.T Maçonnerie Tours'),
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify({ '@context': 'https://schema.org', ...businessSchema() }) }],
})
</script>

<template>
  <a href="#contenu" class="skip-link">Aller au contenu</a>
  <AppHeader />
  <main id="contenu">
    <NuxtPage />
  </main>
  <AppFooter />
  <MobileCallBar />
</template>
