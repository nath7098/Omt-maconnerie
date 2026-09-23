<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const notFound = computed(() => props.error.statusCode === 404)

useHead({
  htmlAttrs: { lang: 'fr' },
  title: notFound.value ? 'Page introuvable' : 'Erreur',
  meta: [{ name: 'robots', content: 'noindex, follow' }],
})
</script>

<template>
  <div>
    <AppHeader />
    <main class="section error">
      <div class="container">
        <p class="eyebrow">Erreur {{ error.statusCode }}</p>
        <h1>{{ notFound ? 'Cette page n\'existe pas' : 'Une erreur est survenue' }}</h1>
        <p class="lead">La page demandée est introuvable ou a été déplacée. Voici où trouver ce que vous cherchez :</p>
        <ul class="links">
          <li><NuxtLink to="/" @click="clearError()">Accueil</NuxtLink></li>
          <li v-for="s in services" :key="s.slug"><NuxtLink :to="`/${s.slug}`" @click="clearError()">{{ s.name }} à Tours</NuxtLink></li>
          <li><NuxtLink to="/realisations" @click="clearError()">Nos réalisations</NuxtLink></li>
          <li><NuxtLink to="/contact" @click="clearError()">Contact & devis gratuit</NuxtLink></li>
        </ul>
        <a :href="`tel:${site.phoneIntl}`" class="btn btn--primary"><AppIcon name="phone" />{{ site.phone }}</a>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.error { min-height: 50vh; }
.links { margin: 0 0 32px; padding-left: 20px; line-height: 2; }
.links a { color: var(--orange-dark); font-weight: 600; }
</style>
