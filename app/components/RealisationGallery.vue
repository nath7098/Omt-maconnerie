<script setup lang="ts">
/** eager : nombre de photos chargées immédiatement (celles visibles sans défiler) */
const props = withDefaults(defineProps<{ limit?: number, service?: string, eager?: number }>(), { eager: 0 })
const items = computed(() => {
  const list = props.service ? realisations.filter(r => r.services.includes(props.service as ServiceName)) : realisations
  return props.limit ? list.slice(0, props.limit) : list
})

// Miniature générée par « npm run images »
const thumb = (src: string) => src.replace(/\.webp$/, '-thumb.webp')

const dialog = ref<HTMLDialogElement>()
const current = ref<Realisation>()
function open(r: Realisation) {
  current.value = r
  dialog.value?.showModal()
}
</script>

<template>
  <div v-if="items.length" class="gallery">
    <figure v-for="(r, i) in items" :key="r.src" class="gallery__item">
      <button type="button" class="gallery__btn" :aria-label="`Agrandir : ${r.title}`" @click="open(r)">
        <img
          :src="thumb(r.src)"
          :srcset="`${thumb(r.src)} 800w, ${r.src} ${r.width}w`"
          sizes="(max-width: 640px) 92vw, 320px"
          :alt="r.alt" :width="r.width" :height="r.height" decoding="async"
          :loading="i < eager ? 'eager' : 'lazy'" :fetchpriority="i === 0 && eager ? 'high' : undefined"
        >
      </button>
      <figcaption>
        <strong>{{ r.title }}</strong>
        <span>{{ r.services.join(' · ') }}<template v-if="r.city"> – {{ r.city }}</template></span>
        <p>{{ r.description }}</p>
      </figcaption>
    </figure>
    <dialog ref="dialog" class="lightbox" @click="dialog?.close()">
      <template v-if="current">
        <img :src="current.src" :alt="current.alt" :width="current.width" :height="current.height">
        <p>{{ current.title }}</p>
      </template>
      <button type="button" class="lightbox__close" aria-label="Fermer"><AppIcon name="close" /></button>
    </dialog>
  </div>
  <div v-else class="gallery-empty">
    <p><strong>De nouvelles photos de chantiers arrivent très bientôt.</strong></p>
    <p>En attendant, contactez-nous : nous pouvons vous montrer des exemples de réalisations similaires à votre projet lors du rendez-vous.</p>
  </div>
</template>

<style scoped>
.gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }
.gallery__item { margin: 0; background: var(--white); border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); display: flex; flex-direction: column; }
.gallery__btn { display: block; padding: 0; border: 0; cursor: zoom-in; aspect-ratio: 1; overflow: hidden; background: var(--grey-light); }
.gallery__btn img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
.gallery__btn:hover img { transform: scale(1.04); }
.gallery__item figcaption { padding: 18px 20px 20px; border-top: 4px solid var(--orange); }
.gallery__item strong { display: block; font-size: 1.05rem; }
.gallery__item span { display: block; font-size: .8rem; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--orange-dark); margin: 2px 0 8px; }
.gallery__item p { margin: 0; color: var(--muted); font-size: .95rem; }
.gallery-empty { text-align: center; max-width: 640px; margin: 0 auto; padding: 32px; border: 2px dashed var(--grey-light); border-radius: var(--radius); color: var(--muted); }
.lightbox { border: 0; padding: 0; background: transparent; max-width: 94vw; max-height: 94vh; overflow: visible; }
.lightbox::backdrop { background: rgb(0 0 0 / .85); }
.lightbox img { max-width: 94vw; max-height: 86vh; width: auto; height: auto; border-radius: 6px; }
.lightbox p { color: #fff; text-align: center; margin: 10px 0 0; font-weight: 600; }
.lightbox__close { position: fixed; top: 16px; right: 16px; background: var(--orange); color: #fff; border: 0; border-radius: 50%; width: 44px; height: 44px; display: grid; place-items: center; cursor: pointer; }
.lightbox__close svg { width: 22px; height: 22px; }
</style>
