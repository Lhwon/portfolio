<template>
  <v-app>
    <AppHeader />
    <v-main>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <CareerSection />
      <ProjectSection />
      <ResumeSection />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import AboutSection from './components/AboutSection.vue'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import CareerSection from './components/CareerSection.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import ResumeSection from './components/ResumeSection.vue'
import SkillSection from './components/SkillSection.vue'
</script>
