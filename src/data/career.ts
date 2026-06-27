import type { CareerItem, CareerStory } from '@/types/portfolio'

export const careerStory: CareerStory = {
  title: 'Developer Story',
  paragraphs: [
    '빅데이터 플랫폼을 시작으로 MES, EMS, HSE, 자산관리 시스템까지 산업 현장의 업무 데이터를 웹으로 연결하는 경험을 쌓았습니다.',
    '제조, 에너지, 안전관리 영역에서 운영자가 데이터를 빠르게 확인하고 판단할 수 있도록 대시보드, 업무 화면, 자동화 기능, 데이터 마이그레이션을 개발했습니다.',
    '현재는 Web 기반 ACS 시스템과 Android 바코드 리더기 앱을 통해 장비, 단말, 실시간 데이터를 연결하는 개발을 이어가고 있습니다. AGV/AMR 관제와 실시간 모니터링 화면의 안정성과 사용성을 높이는 데 집중하고 있습니다.',
  ],
}

export const careerItems: CareerItem[] = [
  {
    period: '2022.07 - 2024.11',
    company: '일주GNS',
    role: 'Full-Stack Web Developer / System Operator',
    summary:
      '빅데이터 플랫폼, MES, EMS, HSE, 자산관리 시스템을 중심으로 산업 현장 웹 시스템을 개발했습니다.',
    highlights: [
      '빅데이터 플랫폼을 시작으로 산업 현장 웹 시스템 개발 경험 축적',
      'MES, EMS, HSE 기반 업무 시스템 개발',
      '현대중공업 협력 프로젝트에서 EMS와 HSE 시스템 개발',
      '대시보드 성능 개선과 대규모 데이터 마이그레이션 수행',
      '자사 자산관리 시스템 개발',
    ],
  },
  {
    period: '2025.03 - 재직중',
    company: '벰로보틱스',
    role: 'Full-Stack Web Developer',
    summary:
      'Web 기반 ACS 시스템 개발, Android 바코드 리더기 앱 개발, ACS 고도화 업무를 수행하고 있습니다.',
    highlights: [
      '2025.03 Web 기반 ACS 시스템 개발 시작',
      '2026.01 Java 기반 Android 바코드 리더기 앱 개발',
      '2026.04 Web ACS 시스템 고도화 진행 중',
      'WebSocket 기반 상태 동기화',
      'requestAnimationFrame 기반 렌더링 최적화',
      '운영자가 빠르게 판단할 수 있는 관제 UI 개선',
    ],
  },
]
