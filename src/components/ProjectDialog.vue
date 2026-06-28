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
        <div class="project-detail-image mb-8">
          <v-carousel
            v-if="projectImages.length > 0"
            class="project-image-carousel"
            height="360"
            hide-delimiter-background
            show-arrows="hover"
          >
            <v-carousel-item
              v-for="(imageUrl, index) in projectImages"
              :key="imageUrl"
            >
              <v-img
                :alt="`${project.imageAlt ?? project.name} ${index + 1}`"
                class="project-dialog-image"
                contain
                height="360"
                :src="imageUrl"
                @dblclick="openFullscreenImage(imageUrl)"
              />
            </v-carousel-item>
          </v-carousel>

          <div
            v-else
            class="project-image-placeholder project-image-placeholder--large d-flex flex-column align-center justify-center ga-2"
          >
            <v-icon color="primary" icon="mdi-image-plus-outline" size="42" />
            <span class="text-body-2 text-medium-emphasis">상세 이미지 영역</span>
          </div>
        </div>

        <section class="project-dialog-heading mb-8">
          <h2 class="text-h4 text-md-h3 font-weight-bold mb-5">
            {{ project.name }}
          </h2>

          <div class="project-property-list">
            <div class="project-property-row">
              <v-icon
                class="project-property-icon"
                icon="mdi-calendar-range"
                size="20"
              />
              <span class="project-property-label">기간</span>
              <span class="text-body-2">{{ project.period }}</span>
            </div>

            <div class="project-property-row">
              <v-icon
                class="project-property-icon"
                icon="mdi-office-building-outline"
                size="20"
              />
              <span class="project-property-label">회사</span>
              <span class="text-body-2">{{ project.company }}</span>
            </div>

            <div class="project-property-row">
              <v-icon
                class="project-property-icon"
                icon="mdi-code-tags"
                size="20"
              />
              <span class="project-property-label">사용 기술</span>
              <div class="d-flex flex-wrap ga-2">
                <v-chip
                  v-for="technology in primaryTechnologies"
                  :key="technology"
                  class="technology-chip"
                  :prepend-icon="getTechnologyChipIcon(technology)"
                  size="small"
                  :style="getTechnologyChipStyle(technology)"
                  variant="flat"
                >
                  {{ technology }}
                </v-chip>
              </div>
            </div>

            <div
              v-if="libraryTechnologies.length > 0"
              class="project-property-row"
            >
              <v-icon
                class="project-property-icon"
                icon="mdi-package-variant-closed"
                size="20"
              />
              <span class="project-property-label">라이브러리</span>
              <div class="d-flex flex-wrap ga-2">
                <v-chip
                  v-for="technology in libraryTechnologies"
                  :key="technology"
                  class="technology-chip"
                  :prepend-icon="getTechnologyChipIcon(technology)"
                  size="small"
                  :style="getTechnologyChipStyle(technology)"
                  variant="flat"
                >
                  {{ technology }}
                </v-chip>
              </div>
            </div>

            <div class="project-property-row">
              <v-icon
                class="project-property-icon"
                icon="mdi-percent-outline"
                size="20"
              />
              <span class="project-property-label">기여도</span>
              <span class="text-body-2">{{ project.contribution }}</span>
            </div>

            <div class="project-property-row project-property-row--description">
              <v-icon
                class="project-property-icon"
                icon="mdi-text-box-outline"
                size="20"
              />
              <span class="project-property-label">설명</span>
              <p class="project-property-description text-body-2 text-medium-emphasis mb-0">
                {{ project.summary }}
              </p>
            </div>
          </div>
        </section>

        <v-row>
          <v-col cols="12" md="6">
            <DetailBlock title="프로젝트 개요" :items="[project.overview]" />
            <DetailBlock title="기술적 문제와 해결" :items="project.problemSolving" />
          </v-col>

          <v-col cols="12" md="6">
            <DetailBlock title="주요 구현 기능" :items="project.implementations" />
            <DetailBlock title="성과" :items="project.results" />

            <div>
              <h4 class="text-subtitle-1 font-weight-bold mb-3">관련 키워드</h4>
              <div class="d-flex flex-wrap ga-2">
                <v-chip
                  v-for="keyword in project.keywords"
                  :key="keyword"
                  color="primary"
                  variant="tonal"
                >
                  {{ keyword }}
                </v-chip>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="justify-end pa-6 pt-0">
        <v-btn color="primary" variant="flat" @click="emitClose">
          닫기
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog
    class="project-fullscreen-dialog"
    fullscreen
    :model-value="Boolean(fullscreenImageUrl)"
    @update:model-value="handleFullscreenUpdate"
  >
    <div
      class="project-fullscreen-viewer d-flex align-center justify-center"
      @click="closeFullscreenImage"
    >
      <v-btn
        aria-label="전체 화면 이미지 닫기"
        class="project-fullscreen-close"
        color="surface"
        icon="mdi-close"
        variant="flat"
        @click.stop="closeFullscreenImage"
      />

      <v-img
        v-if="fullscreenImageUrl"
        :alt="project?.imageAlt ?? '프로젝트 전체 화면 이미지'"
        class="project-fullscreen-image"
        contain
        :src="fullscreenImageUrl"
        @click.stop
      />
    </div>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed, defineComponent, h, ref } from 'vue'
