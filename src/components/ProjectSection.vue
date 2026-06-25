<template>
  <section id="projects" class="section-block">
    <v-container>
      <div class="mb-8">
        <p class="section-eyebrow">Projects</p>
        <h2 class="text-h4 font-weight-bold">프로젝트</h2>
        <p class="text-medium-emphasis mt-3">카드를 선택하면 상세 내용을 확인할 수 있습니다.</p>
      </div>

      <div v-for="group in projectGroups" :key="group.company" class="project-company-group">
        <div class="d-flex flex-column flex-md-row justify-space-between ga-2 mb-4">
          <div>
            <h3 class="text-h5 font-weight-bold">{{ group.company }}</h3>
            <p class="text-body-2 text-medium-emphasis">{{ group.period }}</p>
          </div>
          <v-chip class="align-self-start" color="primary" variant="tonal">
            {{ group.projects.length }} Projects
          </v-chip>
        </div>

        <v-row>
          <v-col v-for="project in group.projects" :key="project.id" cols="12" md="6">
            <ProjectCard :project="project" @open="openProject" />
          </v-col>
        </v-row>
      </div>
    </v-container>

    <ProjectDialog :project="selectedProject" @close="closeProject" />
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ProjectCard from './ProjectCard.vue'
import ProjectDialog from './ProjectDialog.vue'
import { projects } from '../data/projects'
import type { PortfolioProject } from '../types/portfolio'

const companyPeriods = new Map([
  ['일주GNS', '2022.07 - 2024.11'],
  ['벰로보틱스', '2025.03 - 재직중'],
  ['Side Project', '개인 프로젝트'],
])

const selectedProject = ref<PortfolioProject | null>(null)

const projectGroups = computed(() =>
  Array.from(companyPeriods.entries())
    .map(([company, period]) => ({
      company,
      period,
      projects: projects.filter((project) => project.company === company),
    }))
    .filter((group) => group.projects.length > 0),
)

/**
 * 선택한 프로젝트 정보를 상세 팝업에 표시한다.
 */
const openProject = (project: PortfolioProject) => {
  selectedProject.value = project
}

/**
 * 프로젝트 상세 팝업을 닫고 선택 상태를 초기화한다.
 */
const closeProject = () => {
  selectedProject.value = null
}
</script>
