<script setup lang="ts">
defineProps<{ name: 'phone' | 'mail' | 'pin' | 'wall' | 'shovel' | 'facade' | 'check' | 'clock' | 'facebook' | 'arrow' | 'menu' | 'close' | 'quote' }>()
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path v-if="name === 'phone'" d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    <template v-else-if="name === 'mail'"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></template>
    <template v-else-if="name === 'pin'"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></template>
    <template v-else-if="name === 'wall'"><rect x="2" y="4" width="20" height="16" rx="1" /><path d="M2 9.3h20M2 14.7h20M8 4v5.3M16 4v5.3M12 9.3v5.4M5 14.7V20M19 14.7V20M12 14.7V20" /></template>
    <template v-else-if="name === 'shovel'"><path d="M2 22 8.5 15.5M11 10l3 3M14.5 6.5l3 3" /><path d="M18 2l4 4-7.5 7.5a3 3 0 0 1-4.2 0l-.3-.3a3 3 0 0 1 0-4.2z" /><path d="M8 13l3 3-2.5 2.5L5.5 15.5z" /></template>
    <template v-else-if="name === 'facade'"><path d="M3 21V8l9-5 9 5v13" /><path d="M3 21h18M9 21v-6h6v6M7 11h2M15 11h2" /></template>
    <path v-else-if="name === 'check'" d="M20 6 9 17l-5-5" />
    <template v-else-if="name === 'clock'"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></template>
    <path v-else-if="name === 'facebook'" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    <path v-else-if="name === 'arrow'" d="M5 12h14M12 5l7 7-7 7" />
    <path v-else-if="name === 'menu'" d="M3 6h18M3 12h18M3 18h18" />
    <path v-else-if="name === 'close'" d="M18 6 6 18M6 6l12 12" />
    <path v-else-if="name === 'quote'" d="M3 21c3 0 7-1 7-8V5H3v8h4c0 4-2 5-4 5zm11 0c3 0 7-1 7-8V5h-7v8h4c0 4-2 5-4 5z" />
  </svg>
</template>
