<template>
  <section id="skills" class="section-block">
    <v-container>
      <div class="mb-8">
        <p class="section-eyebrow">Skills</p>
        <h2 class="text-h4 font-weight-bold">핵심 역량</h2>
      </div>

      <v-row>
        <v-col v-for="group in skillGroups" :key="group.title" cols="12" md="6">
          <v-card class="h-100" color="surface" variant="flat">
            <v-card-title>{{ group.title }}</v-card-title>
            <v-card-text class="d-flex flex-wrap ga-2">
              <v-chip v-for="skill in group.items" :key="skill" color="primary" variant="tonal">
                {{ skill }}
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { skillGroups } from '@/data/skills'
</script>
