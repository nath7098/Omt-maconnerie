<script setup lang="ts">
withDefaults(defineProps<{ title?: string, text?: string }>(), {
  title: 'Un projet de maçonnerie à Tours ?',
  text: 'Déplacement et devis gratuits, sans engagement. Réponse rapide.',
})
</script>

<template>
  <section class="cta">
    <div class="container cta__inner">
      <div>
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
      </div>
      <div class="cta__actions">
        <a :href="`tel:${site.phoneIntl}`" class="btn btn--dark"><AppIcon name="phone" />{{ site.phone }}</a>
        <NuxtLink to="/contact" class="btn btn--outline">Demander un devis <AppIcon name="arrow" /></NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta { background: var(--orange); color: var(--white); padding: 48px 0; }
.cta__inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
.cta h2 { margin-bottom: .25em; font-size: clamp(1.4rem, 2.6vw, 2rem); }
.cta p { margin: 0; font-size: 1.1rem; }
.cta__actions { display: flex; gap: 12px; flex-wrap: wrap; }
</style>
