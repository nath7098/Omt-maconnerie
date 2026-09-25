<template>
  <div class="callbar">
    <a :href="`tel:${site.phoneIntl}`" class="callbar__btn callbar__btn--call"><AppIcon name="phone" /> Appeler</a>
    <NuxtLink to="/contact" class="callbar__btn"><AppIcon name="mail" /> Devis gratuit</NuxtLink>
  </div>
</template>

<style scoped>
.callbar { display: none; }
@media (max-width: 760px) {
  .callbar { display: grid; grid-template-columns: 1fr 1fr; position: fixed; inset: auto 0 0 0; z-index: 60; box-shadow: 0 -4px 16px rgb(0 0 0 / .15); }
  .callbar__btn { display: flex; align-items: center; justify-content: center; gap: 8px; padding: 15px; font-weight: 700; text-decoration: none; background: var(--charcoal); color: var(--white); }
  .callbar__btn--call { background: var(--orange); color: var(--black); }
  .callbar svg { width: 20px; height: 20px; }
  :global(body) { padding-bottom: 54px; }
}
</style>
