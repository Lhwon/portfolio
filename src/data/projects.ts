import type { PortfolioProject } from '../types/portfolio'
import acsMonitoringImage from '@/assets/images/acsmonitoring.png'
import bigDataPlatformImage from '@/assets/images/big_data_flatform.png'
import emsImage from '@/assets/images/ems.png'
import hseImage from '@/assets/images/hse.png'
import mesImage from '@/assets/images/mes.png'


const publicBaseUrl = import.meta.env.BASE_URL

const bcrHandheldImageModules = import.meta.glob<string>(
  '/src/assets/images/bcrhandheld/*.png',
  {
    eager: true,
    import: 'default',
  },
)

const bcrHandheldImageMap = Object.fromEntries(
  Object.entries(bcrHandheldImageModules).map(([path, url]) => {
    const fileName = path.split('/').pop() ?? ''

    return [fileName, url]
  }),
)

const bcrHandheldImages = [
  bcrHandheldImageMap['splash.png'],
  bcrHandheldImageMap['login.png'],
  bcrHandheldImageMap['menu.png'],
  bcrHandheldImageMap['barcodeScanning.png'],
  bcrHandheldImageMap['barcodeList.png'],
  bcrHandheldImageMap['scanlog.png'],
  bcrHandheldImageMap['scanlog_search.png'],
  bcrHandheldImageMap['userInfo.png'],
].filter(Boolean)

const nexusImageModules = import.meta.glob<string>(
  '/src/assets/images/nexus/*.png',
  {
    eager: true,
    import: 'default',
  },
)

const nexusImageMap = Object.fromEntries(
  Object.entries(nexusImageModules).map(([path, url]) => {
    const fileName = path.split('/').pop() ?? ''

    return [fileName, url]
  }),
)

const nexusImages = [
  nexusImageMap['dashboard.png'],
  nexusImageMap['agvDashboard.png'],
  nexusImageMap['hisiotryDashboard.png'],
].filter((url): url is string => Boolean(url))

