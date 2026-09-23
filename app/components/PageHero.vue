<script setup lang="ts">
defineProps<{ title: string, lead?: string, crumbs?: { name: string, path: string }[] }>()
</script>

<template>
  <section class="page-hero bricks">
    <div class="container">
      <nav v-if="crumbs" aria-label="Fil d'Ariane" class="crumbs">
        <NuxtLink to="/">Accueil</NuxtLink>
        <template v-for="c in crumbs" :key="c.path">
          <span aria-hidden="true">›</span>
          <span aria-current="page">{{ c.name }}</span>
        </template>
      </nav>
      <h1>{{ title }}</h1>
      <p v-if="lead" class="lead">{{ lead }}</p>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.page-hero { border-bottom: 5px solid var(--orange); }
.crumbs { display: flex; gap: 8px; font-size: .9rem; color: #bdbdbd; margin-bottom: 18px; flex-wrap: wrap; }
.crumbs a { text-decoration: none; }
.crumbs a:hover { color: var(--orange); }
</style>
