<template>
  <section class="project-detail-section project-architecture-section">
    <h4 class="text-subtitle-1 font-weight-bold mb-2">시스템 아키텍처</h4>

    <v-img
      v-if="architecture.imageUrl"
      :alt="architecture.caption ?? '프로젝트 시스템 아키텍처'"
      class="project-architecture-image mb-2"
      contain
      :src="architecture.imageUrl"
    />

    <p
      v-if="architecture.caption"
      class="project-architecture-caption text-body-2 text-medium-emphasis"
    >
      {{ architecture.caption }}
    </p>

    <div
      class="project-architecture-diagram"
      :style="diagramStyle"
    >
      <template
        v-for="(flow, index) in architecture.flows"
        :key="flow.title"
      >
        <article class="project-architecture-node">
          <div class="project-architecture-node-icon d-flex align-center justify-center">
            <v-icon :icon="flow.icon" size="20" />
          </div>

          <p class="text-body-2 font-weight-bold mb-1">{{ flow.title }}</p>
          <p class="text-caption text-medium-emphasis mb-0">
            {{ flow.description }}
          </p>
        </article>

        <div
          v-if="index < architecture.flows.length - 1"
          class="project-architecture-connector"
        >
          <v-icon
            class="project-architecture-connector-icon"
            icon="mdi-arrow-right"
            size="22"
          />
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ProjectArchitecture } from '@/types/portfolio'

const props = defineProps<{
  architecture: ProjectArchitecture
}>()

const diagramStyle = computed(() => {
  const columns = props.architecture.flows
    .flatMap((_, index) => (
      index < props.architecture.flows.length - 1
        ? ['minmax(0, 1fr)', '64px']
        : ['minmax(0, 1fr)']
    ))
    .join(' ')

  return {
    gridTemplateColumns: columns,
  }
})
</script>