export const projects: PortfolioProject[] = [
  {
    id: 'big-data-platform',
    name: '빅데이터 플랫폼',
    company: '일주GNS',
    thumbnailUrl: bigDataPlatformImage,
    detailImageUrl: bigDataPlatformImage,
    imageAlt: 'Big Data Platform 화면',
    period: '2022.07 ~ 2022.12',
    role: '플랫폼 기능 개발 및 운영 지원',
    contribution: '20%',
    summary: '초기 실무에서 참여한 데이터 기반 플랫폼 프로젝트로, 대용량 데이터 조회와 운영 화면 개발을 경험한 프로젝트',
    keywords: ['Big Data', 'Dashboard', 'Data Processing', 'Platform'],
    achievements: ['실무 개발 프로세스 적응', '데이터 기반 화면 개발 경험 축적', '운영 데이터 흐름 이해도 향상'],
    overview:
      '대용량 데이터를 수집, 조회, 관리하는 플랫폼의 화면과 운영 기능을 개발하며 산업 현장 데이터 흐름을 익힌 초기 프로젝트입니다.',
    responsibilities: ['플랫폼 화면 개발 지원', '데이터 조회 기능 구현', '운영 이슈 대응 지원'],
    implementations: [
      '대용량 데이터 조회 화면 구성',
      '운영자가 확인해야 하는 데이터 항목 정리',
      '플랫폼 관리 화면 기능 개선',
    ],
    problemSolving: [
      '데이터 규모가 큰 화면에서 필요한 항목을 우선적으로 볼 수 있도록 정보 구조를 정리했습니다.',
      '운영 중 발견되는 화면 오류와 데이터 표시 이슈를 빠르게 수정하며 실무 개발 흐름에 적응했습니다.',
    ],
    results: ['실무 개발 프로세스 적응', '데이터 기반 화면 개발 경험 축적', '운영 데이터 흐름 이해도 향상'],
    technologies: ['JavaScript', 'SQL', 'Dashboard', 'Big Data'],
  },
  {
    id: 'smart-web-mes',
    name: 'Smart Web MES',
    company: '일주GNS',
    thumbnailUrl: mesImage,
    detailImageUrl: mesImage,
    imageAlt: 'Smart Web MES 화면',
    period: '2023.01 ~ 2023.05',
    role: '프론트엔드 및 백엔드 개발',
    contribution: '20%',
    summary: '제조 현장의 자재, 재고, 생산 공정 데이터를 웹 기반으로 관리하고 시각화하는 MES 프로젝트',
    keywords: ['MES', 'Inventory', 'Production', 'Role Based UI'],
    achievements: ['공정 데이터 가시성 향상', '관리 오류 감소', '운영 업무 흐름 개선'],
    overview:
      '자재, 재고, 생산 공정 정보를 웹에서 관리하고 현장 운영자가 상태를 빠르게 파악할 수 있도록 구성한 제조 실행 시스템입니다.',
    responsibilities: ['프론트엔드 화면 개발', '백엔드 기능 개발', 'Role 기반 메뉴 제어 구조 설계'],
    implementations: [
      '자재 및 재고 입고, 이동, 출고 상태 모니터링 기능 구현',
      '생산 공정 데이터 CRUD 및 진행 상태 시각화 구현',
      '동적 UI 렌더링 구조 설계',
      '하드코딩 제거 및 유지보수성 개선',
    ],
    problemSolving: [
      '권한별 메뉴 노출 규칙을 정리해 화면별 조건 분기를 단순화했습니다.',
      '반복되는 상태 표시 로직을 공통 구조로 묶어 운영 변경 대응 속도를 높였습니다.',
    ],
    results: ['공정 데이터 가시성 향상', '관리 오류 감소', '운영 업무 흐름 개선'],
    technologies: ['Vue', 'JavaScript', 'SQL', 'Backend API', 'MES'],
  },
  {
    id: 'hi-energy-monitoring',
    name: 'Hi-Energy 식용수 모니터링 시스템',
    company: '일주GNS',
    thumbnailUrl: emsImage,
    detailImageUrl: emsImage,
    imageAlt: 'Hi-Energy Monitoring System 화면',
    period: '2023.05 ~ 2023.09',
    role: '프론트엔드 및 백엔드 개발',
    contribution: '30%',
    summary: '현대중공업 협력 프로젝트로 에너지 사용량과 운영 데이터를 실시간으로 확인하고 자동화 업무를 지원하는 모니터링 시스템',
    keywords: ['EMS', 'Monitoring', 'Automation', 'Reusable Components'],
    achievements: ['개발 생산성 향상', '운영 자동화 수준 개선', '모니터링 정확도 향상'],
    overview:
      '현대중공업 협력 프로젝트에서 에너지 사용량과 운영 데이터를 시각화하고, 사용량 집계 및 문서 발송 흐름을 자동화한 웹 모니터링 시스템입니다.',
    responsibilities: ['공통 컴포넌트 설계', '집계 기능 개발', '자동화 기능 구현', '실시간 화면 개발'],
    implementations: [
      '공통 유틸 함수 및 재사용 가능한 컴포넌트 구조 설계',
      '사용량 집계 및 고지서 발송 자동화 기능 구현',
      '실시간 데이터 시각화 기능 구현',
      '모듈 간 공통 로직 정리 및 코드 중복 제거',
    ],
    problemSolving: [
      '반복 구현되던 집계 로직을 공통 유틸로 분리해 변경 범위를 줄였습니다.',
      '화면별 데이터 표시 규칙을 정리해 모니터링 결과의 일관성을 높였습니다.',
    ],
    results: ['개발 생산성 향상', '운영 자동화 수준 개선', '모니터링 정확도 향상'],
    technologies: ['Vue', 'JavaScript', 'SQL', 'Scheduler', 'Monitoring'],
  },
  {
    id: 'hse-safety-management',
    name: 'HSE 안전 관리 시스템',
    company: '일주GNS',
    thumbnailUrl: hseImage,
    detailImageUrl: hseImage,
    imageAlt: 'HSE Integrated Safety Management 화면',
    period: '2023.10 ~ 2024.08',
    role: '프론트엔드 및 백엔드 개발',
    contribution: '20%',
    summary: '현대중공업 협력 프로젝트로 현장 안전 관리와 위험성 평가 업무를 시스템화한 통합 안전관리 프로젝트',
    keywords: ['HSE', 'Risk Assessment', 'Dashboard', 'Data Migration'],
    achievements: [
      '대시보드 조회 속도 약 20초에서 5초 이내로 개선',
      '5천만 건 이상 데이터 마이그레이션 안정화',
      '수기 기반 안전 관리 업무 시스템화',
    ],
    overview:
      '현대중공업 협력 프로젝트에서 위험성 평가, 개선 조치, 결재 흐름, 대시보드를 통해 안전관리 업무를 표준화한 통합 시스템입니다.',
    responsibilities: ['위험성 평가 기능 개발', '결재 및 개선 프로세스 구현', '성능 개선', '데이터 마이그레이션'],
    implementations: [
      '위험성 평가 기능 개발',
      '결재 흐름 및 개선 프로세스 구현',
      '대시보드 조회 성능 개선',
      '대규모 레거시 데이터 마이그레이션 수행',
      '스케줄링 기반 자동 알림 기능 구현',
    ],
    problemSolving: [
      '대시보드 조회 쿼리와 데이터 집계 흐름을 조정해 응답 시간을 줄였습니다.',
      '마이그레이션 검증 절차를 나눠 대량 데이터 이관 중 누락과 중복을 줄였습니다.',
    ],
    results: [
      '대시보드 조회 속도 약 20초에서 5초 이내로 개선',
      '5천만 건 이상 데이터 마이그레이션 안정화',
      '데이터 일관성 및 운영 효율 개선',
    ],
    technologies: ['Vue', 'SQL', 'Batch', 'Dashboard', 'HSE'],
  },
  {
    id: 'asset-management-system',
    name: 'i-tams 자산 관리 시스템',
    company: '일주GNS',
    period: '2024.08 ~ 2024.11',
    role: '프론트엔드 및 백엔드 개발',
    contribution: '40%',
    summary: '자사 내부 자산 정보를 등록, 조회, 관리할 수 있도록 개발한 자산관리 시스템',
    keywords: ['Asset Management', 'CRUD', 'Admin', 'Internal System'],
    achievements: ['자산 관리 업무 흐름 표준화', '자산 조회 및 관리 편의성 향상', '내부 운영 데이터 관리 기반 마련'],
    overview:
      '자사 자산 정보를 체계적으로 등록하고 조회할 수 있도록 구성한 내부 운영 시스템입니다.',
    responsibilities: ['자산관리 화면 개발', 'CRUD 기능 구현', '관리자 화면 구성', '운영 데이터 구조 정리'],
    implementations: [
      '자산 등록, 수정, 조회, 삭제 기능 구현',
      '자산 분류와 상태 기준에 따른 목록 화면 구성',
      '관리자가 빠르게 현황을 확인할 수 있는 UI 구성',
    ],
    problemSolving: [
      '수기로 관리되던 자산 정보를 시스템 데이터로 전환해 조회와 변경 이력을 관리하기 쉽게 만들었습니다.',
      '자산 상태와 분류 기준을 정리해 운영자가 필요한 정보를 빠르게 찾을 수 있도록 구성했습니다.',
    ],
    results: ['자산 관리 업무 흐름 표준화', '자산 조회 및 관리 편의성 향상', '내부 운영 데이터 관리 기반 마련'],
    technologies: ['Vue', 'JavaScript', 'SQL', 'Admin UI'],
  },
  {
    id: 'acs-web-ui',
    name: 'ACS Web UI',
    company: '벰로보틱스',
    thumbnailUrl: acsMonitoringImage,
    detailImageUrl: acsMonitoringImage,
    imageAlt: 'ACS Web UI 관제 화면',
    period: '2025.03 ~ 현재',
    role: '프론트엔드 및 백엔드 개발',
    contribution: '40%',
    summary:
      '2025년 3월 Web 기반 ACS 시스템 개발을 시작했고, 2026년 4월부터 AGV/AMR 관제 시스템을 고도화 중인 프로젝트',
    keywords: ['ACS', 'AGV/AMR', 'WebSocket', '2D/3D Map', 'Realtime Control', 'Enhancement'],
    achievements: [
      '대용량 맵 환경에서도 부드러운 렌더링 유지',
      '실시간 관제 정확도 향상',
      '네트워크 지연 환경에서도 끊김 없는 주행 표현 구현',
    ],
    overview:
      'AGV/AMR 위치, 배터리, 에러 상태를 실시간으로 동기화하고 공장 레이아웃 위에서 관제하는 Web 기반 ACS 시스템입니다. 2026년 4월부터 운영성과 사용성을 높이기 위한 고도화를 진행하고 있습니다.',
    responsibilities: ['관제 UI 개발', '실시간 상태 동기화', '렌더링 최적화', '주행 애니메이션 구현', '운영 기능 고도화'],
    implementations: [
      '공장 레이아웃 2D/3D 시각화',
      'AGV/AMR 위치, 배터리, 에러 상태 실시간 동기화',
      'WebSocket 기반 실시간 관제 및 제어 인터페이스 구현',
      'Map 자료구조 기반 데이터 관리 구조 개선',
      'requestAnimationFrame 기반 렌더링 최적화',
      'Lerp/Slerp 보간 알고리즘 기반 주행 애니메이션 구현',
      '운영 편의성을 높이기 위한 화면 및 제어 기능 개선',
      '2026년 4월 이후 현장 피드백 기반 고도화 기능 반영',
    ],
    problemSolving: [
      '상태 데이터를 Map 구조로 관리해 갱신 비용과 탐색 비용을 줄였습니다.',
      '프레임 단위 렌더링과 보간을 적용해 지연 환경에서도 움직임이 자연스럽게 보이도록 개선했습니다.',
    ],
    results: [
      '대용량 맵 환경에서도 부드러운 렌더링 유지',
      '실시간 관제 정확도 향상',
      '운영 가시성 및 제어 효율 향상',
    ],
    technologies: ['Vue 3', 'TypeScript', 'WebSocket', 'Canvas', 'Three.js', 'ACS'],
  },
  {
    id: 'android-barcode-reader',
    name: 'BCR Handheld',
    company: '벰로보틱스',
    thumbnailUrl: bcrHandheldImageMap['barcodeScanning.png'],
    detailImageUrl: bcrHandheldImageMap['barcodeScanning.png'],
    imageUrls: bcrHandheldImages,
    imageAlt: 'BCR Handheld Android 앱 화면',
    period: '2026.01 ~ 2026.02',
    role: 'Android 애플리케이션 개발',
    contribution: '100%',
    summary: '산업 현장 단말에서 바코드를 스캔하고 작업 데이터를 빠르게 확인할 수 있도록 개발한 Android 앱',
    keywords: ['Android', 'Java', 'Barcode', 'Mobile App', 'Field Operation'],
    achievements: ['현장 입력 업무 간소화', '바코드 기반 데이터 조회 속도 개선', '모바일 단말 운영 편의성 향상'],
    overview:
      'Android Studio와 Java를 기반으로 바코드 리더기 단말에서 사용할 수 있는 현장 업무용 애플리케이션을 개발했습니다.',
    responsibilities: ['Android 앱 구조 설계', '바코드 스캔 흐름 구현', '조회 화면 개발', '현장 단말 테스트 및 개선'],
    implementations: [
      '바코드 스캔 이벤트 처리 및 결과 데이터 파싱 구현',
      '스캔 결과 기반 작업 정보 조회 화면 구성',
      '현장 사용 흐름에 맞춘 입력 단계 최소화',
      '단말 해상도와 사용 환경을 고려한 UI 구성',
    ],
    problemSolving: [
      '반복 입력이 많은 현장 업무를 바코드 스캔 중심 흐름으로 바꿔 입력 부담을 줄였습니다.',
      '스캔 실패와 잘못된 데이터 입력 상황을 고려해 사용자 피드백을 명확하게 제공했습니다.',
    ],
    results: ['현장 입력 업무 간소화', '바코드 기반 데이터 조회 속도 개선', '모바일 단말 운영 편의성 향상'],
    technologies: ['Android Studio', 'Java', 'Barcode Scanner', 'Mobile UI'],
  },
  {
    id: 'acs-nexus',
    name: 'ACS 통합 관제 시스템',
    company: '벰로보틱스',
    thumbnailUrl: nexusImageMap['dashboard.png'],
    detailImageUrl: nexusImageMap['dashboard.png'],
    imageUrls: nexusImages,
    imageAlt: 'ACS 통합 관제 시스템 화면',
    period: '2025.03 ~ 현재',
    role: '프론트엔드 및 백엔드 개발',
    contribution: '40%',
    summary:
      '2025년 3월 Web 기반 ACS 시스템 개발을 시작했고, 2026년 4월부터 AGV/AMR 관제 시스템을 고도화 중인 프로젝트',
    keywords: ['ACS', 'AGV/AMR', 'WebSocket', '2D/3D Map', 'Realtime Control', 'Enhancement'],
    achievements: [
      '대용량 맵 환경에서도 부드러운 렌더링 유지',
      '실시간 관제 정확도 향상',
      '네트워크 지연 환경에서도 끊김 없는 주행 표현 구현',
    ],
    overview:
      'AGV/AMR 위치, 배터리, 에러 상태를 실시간으로 동기화하고 공장 레이아웃 위에서 관제하는 Web 기반 ACS 시스템입니다. 2026년 4월부터 운영성과 사용성을 높이기 위한 고도화를 진행하고 있습니다.',
    responsibilities: ['관제 UI 개발', '실시간 상태 동기화', '렌더링 최적화', '주행 애니메이션 구현', '운영 기능 고도화'],
    implementations: [
      '공장 레이아웃 2D/3D 시각화',
      'AGV/AMR 위치, 배터리, 에러 상태 실시간 동기화',
      'WebSocket 기반 실시간 관제 및 제어 인터페이스 구현',
      'Map 자료구조 기반 데이터 관리 구조 개선',
      'requestAnimationFrame 기반 렌더링 최적화',
      'Lerp/Slerp 보간 알고리즘 기반 주행 애니메이션 구현',
      '운영 편의성을 높이기 위한 화면 및 제어 기능 개선',
      '2026년 4월 이후 현장 피드백 기반 고도화 기능 반영',
    ],
    problemSolving: [
      '상태 데이터를 Map 구조로 관리해 갱신 비용과 탐색 비용을 줄였습니다.',
      '프레임 단위 렌더링과 보간을 적용해 지연 환경에서도 움직임이 자연스럽게 보이도록 개선했습니다.',
    ],
    results: [
      '대용량 맵 환경에서도 부드러운 렌더링 유지',
      '실시간 관제 정확도 향상',
      '운영 가시성 및 제어 효율 향상',
    ],
    technologies: ['Vue 3', 'TypeScript', 'WebSocket', 'Canvas', 'Three.js', 'ACS'],
  },
  {
    id: 'apt-plan-app',
    name: '입주비용관리',
    company: 'Side Project',
    thumbnailUrl: `${publicBaseUrl}projects/apt-plan-app-overview.svg`,
    detailImageUrl: `${publicBaseUrl}projects/apt-plan-app-overview.svg`,
    imageUrls: [
      `${publicBaseUrl}projects/apt-plan-app-overview.svg`,
      `${publicBaseUrl}projects/apt-plan-app-costs.svg`,
      `${publicBaseUrl}projects/apt-plan-app-interest.svg`,
    ],
    imageAlt: '입주비용관리 Flutter 앱 화면 예시',
    period: '2026.06 ~ 최근',
    role: 'Flutter 앱 설계 및 개발',
    contribution: '100%',
    summary: '입주 비용 항목과 후불 이자 정보를 모바일에서 구조적으로 확인할 수 있도록 개발한 개인용 Flutter 앱',
    keywords: ['Flutter', 'Dart', 'Riverpod', 'GoRouter', 'Cost Ledger', 'Private Data Masking'],
    achievements: [
      '입주 비용 항목을 모바일 화면에서 보기 쉽게 구조화',
      'Excel 기반 정적 데이터를 앱 데이터 구조로 변환',
      '민감 금액 노출 없이 포트폴리오용 화면 예시 구성',
    ],
    overview:
      '입주 비용 관리 대장을 바탕으로 비용 항목과 후불 이자 정보를 모바일에서 확인할 수 있도록 만든 개인용 Flutter 앱입니다. 포트폴리오에는 민감 금액을 제외한 화면 예시만 노출합니다.',
    responsibilities: ['Flutter 앱 구조 설계', '비용 항목 UI 개발', '정적 데이터 모델링', '탭 기반 화면 구성', '포트폴리오용 비식별 이미지 구성'],
    implementations: [
      '입주비용과 후불이자 화면을 하단 네비게이션으로 구성',
      '비용 항목의 상태와 납입 흐름을 카드형 UI로 표시',
      'Excel workbook 구조를 기준으로 mock datasource와 repository 계층 구성',
      'Riverpod 기반 상태 관리와 GoRouter 기반 라우팅 적용',
    ],
    problemSolving: [
      '비용 항목을 모바일에서 빠르게 확인할 수 있도록 화면 구조를 단순화했습니다.',
      'Google Sheets 연동 전에도 개발과 검증이 가능하도록 정적 datasource 기반 구조를 먼저 구성했습니다.',
      '포트폴리오 노출 시 개인 금액이 드러나지 않도록 화면 예시를 비식별 형태로 교체했습니다.',
    ],
    results: [
      '입주 비용 관련 주요 항목을 탭 단위로 분리해 탐색성 개선',
      '향후 Google Sheets 연동이 가능한 데이터 계층 기반 마련',
      '민감 정보 없이 프로젝트 구조와 UI 의도를 설명할 수 있는 포트폴리오 이미지 구성',
    ],
    technologies: ['Flutter', 'Dart', 'Riverpod', 'GoRouter', 'SharedPreferences', 'fl_chart'],
  },
]

