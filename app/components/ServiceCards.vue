<template>
  <div class="grid grid--4">
    <article v-for="s in services" :key="s.slug" class="card service">
      <div class="service__icon"><img :src="`/images/icons/${s.icon}.webp`" alt="" width="46" height="36" loading="lazy"></div>
      <h3>{{ s.name }}</h3>
      <p>{{ s.excerpt }}</p>
      <NuxtLink :to="`/${s.slug}`" class="service__link">
        {{ s.name }} à Tours <AppIcon name="arrow" />
      </NuxtLink>
    </article>
  </div>
</template>

<style scoped>
.service { display: flex; flex-direction: column; transition: transform .2s, box-shadow .2s; }
.service:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgb(0 0 0 / .12); }
.service__icon { width: 72px; height: 60px; border-radius: 12px; background: var(--black); display: grid; place-items: center; margin-bottom: 18px; border-bottom: 3px solid var(--orange); }
.service__icon img { width: 46px; height: 36px; object-fit: contain; }
.service p { color: var(--muted); flex: 1; }
.service__link { display: inline-flex; align-items: center; gap: 8px; font-weight: 700; color: var(--orange-dark); text-decoration: none; margin-top: 8px; }
.service__link svg { width: 18px; height: 18px; transition: transform .2s; }
.service__link:hover svg { transform: translateX(4px); }
</style>
