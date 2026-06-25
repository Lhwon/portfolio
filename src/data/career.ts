import type { CareerItem, CareerStory } from '../types/portfolio'

export const careerStory: CareerStory = {
  title: 'Developer Story',
  paragraphs: [
    '2022년 7월 인턴으로 개발을 시작했고, 2022년 10월 정규직으로 전환되며 빅데이터 플랫폼 개발부터 실무 경험을 쌓았습니다.',
    '이후 MES, EMS, HSE, 자사 자산관리 시스템을 거치며 산업 현장의 데이터를 화면으로 옮기고 운영 업무를 시스템화하는 흐름을 경험했습니다. 특히 2023년 5월부터 2024년 8월까지는 현대중공업 협력 프로젝트에서 EMS와 HSE 시스템을 개발하며 현장 요구사항과 운영 안정성을 함께 다루었습니다.',
    '2025년 3월 벰로보틱스로 이직한 뒤에는 Web 기반 ACS 시스템을 개발했고, 2026년 1월에는 Java 기반 Android 바코드 리더기 앱을 개발했습니다. 2026년 4월부터는 Web ACS 시스템 고도화를 진행하며 AGV/AMR 관제와 실시간 모니터링 경험을 확장하고 있습니다.',
  ],
}

export const careerItems: CareerItem[] = [
  {
    period: '2022.07 - 2024.11',
    company: '일주GNS',
    role: 'Full-Stack Web Developer / System Operator',
    summary:
      '인턴으로 입사해 정규직 전환 후 빅데이터 플랫폼, MES, EMS, HSE, 자산관리 시스템을 개발했습니다.',
    highlights: [
      '2022.07 인턴 입사, 2022.10 정규직 전환',
      '빅데이터 플랫폼을 시작으로 산업 현장 웹 시스템 개발 경험 축적',
      'MES, EMS, HSE 기반 업무 시스템 개발',
      '현대중공업 협력 프로젝트에서 EMS와 HSE 시스템 개발',
      '자사 자산관리 시스템 개발 후 퇴사',
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
