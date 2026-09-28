<script setup lang="ts">
/**
 * eager : nombre de photos chargées immédiatement (celles visibles sans défiler)
 * filters : affiche les filtres par prestation (toutes les photos restent dans le HTML pour Google)
 */
const props = withDefaults(
  defineProps<{ limit?: number, service?: string, eager?: number, filters?: boolean }>(),
  { eager: 0, filters: false },
)
const items = computed(() => {
  const list = props.service ? realisations.filter(r => r.services.includes(props.service as ServiceName)) : realisations
  return props.limit ? list.slice(0, props.limit) : list
})

const filterList = computed(() => [
  { name: 'Tous', count: items.value.length },
  ...services
    .map(s => ({ name: s.name, count: items.value.filter(r => r.services.includes(s.name as ServiceName)).length }))
    .filter(f => f.count),
])
const active = ref('Tous')
const isVisible = (r: Realisation) => active.value === 'Tous' || r.services.includes(active.value as ServiceName)
const visible = computed(() => items.value.filter(isVisible))

// Miniature (800 px) générée par « npm run images » ; la grande image n'est chargée qu'à l'ouverture
const thumb = (src: string) => src.replace(/\.webp$/, '-thumb.webp')
// Pastille déduite du nom de fichier
const badge = (src: string) => src.includes('avant-apres') ? 'Avant / après' : /etapes|-coulage/.test(src) ? 'Étapes' : ''

const dialog = ref<HTMLDialogElement>()
const index = ref(0)
const current = computed(() => visible.value[index.value])
function open(r: Realisation) {
  index.value = visible.value.indexOf(r)
  dialog.value?.showModal()
}
function move(step: number) {
  const n = visible.value.length
  index.value = (index.value + step + n) % n
}
function onKey(e: KeyboardEvent) {
  if (e.key === 'ArrowRight') move(1)
  if (e.key === 'ArrowLeft') move(-1)
}
</script>

<template>
  <div v-if="items.length">
    <div v-if="filters && filterList.length > 2" class="filters" role="group" aria-label="Filtrer les réalisations">
      <button
        v-for="f in filterList" :key="f.name" type="button"
        :class="['filters__btn', { 'filters__btn--active': active === f.name }]"
        :aria-pressed="active === f.name" @click="active = f.name"
      >
        {{ f.name }} <span>{{ f.count }}</span>
      </button>
    </div>

    <div class="gallery">
      <figure v-for="(r, i) in items" v-show="isVisible(r)" :key="r.src" class="gallery__item">
        <button type="button" class="gallery__btn" :aria-label="`Agrandir : ${r.title}`" @click="open(r)">
          <img
            :src="thumb(r.src)"
            :alt="r.alt" :width="r.width" :height="r.height" decoding="async"
            :loading="i < eager ? 'eager' : 'lazy'" :fetchpriority="i === 0 && eager ? 'high' : undefined"
          >
          <span v-if="badge(r.src)" class="gallery__badge">{{ badge(r.src) }}</span>
        </button>
        <figcaption>
          <strong>{{ r.title }}</strong>
          <span>{{ r.services.join(' · ') }}<template v-if="r.city"> – {{ r.city }}</template></span>
          <p>{{ r.description }}</p>
        </figcaption>
      </figure>
    </div>

    <dialog ref="dialog" class="lightbox" aria-label="Photo agrandie" @click.self="dialog?.close()" @keydown="onKey">
      <figure v-if="current" class="lightbox__figure">
        <img :src="current.src" :alt="current.alt" :width="current.width" :height="current.height">
        <figcaption>{{ current.title }} <small>{{ index + 1 }} / {{ visible.length }}</small></figcaption>
      </figure>
      <button type="button" class="lightbox__nav lightbox__nav--prev" aria-label="Photo précédente" @click="move(-1)"><AppIcon name="arrow" /></button>
      <button type="button" class="lightbox__nav lightbox__nav--next" aria-label="Photo suivante" @click="move(1)"><AppIcon name="arrow" /></button>
      <button type="button" class="lightbox__close" aria-label="Fermer" @click="dialog?.close()"><AppIcon name="close" /></button>
    </dialog>
  </div>
  <div v-else class="gallery-empty">
    <p><strong>De nouvelles photos de chantiers arrivent très bientôt.</strong></p>
    <p>En attendant, contactez-nous : nous pouvons vous montrer des exemples de réalisations similaires à votre projet lors du rendez-vous.</p>
  </div>
