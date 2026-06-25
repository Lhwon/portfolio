<template>
  <v-card
    class="project-card h-100"
    color="surface"
    role="button"
    tabindex="0"
    variant="flat"
    @click="emitOpen"
    @keydown.enter="emitOpen"
  >
    <div class="project-thumbnail">
      <v-img
        v-if="project.thumbnailUrl"
        :alt="project.imageAlt ?? `${project.name} thumbnail`"
        class="project-thumbnail-image"
        contain
        height="160"
        :src="project.thumbnailUrl"
      />
      <div v-else class="project-image-placeholder d-flex flex-column align-center justify-center ga-2">
        <v-icon color="primary" icon="mdi-image-outline" size="32" />
        <span class="text-caption text-medium-emphasis">Project Image</span>
      </div>
    </div>

    <v-card-text class="pa-6">
      <div class="d-flex justify-space-between ga-4 mb-3">
        <div>
          <h3 class="text-h6 font-weight-bold">{{ project.name }}</h3>
          <p class="text-caption text-medium-emphasis">{{ project.company }} · {{ project.period }}</p>
        </div>
        <v-chip color="accent" size="small" variant="tonal">{{ project.contribution }}</v-chip>
      </div>

      <p class="text-body-2 text-secondary mb-3">{{ project.role }}</p>
      <p class="project-card-summary text-body-2 text-medium-emphasis">{{ project.summary }}</p>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { PortfolioProject } from '../types/portfolio'

const props = defineProps<{
  project: PortfolioProject
}>()

const emit = defineEmits<{
  open: [project: PortfolioProject]
}>()

/**
 * 부모 컴포넌트에 선택된 프로젝트를 전달한다.
 */
const emitOpen = () => {
  emit('open', props.project)
}
</script>
