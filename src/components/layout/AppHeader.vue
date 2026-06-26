<template>
  <v-app-bar class="app-header border-b-sm" :color="headerColor" flat>
    <v-container class="d-flex align-center">
      <v-app-bar-title class="font-weight-bold">Lee Heewon</v-app-bar-title>

      <div class="d-none d-md-flex ga-1">
        <v-btn
          v-for="item in navigationItems"
          :key="item.targetId"
          :text="item.label"
          variant="text"
          @click="scrollToSection(item.targetId)"
        />
      </div>

      <v-btn
        :aria-label="themeButtonLabel"
        :icon="themeIcon"
        :title="themeButtonLabel"
        variant="text"
        @click="toggleTheme"
      />
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useTheme } from 'vuetify'

const navigationItems = [
  { label: 'About', targetId: 'about' },
  { label: 'Skills', targetId: 'skills' },
  { label: 'Career', targetId: 'career' },
  { label: 'Projects', targetId: 'projects' },
  { label: 'Resume', targetId: 'resume' },
]

const theme = useTheme()

const isDarkTheme = computed(() => theme.global.name.value === 'portfolioDark')
const headerColor = computed(() => (isDarkTheme.value ? 'rgba(16, 20, 24, 0.92)' : 'rgba(255, 255, 255, 0.9)'))
const themeButtonLabel = computed(() => (isDarkTheme.value ? '라이트 모드로 변경' : '다크 모드로 변경'))
const themeIcon = computed(() => (isDarkTheme.value ? 'mdi-white-balance-sunny' : 'mdi-weather-night'))

onMounted(() => {
  const savedTheme = window.localStorage.getItem('portfolio-theme')

  if (savedTheme === 'portfolioDark' || savedTheme === 'portfolioLight') {
    theme.change(savedTheme)
  }
})

/**
 * 섹션 ID를 기준으로 화면을 부드럽게 이동한다.
 */
const scrollToSection = (targetId: string) => {
  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/**
 * 라이트 모드와 다크 모드를 전환하고 선택 값을 저장한다.
 */
const toggleTheme = () => {
  theme.change(isDarkTheme.value ? 'portfolioLight' : 'portfolioDark')
  window.localStorage.setItem('portfolio-theme', theme.global.name.value)
}
</script>
