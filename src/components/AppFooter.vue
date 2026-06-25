<template>
  <v-footer class="py-8" color="background">
    <v-container class="d-flex flex-column flex-md-row align-center justify-space-between ga-4">
      <p class="text-body-2 text-medium-emphasis">© 2026 Lee Hwon. Built with Vue 3, TypeScript, Vite, Vuetify.</p>
      <div class="d-flex ga-2">
        <v-btn
          v-for="contact in profile.contacts"
          :key="contact.label"
          :aria-label="contact.label"
          :href="contact.href"
          :icon="contact.icon"
          rel="noopener"
          target="_blank"
          variant="text"
        />
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { profile } from '../data/profile'
</script>
