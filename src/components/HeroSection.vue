<template>
  <section id="hero" class="hero-section d-flex align-center">
    <v-container>
      <v-row align="center" class="flex-column-reverse flex-md-row" justify="space-between">
        <v-col cols="12" md="7">
          <v-chip class="mb-5" color="primary" prepend-icon="mdi-factory" variant="tonal">
            Industrial Web Portfolio
          </v-chip>
          <h1 class="text-h3 text-md-h2 font-weight-bold mb-4">{{ profile.name }}</h1>
          <p class="text-h5 text-secondary mb-4">{{ profile.title }}</p>
          <p class="text-body-1 text-medium-emphasis mb-8 hero-copy">{{ profile.summary }}</p>

          <div class="d-flex flex-wrap ga-3">
            <v-btn
              color="primary"
              :href="profile.resumeUrl"
              prepend-icon="mdi-file-account-outline"
              target="_blank"
              rel="noopener"
            >
              이력서 PDF 보기
            </v-btn>
            <v-btn
              color="secondary"
              :href="profile.careerDescriptionUrl"
              prepend-icon="mdi-file-chart-outline"
              target="_blank"
              rel="noopener"
              variant="tonal"
            >
              경력기술서 보기
            </v-btn>
            <v-btn
              :href="githubUrl"
              prepend-icon="mdi-github"
              target="_blank"
              rel="noopener"
              variant="outlined"
            >
              GitHub 이동
            </v-btn>
            <v-btn prepend-icon="mdi-view-grid-outline" variant="text" @click="scrollToProjects">
              프로젝트 보기
            </v-btn>
          </div>
        </v-col>

        <v-col class="d-flex justify-center justify-md-end" cols="12" md="5">
          <v-avatar class="profile-avatar elevation-12" size="260">
            <v-img :alt="`${profile.name} profile image`" cover :src="profile.imageUrl" />
          </v-avatar>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { profile } from '../data/profile'

const githubUrl = computed(() => profile.contacts.find((contact) => contact.label === 'GitHub')?.href ?? '#')

/**
 * 프로젝트 섹션으로 화면을 이동한다.
 */
const scrollToProjects = () => {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