import { useDisplay } from 'vuetify'
import type { PropType } from 'vue'
import type { PortfolioProject } from '@/types/portfolio'
import {
  getTechnologyChipIcon,
  getTechnologyChipStyle,
} from '@/utils/technologyChips'

const props = defineProps<{
  project: PortfolioProject | null
}>()

const emit = defineEmits<{
  close: []
}>()

const { smAndDown } = useDisplay()
const fullscreenImageUrl = ref<string | null>(null)

const projectImages = computed(() => {
  if (!props.project) {
    return []
  }

  return props.project.imageUrls
    ?? (props.project.detailImageUrl ? [props.project.detailImageUrl] : [])
})

const primaryTechnologies = computed(() => {
  if (!props.project) {
    return []
  }

  return props.project.technologies
})

const libraryTechnologies = computed(() => {
  if (!props.project) {
    return []
  }

  return props.project.libraries ?? []
})

/**
 * 선택한 프로젝트 이미지를 전체 화면 뷰어로 연다
 */
const openFullscreenImage = (imageUrl: string) => {
  fullscreenImageUrl.value = imageUrl
}

/**
 * 전체 화면 이미지 뷰어를 닫는다
 */
const closeFullscreenImage = () => {
  fullscreenImageUrl.value = null
}

/**
 * ESC 입력이나 바깥 클릭으로 전체 화면 이미지 뷰어를 닫는다
 */
const handleFullscreenUpdate = (isOpen: boolean) => {
  if (!isOpen) {
    closeFullscreenImage()
  }
}

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
          props.items.map((item) =>
            h(
              'li',
              { class: 'text-body-2 text-medium-emphasis mb-2' },
              item,
            ),
          ),
        ),
      ])
  },
})

/**
 * 다이얼로그 바깥 영역 클릭 또는 ESC 입력 시 닫기 이벤트를 전달한다
 */
const handleDialogUpdate = (isOpen: boolean) => {
  if (!isOpen) {
    emitClose()
  }
}

/**
 * 프로젝트 상세 팝업을 닫는다
 */
const emitClose = () => {
  emit('close')
}
</script>

<style scoped>
.project-dialog-image {
  border-radius: 18px;
}

.project-image-carousel {
  border-radius: 18px;
  overflow: hidden;
}

.project-image-placeholder {
  min-height: 220px;
  border: 1px dashed rgba(var(--v-theme-on-surface), 0.24);
  border-radius: 18px;
  background: rgba(var(--v-theme-on-surface), 0.03);
}

.project-image-placeholder--large {
  min-height: 360px;
}

.project-property-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.project-property-row {
  display: grid;
  grid-template-columns: 20px 72px minmax(0, 1fr);
  column-gap: 10px;
  align-items: center;
}

.project-property-row--description {
  align-items: start;
}

.project-property-icon {
  color: rgb(var(--v-theme-primary));
}

.project-property-label {
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 20px;
  color: rgba(var(--v-theme-on-surface), 0.78);
}

.project-property-description {
  align-self: start;
  margin: 0;
  padding: 0;
  line-height: 20px;
}

.detail-list {
  padding-left: 18px;
}

.technology-chip {
  font-weight: 700;
}

.project-fullscreen-dialog {
  z-index: 2600;
}

.project-fullscreen-viewer {
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 24px;
  background: rgba(0, 0, 0, 0.92);
}

.project-fullscreen-close {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
}

.project-fullscreen-image {
  max-width: 100%;
  max-height: 100%;
}

@media (max-width: 600px) {
  .project-property-row {
    grid-template-columns: 20px 64px minmax(0, 1fr);
  }

  .project-fullscreen-viewer {
    padding: 12px;
  }
}
</style>