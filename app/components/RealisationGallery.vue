<script setup lang="ts">
const props = defineProps<{ limit?: number }>()
const items = computed(() => (props.limit ? realisations.slice(0, props.limit) : realisations))
</script>

<template>
  <div v-if="items.length" class="gallery">
    <figure v-for="r in items" :key="r.src" class="gallery__item">
      <img :src="r.src" :alt="r.alt" :width="r.width || 800" :height="r.height || 600" loading="lazy" decoding="async">
      <figcaption>
        <strong>{{ r.title }}</strong>
        <span>{{ r.service }} · {{ r.city }}</span>
      </figcaption>
    </figure>
  </div>
  <div v-else class="gallery-empty">
    <p><strong>Nos photos de chantiers arrivent très bientôt.</strong></p>
    <p>En attendant, contactez-nous : nous pouvons vous montrer des exemples de réalisations similaires à votre projet lors du rendez-vous.</p>
  </div>
</template>

<style scoped>
.gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
.gallery__item { position: relative; margin: 0; border-radius: var(--radius); overflow: hidden; aspect-ratio: 4 / 3; background: var(--grey-light); }
.gallery__item img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
.gallery__item:hover img { transform: scale(1.04); }
.gallery__item figcaption { position: absolute; inset: auto 0 0 0; padding: 36px 16px 14px; color: #fff; background: linear-gradient(transparent, rgb(0 0 0 / .75)); display: grid; }
.gallery__item figcaption span { font-size: .85rem; color: #ffd3ab; }
.gallery-empty { text-align: center; max-width: 640px; margin: 0 auto; padding: 32px; border: 2px dashed var(--grey-light); border-radius: var(--radius); color: var(--muted); }
</style>