</template>

<style scoped>
.filters { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 32px; }
.filters__btn { font: inherit; font-weight: 700; font-size: .95rem; padding: 10px 18px; border-radius: 999px; border: 2px solid var(--grey-light); background: var(--white); color: var(--text); cursor: pointer; transition: border-color .2s, background .2s, color .2s; }
.filters__btn span { display: inline-block; min-width: 1.6em; margin-left: 4px; padding: 0 6px; border-radius: 999px; background: var(--paper); font-size: .8rem; }
.filters__btn:hover { border-color: var(--orange); }
.filters__btn--active { background: var(--black); border-color: var(--black); color: var(--white); }
.filters__btn--active span { background: var(--orange); color: var(--black); }
@media (max-width: 640px) {
  .filters { flex-wrap: nowrap; overflow-x: auto; margin-inline: -20px; padding: 0 20px 6px; scrollbar-width: none; }
  .filters__btn { flex: none; }
}

.gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }
.gallery__item { margin: 0; background: var(--white); border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); display: flex; flex-direction: column; }
.gallery__btn { position: relative; display: block; padding: 0; border: 0; cursor: zoom-in; aspect-ratio: 1; overflow: hidden; background: var(--grey-light); }
.gallery__btn img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
.gallery__btn:hover img { transform: scale(1.04); }
.gallery__badge { position: absolute; right: 12px; bottom: 12px; background: var(--orange); color: var(--black); font-size: .75rem; font-weight: 800; text-transform: uppercase; letter-spacing: .06em; padding: 5px 10px; border-radius: 4px; }
.gallery__item figcaption { padding: 18px 20px 20px; border-top: 4px solid var(--orange); flex: 1; }
.gallery__item strong { display: block; font-size: 1.05rem; }
.gallery__item figcaption span { display: block; font-size: .8rem; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--orange-dark); margin: 2px 0 8px; }
.gallery__item p { margin: 0; color: var(--muted); font-size: .95rem; }
.gallery-empty { text-align: center; max-width: 640px; margin: 0 auto; padding: 32px; border: 2px dashed var(--grey-light); border-radius: var(--radius); color: var(--muted); }

.lightbox { border: 0; padding: 0; background: transparent; max-width: 100vw; max-height: 100vh; overflow: visible; }
.lightbox::backdrop { background: rgb(0 0 0 / .9); }
.lightbox__figure { margin: 0; }
.lightbox img { max-width: 92vw; max-height: 84vh; width: auto; height: auto; border-radius: 6px; }
.lightbox figcaption { color: #fff; text-align: center; margin-top: 10px; font-weight: 600; }
.lightbox figcaption small { color: #aaa; margin-left: 8px; font-weight: 400; }
.lightbox__close, .lightbox__nav { position: fixed; background: var(--orange); color: var(--black); border: 0; border-radius: 50%; width: 46px; height: 46px; display: grid; place-items: center; cursor: pointer; }
.lightbox__close { top: 16px; right: 16px; }
.lightbox__nav { top: 50%; transform: translateY(-50%); }
.lightbox__nav--prev { left: 12px; }
.lightbox__nav--prev svg { transform: rotate(180deg); }
.lightbox__nav--next { right: 12px; }
.lightbox__close svg, .lightbox__nav svg { width: 22px; height: 22px; }
</style>
