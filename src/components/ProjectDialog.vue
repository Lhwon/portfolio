<template>
  <v-dialog
    :fullscreen="smAndDown"
    :model-value="Boolean(project)"
    max-width="960"
    scrollable
    @update:model-value="handleDialogUpdate"
  >
    <v-card v-if="project" color="surface">
      <v-toolbar class="project-dialog-toolbar" color="surface" density="comfortable">
        <v-spacer />
        <v-btn icon="mdi-close" variant="text" @click="emitClose" />
      </v-toolbar>

      <v-card-text class="project-dialog-body">
        <div class="project-detail-image mb-4">
          <v-carousel
            v-if="projectMedia.length > 0"
            class="project-image-carousel"
            height="360"
            hide-delimiter-background
            show-arrows="hover"
          >
            <v-carousel-item
              v-for="(media, index) in projectMedia"
              :key="`${media.type}-${media.url}`"
            >
              <div class="project-dialog-image-frame">
                <v-img
                  v-if="media.type === 'image'"
                  :alt="`${project.imageAlt ?? project.name} ${index + 1}`"
                  class="project-dialog-image"
                  contain
                  height="360"
                  :src="media.url"
                  @dblclick="openFullscreenImage(media.url)"
                />

                <video
                  v-else
                  class="project-dialog-video"
                  controls
                  playsinline
                  preload="metadata"
                  :src="media.url"
                />

                <div
                  v-if="media.caption"
                  class="project-image-caption"
                >
                  {{ media.caption }}
                </div>
              </div>
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

        <section class="project-dialog-heading mb-4">
          <h2 class="text-h4 text-md-h3 font-weight-bold mb-2">
            {{ project.name }}
          </h2>
          <p class="project-dialog-summary text-body-1 text-medium-emphasis mb-0">
            {{ project.summary }}
          </p>
        </section>

        <section class="project-meta-panel mb-5">
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
                  class="technology-chip project-meta-chip"
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
                  class="technology-chip project-meta-chip"
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
          </div>
        </section>

        <div class="project-detail-stack">
          <DetailBlock title="프로젝트 개요" :items="[project.overview]" />
          <ProjectArchitecture
            v-if="project.architecture"
            :architecture="project.architecture"
          />
          <DetailBlock title="주요 구현 기능" :items="project.implementations" />
          <DetailBlock title="기술적 문제와 해결" :items="project.problemSolving" />
          <DetailBlock title="성과" :items="project.results" />
        </div>
      </v-card-text>

      <v-card-actions class="justify-end px-7 pb-5 pt-0">
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
import ProjectArchitecture from '@/components/ProjectArchitecture.vue'
import type { PortfolioProject } from '@/types/portfolio'
import {
  getTechnologyChipIcon,
  getTechnologyChipStyle,
} from '@/utils/technologyChips'

interface ProjectMedia {
  type: 'image' | 'video'
  url: string
  caption: string
}

const props = defineProps<{
  project: PortfolioProject | null
}>()

const emit = defineEmits<{
  close: []
}>()

const { smAndDown } = useDisplay()
const fullscreenImageUrl = ref<string | null>(null)

const projectMedia = computed<ProjectMedia[]>(() => {
  if (!props.project) {
    return []
  }

  const imageUrls = props.project.imageUrls
    ?? (props.project.detailImageUrl ? [props.project.detailImageUrl] : [])

  const imageMedia = imageUrls.map((url, index) => ({
    type: 'image' as const,
    url,
    caption: getMediaCaption(index),
  }))

  if (!props.project.videoUrl) {
    return imageMedia
  }

  return [
    ...imageMedia,
    {
      type: 'video',
      url: props.project.videoUrl,
      caption: props.project.videoCaption ?? '',
    },
  ]
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
 * 이미지 순서에 맞는 설명을 반환한다
 */
const getMediaCaption = (index: number) => {
  if (!props.project) {
    return ''
  }

  return props.project.imageCaptions?.[index] ?? props.project.imageCaption ?? ''
}

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
      h('section', { class: 'project-detail-section' }, [
        h('h4', { class: 'text-subtitle-1 font-weight-bold mb-1' }, props.title),
        h(
          'ul',
          { class: 'detail-list' },
          props.items.map((item) =>
            h(
              'li',
              { class: 'text-body-2 text-medium-emphasis' },
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
