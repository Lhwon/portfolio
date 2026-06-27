<template>
  <section id="resume" class="section-block">
    <v-container>
      <v-card color="surface" variant="flat">
        <v-card-text class="pa-6 pa-md-8">
          <v-row align="center">
            <v-col cols="12" md="5">
              <p class="section-eyebrow">Documents</p>
              <h2 class="text-h4 font-weight-bold mb-3">이력서 및 경력기술서</h2>
              <p class="text-medium-emphasis">
                정적 호스팅에서도 접근 가능한 public 경로를 기준으로 문서 링크를 관리합니다.
              </p>
            </v-col>
            <v-col cols="12" md="7">
              <v-row>
                <v-col v-for="document in documents" :key="document.title" cols="12" sm="6">
                  <v-card color="background" variant="flat">
                    <v-card-title class="text-wrap">{{ document.title }}</v-card-title>
                    <v-card-text class="d-flex flex-wrap ga-2">
                      <v-btn
                        :href="document.href"
                        prepend-icon="mdi-open-in-new"
                        target="_blank"
                        rel="noopener"
                        variant="tonal"
                      >
                        새 창 열기
                      </v-btn>
                      <v-btn :download="document.fileName" :href="document.href" prepend-icon="mdi-download" variant="text">
                        다운로드
                      </v-btn>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { profile } from '@/data/profile'

const documents = [
  {
    title: '이력서 PDF',
    href: profile.resumeUrl,
    fileName: 'resume.pdf',
  },
  {
    title: '경력기술서 PDF',
    href: profile.careerDescriptionUrl,
    fileName: 'career-description.pdf',
  },
]
</script>
