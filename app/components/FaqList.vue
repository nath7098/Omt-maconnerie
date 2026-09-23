<script setup lang="ts">
defineProps<{ items: { q: string, a: string }[] }>()
</script>

<template>
  <div class="faq">
    <details v-for="(f, i) in items" :key="i" class="faq__item">
      <summary><h3>{{ f.q }}</h3></summary>
      <p>{{ f.a }}</p>
    </details>
  </div>
</template>

<style scoped>
.faq { display: grid; gap: 12px; max-width: 860px; margin-inline: auto; }
.faq__item { background: var(--white); border-radius: var(--radius); box-shadow: var(--shadow); padding: 0 24px; }
.faq summary { cursor: pointer; list-style: none; padding: 20px 32px 20px 0; position: relative; }
.faq summary::-webkit-details-marker { display: none; }
.faq summary::after { content: '+'; position: absolute; right: 0; top: 50%; transform: translateY(-50%); font-size: 1.6rem; color: var(--orange); font-weight: 700; }
.faq details[open] summary::after { content: '−'; }
.faq h3 { margin: 0; font-size: 1.05rem; }
.faq p { color: var(--muted); padding-bottom: 20px; margin: 0; }
</style>
