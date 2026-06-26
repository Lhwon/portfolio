<template>
  <section id="career" class="section-block">
    <v-container>
      <div class="mb-8">
        <p class="section-eyebrow">Career</p>
        <h2 class="text-h4 font-weight-bold">경력 요약</h2>
        <p class="text-medium-emphasis mt-3">시스템 개발 및 운영 경험</p>
      </div>

      <v-card class="mb-10" color="surface" variant="flat">
        <v-card-text class="pa-6">
          <div class="d-flex align-center ga-3 mb-4">
            <v-icon color="primary" icon="mdi-chart-timeline-variant" size="28" />
            <h3 class="text-h5 font-weight-bold">{{ careerStory.title }}</h3>
          </div>
          <p
            v-for="paragraph in careerStory.paragraphs"
            :key="paragraph"
            class="text-body-1 text-medium-emphasis mb-3"
          >
            {{ paragraph }}
          </p>
        </v-card-text>
      </v-card>

      <v-timeline align="start" side="end" truncate-line="both">
        <v-timeline-item
          v-for="item in careerItems"
          :key="`${item.period}-${item.role}`"
          dot-color="primary"
          size="small"
        >
          <v-card color="surface" variant="flat">
            <v-card-title class="text-wrap">{{ item.role }}</v-card-title>
            <v-card-subtitle>{{ item.period }} · {{ item.company }}</v-card-subtitle>
            <v-card-text>
              <p class="mb-4 text-medium-emphasis">{{ item.summary }}</p>
              <v-list bg-color="transparent" class="pa-0" density="compact">
                <v-list-item v-for="highlight in item.highlights" :key="highlight" class="px-0">
                  <template #prepend>
                    <v-icon color="primary" icon="mdi-check-circle-outline" size="18" />
                  </template>
                  <v-list-item-title class="text-wrap">{{ highlight }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { careerItems, careerStory } from '../data/career'
</script>
