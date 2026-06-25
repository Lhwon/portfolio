<template>
  <v-dialog
    :fullscreen="smAndDown"
    :model-value="Boolean(project)"
    max-width="960"
    scrollable
    @update:model-value="handleDialogUpdate"
  >
    <v-card v-if="project" color="surface">
      <v-toolbar color="surface" density="comfortable">
        <v-toolbar-title class="text-wrap">{{ project.name }}</v-toolbar-title>
        <v-btn icon="mdi-close" variant="text" @click="emitClose" />
      </v-toolbar>

      <v-card-text class="pa-6">
        <div class="project-detail-image mb-6">
          <v-carousel
            v-if="projectImages.length > 0"
            class="project-image-carousel"
            height="360"
            hide-delimiter-background
            show-arrows="hover"
          >
            <v-carousel-item v-for="(imageUrl, index) in projectImages" :key="imageUrl">
              <v-img
                :alt="`${project.imageAlt ?? project.name} ${index + 1}`"
                contain
                height="360"
                :src="imageUrl"
              />
            </v-carousel-item>
          </v-carousel>
          <div v-else class="project-image-placeholder project-image-placeholder--large d-flex flex-column align-center justify-center ga-2">
            <v-icon color="primary" icon="mdi-image-plus-outline" size="42" />
            <span class="text-body-2 text-medium-emphasis">상세 이미지 영역</span>
          </div>
        </div>

        <div class="d-flex flex-wrap ga-2 mb-6">
          <v-chip color="info" variant="tonal">{{ project.company }}</v-chip>
          <v-chip color="primary" variant="tonal">{{ project.period }}</v-chip>
          <v-chip color="secondary" variant="tonal">{{ project.role }}</v-chip>
          <v-chip color="accent" variant="tonal">기여도 {{ project.contribution }}</v-chip>
        </div>

        <v-row>
          <v-col cols="12" md="6">
            <DetailBlock title="프로젝트 개요" :items="[project.overview]" />
            <DetailBlock title="담당 역할" :items="project.responsibilities" />
            <DetailBlock title="기술적 문제와 해결" :items="project.problemSolving" />
          </v-col>
          <v-col cols="12" md="6">
            <DetailBlock title="주요 구현 기능" :items="project.implementations" />
            <DetailBlock title="성과" :items="project.results" />
            <div class="mb-6">
              <h4 class="text-subtitle-1 font-weight-bold mb-3">기술 스택</h4>
              <div class="d-flex flex-wrap ga-2">
                <v-chip v-for="technology in project.technologies" :key="technology" color="primary" variant="tonal">
                  {{ technology }}
                </v-chip>
              </div>
            </div>
            <div>
              <h4 class="text-subtitle-1 font-weight-bold mb-3">관련 키워드</h4>
              <div class="d-flex flex-wrap ga-2">
                <v-chip v-for="keyword in project.keywords" :key="keyword" variant="outlined">
                  {{ keyword }}
                </v-chip>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="justify-end pa-6 pt-0">
        <v-btn color="primary" variant="flat" @click="emitClose">닫기</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed, defineComponent, h } from 'vue'
import { useDisplay } from 'vuetify'
import type { PropType } from 'vue'
import type { PortfolioProject } from '../types/portfolio'

const props = defineProps<{
  project: PortfolioProject | null
}>()

const emit = defineEmits<{
  close: []
}>()

const { smAndDown } = useDisplay()

const projectImages = computed(() => {
  if (!props.project) {
    return []
  }

  return props.project.imageUrls ?? (props.project.detailImageUrl ? [props.project.detailImageUrl] : [])
})

const DetailBlock = defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  setup(props) {
    return () =>
      h('div', { class: 'mb-6' }, [
        h('h4', { class: 'text-subtitle-1 font-weight-bold mb-3' }, props.title),
        h(
          'ul',
          { class: 'detail-list' },
          props.items.map((item) => h('li', { class: 'text-body-2 text-medium-emphasis mb-2' }, item)),
        ),
      ])
  },
})

/**
 * 다이얼로그 바깥 영역 클릭 또는 ESC 입력 시 닫기 이벤트를 전달한다.
 */
const handleDialogUpdate = (isOpen: boolean) => {
  if (!isOpen) {
    emitClose()
  }
}

/**
 * 프로젝트 상세 팝업을 닫는다.
 */
const emitClose = () => {
  emit('close')
}
</script>
