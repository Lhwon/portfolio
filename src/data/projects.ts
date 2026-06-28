import type { PortfolioProject } from '@/types/portfolio'
import acsMonitoringImage from '@/assets/images/acsmonitoring.png'
import bigDataPlatformImage from '@/assets/images/big_data_flatform.png'
import emsImage from '@/assets/images/ems.png'
import hseImage from '@/assets/images/hse.png'
import mesImage from '@/assets/images/mes.png'

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
  bcrHandheldImageMap['page1.png'],
  bcrHandheldImageMap['page2.png'],
  bcrHandheldImageMap['page3.png'],
  bcrHandheldImageMap['page4.png'],
  bcrHandheldImageMap['page5.png'],
  bcrHandheldImageMap['page6.png'],
  bcrHandheldImageMap['page7.png'],
  bcrHandheldImageMap['page8.png'],
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

const aptAppImageModules = import.meta.glob<string>(
  [
    '/src/assets/images/aptapp/*.png',
    '/src/assets/images/aptapp/*.jpg',
    '/src/assets/images/aptapp/*.jpeg',
    '/src/assets/images/aptapp/*.webp',
  ],
  {
    eager: true,
    import: 'default',
  },
)

const aptAppImageMap = Object.fromEntries(
  Object.entries(aptAppImageModules).map(([path, url]) => {
    const fileName = path.split('/').pop() ?? ''

    return [fileName, url]
  }),
)

const aptAppImages = Object.entries(aptAppImageMap)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url)
  .filter((url): url is string => Boolean(url))

const aptAppThumbnailImage = aptAppImageMap['dashboard.png'] ?? aptAppImages[0]
const aptAppDetailImage = aptAppImageMap['dashboard.png'] ?? aptAppImages[0]

export const projects: PortfolioProject[] = [
  {
    id: 'big-data-platform',
    name: '발전소 빅데이터 플랫폼',
    company: '일주GNS',
    thumbnailUrl: bigDataPlatformImage,
    detailImageUrl: bigDataPlatformImage,
    imageAlt: 'Big Data Platform 화면',
    period: '2022.07 ~ 2022.12',
    contribution: '20%',
    summary:
      '발전소 운영 데이터를 수집, 분석하고 주요 지표를 실시간으로 모니터링할 수 있도록 구성한 빅데이터 플랫폼',
    keywords: ['Big Data', 'Power Plant', 'Dashboard', 'Map Visualization', 'Realtime Monitoring'],
    achievements: [
      '전국 발전소 운영 현황을 한 화면에서 확인할 수 있는 대시보드 구성',
      '지도 기반 발전소 데이터 시각화 구현',
      '차트와 테이블 기반 주요 지표 가시성 향상',
    ],
    overview:
      '전국 발전소 운영 데이터를 한 화면에서 확인하고 발전소별 운영 지표를 지도, 차트, 테이블로 조회하는 데이터 모니터링 플랫폼',
    responsibilities: ['메인 대시보드 화면 개발', '지도 기반 데이터 시각화 구현', '상세 데이터 조회 UI 개발'],
    implementations: [
      '전국 발전소 정보를 한 화면에서 확인할 수 있는 메인 대시보드 화면 구현',
      '지도에 표시된 발전소 클릭 시 발전량, 공급량 등 운영 데이터 상세 조회 기능 구현',
      '실시간 데이터를 차트와 테이블로 표시해 주요 지표를 직관적으로 확인할 수 있도록 구성',
      '사용자 클릭 이벤트에 따라 상세 데이터가 동적으로 갱신되는 인터랙션 구현',
    ],
    problemSolving: [
      '발전소별 운영 데이터를 지도, 차트, 테이블로 분리한 정보 구조 정리',
      '사용자 선택에 따라 상세 지표가 즉시 변경되는 화면 상태와 데이터 갱신 흐름 구성',
    ],
    results: [
      '발전소 운영 데이터의 실시간 모니터링 가시성 향상',
      '지도 기반 탐색과 상세 조회 흐름으로 운영 데이터 접근성 개선',
      '대시보드 중심의 데이터 분석 화면 개발 경험 축적',
    ],
    technologies: ['Vue2', 'Spring Boot', 'PostgreSQL'],
    libraries: ['devExpress', 'EChart', 'Vuetify'],
  },
  {
    id: 'smart-web-mes',
    name: 'Smart Web MES',
    company: '일주GNS',
    thumbnailUrl: mesImage,
    detailImageUrl: mesImage,
    imageAlt: 'Smart Web MES 화면',
    period: '2023.01 ~ 2023.05',
    contribution: '20%',
    summary:
      '웹 기반으로 생산 공정의 실시간 모니터링과 관리 기능을 제공해 생산성과 자원 관리 효율을 높이는 MES 프로젝트',
    keywords: ['MES', 'Material Management', 'Process Management', 'Realtime Monitoring', 'Admin UI'],
    achievements: [
      '시스템 메뉴 관리 관리자 화면 구현',
      '자재 상태 모니터링 및 자재 흐름 추적 기능 구현',
      '생산 공정 데이터 조회, 저장, 삭제 프로세스 구현',
    ],
    overview:
      '생산 현장의 자재 흐름과 공정 데이터를 웹에서 실시간으로 조회하고 관리하는 제조 실행 시스템',
    responsibilities: ['시스템 메뉴 관리 화면 개발', '자재 관리 화면 개발', '공정 관리 화면 개발'],
    implementations: [
      '관리자가 시스템 메뉴를 관리할 수 있는 직관적인 UI 구현',
      'MES 시스템 내 자재의 실시간 상태 모니터링 및 관리 화면 구현',
      '자재 흐름 추적 기능을 통해 자재 관리 프로세스의 정확성을 높이는 화면 구성',
      '생산 공정 데이터를 실시간으로 조회, 저장, 삭제할 수 있는 공정 관리 프로세스 구현',
      '공정 흐름을 정확하게 모니터링하고 관리할 수 있는 데이터 표시 구조 구성',
    ],
    problemSolving: [
      '메뉴 관리 화면의 정보 구조 단순화와 관리자 사용성 개선',
      '자재 상태와 공정 데이터를 화면별 목적에 맞게 분리한 실시간 현황 확인 구조 개선',
    ],
    results: [
      '자재 관리 프로세스의 효율성과 정확성 강화',
      '공정 흐름 모니터링 및 관리 편의성 향상',
      '생산 현장 데이터의 웹 기반 운영 흐름 개선',
    ],
    technologies: ['Vue2', 'Spring Boot', 'PostgreSQL'],
  },
  {
    id: 'hi-energy-monitoring',
    name: 'Hi-Energy 식용수 모니터링 시스템',
    company: '일주GNS',
    thumbnailUrl: emsImage,
    detailImageUrl: emsImage,
    imageAlt: 'Hi-Energy Monitoring System 화면',
    period: '2023.05 ~ 2023.09',
    contribution: '30%',
    summary:
      '사내 식용수 사용량을 실시간으로 확인하고 운영일지와 고지서 발송 업무를 웹 기반으로 관리하는 모니터링 시스템',
    keywords: ['EMS', 'Water Monitoring', 'Operation Log', 'Mail Automation', 'Reusable Components'],
    achievements: [
      '사업부, 부서 선택 공통 컴포넌트 개발',
      '연도, 월, 일 선택이 가능한 동적 날짜 선택 컴포넌트 개발',
      '운영일지 디지털화 및 고지서 메일 발송 자동화 구현',
    ],
    overview:
      '사내 식용수 사용량을 실시간으로 확인하고 정수장 운영일지와 월별 고지서 발송 업무를 웹에서 처리하는 모니터링 시스템',
    responsibilities: ['공통 컴포넌트 개발', '정수장 운영일지 기능 개발', '고지서 발송 기능 개발'],
    implementations: [
      '사업부와 부서를 선택할 수 있는 공통 선택 컴포넌트 개발',
      'type 속성에 따라 연도, 월, 일 선택이 가능한 동적 날짜 선택 공통 컴포넌트 구현',
      '종이로 관리하던 정수장 운영일지를 웹 기반 화면으로 디지털화',
      '운영일지 입력값을 기준으로 시간을 자동 계산하는 로직 구현',
      '정해진 템플릿과 조건별 동적 데이터 바인딩을 기반으로 월별 식용수 사용량 고지서 메일 발송 기능 구현',
    ],
    problemSolving: [
      '반복적으로 필요한 사업부, 부서, 날짜 입력 UI의 공통 컴포넌트화와 화면별 중복 구현 감소',
      '수기 운영일지의 시간 계산 부담을 자동 계산 로직으로 대체한 입력 편의성 및 데이터 일관성 개선',
      '고지서 템플릿과 발송 대상 조건을 데이터 기반으로 처리한 월별 발송 업무 자동화',
    ],
    results: [
      '운영일지 관리 업무의 디지털 전환',
      '반복 입력 및 계산 업무 감소',
      '월별 식용수 사용량 고지서 발송 업무 자동화',
    ],
    technologies: ['Vue2', 'Spring Boot', 'MSSQL'],
    libraries: ['TuiGrid', 'EChart', 'Vuetify'],
  },
  {
    id: 'hse-safety-management',
    name: 'HSE 통합 안전관리 시스템',
    company: '일주GNS',
    thumbnailUrl: hseImage,
    detailImageUrl: hseImage,
    imageAlt: 'HSE Integrated Safety Management 화면',
    period: '2023.10 ~ 2024.08',
    contribution: '20%',
    summary:
      '노후화된 통합 안전관리 시스템을 리뉴얼해 위험성 평가, 안전 리스크 공유, 리포트 출력을 지원한 HSE 프로젝트',
    keywords: ['HSE', 'Risk Assessment', 'Safety Risk', 'Dashboard', 'Data Migration', 'Report'],
    achievements: [
      '대시보드 조회 속도 약 20초에서 5초 이내로 개선',
      '5천만 건 이상 데이터 마이그레이션 안정화',
      '안전 리스크 공유 및 자동 메일 알림 기능 구현',
      'OZ Report 기반 PDF 출력 기능 구현',
    ],
    overview:
      '기존 통합 안전관리 시스템을 리뉴얼해 현장의 위험 요소 평가, 안전 리스크 공유, 리포트 출력, 대시보드 조회를 지원하는 안전관리 시스템',
    responsibilities: ['위험성 평가 시스템 설계 및 구현', '안전 리스크 관리 기능 구현', '리포트 출력 기능 구현', '성능 개선 및 데이터 마이그레이션'],
    implementations: [
      '현장의 위험 요소를 평가하고 개선하기 위한 위험성 평가 시스템 구현',
      '대시보드 조회 성능 개선을 위한 쿼리 튜닝 및 병렬 데이터 요청 처리',
      '5천만 건 이상의 기존 데이터를 신규 시스템으로 마이그레이션',
      '근로자가 현장 위험 요소를 사진과 함께 공유할 수 있는 안전 리스크 관리 기능 구현',
      '반응, 의견, 관리자 포상 흐름을 통해 근로자 간 소통을 지원하는 기능 구성',
      '스케줄링 기반으로 제보 내용을 안전 관리자에게 자동 메일 발송하는 기능 구현',
      'OZ Report를 활용한 정해진 템플릿 기반 PDF 생성 및 출력 기능 구현',
    ],
    problemSolving: [
      'WITH 문 기반 테이블 재정의 후 마스터 테이블과 조인하는 방식의 조회 쿼리 최적화',
      'Promise.all() 기반 병렬 데이터 요청을 통한 대시보드 응답 시간 단축',
      '대량 데이터 이관 과정의 검증 단계 분리와 마이그레이션 안정성 향상',
      '다양한 데이터 소스를 정해진 템플릿에 바인딩하는 동적 리포트 출력 구조 구성',
    ],
    results: [
      '대시보드 조회 속도 약 20초에서 5초 이내로 개선',
      '5천만 건 이상 데이터 마이그레이션 안정화',
      '현장 위험 요소 공유와 안전 관리자 알림 흐름 자동화',
      '안전관리 리포트 생성 및 출력 업무 효율 개선',
    ],
    technologies: ['Vue3', 'Spring Boot', 'Oracle'],
    libraries: ['RealGrid', 'EChart', 'OZ Report', 'Vuetify'],
  },
  {
    id: 'asset-management-system',
    name: 'i-tams 자산 관리 시스템(차량)',
    company: '일주GNS',
    period: '2024.09 ~ 2024.11',
    contribution: '40%',
    summary:
      '임직원이 업무 목적으로 법인 차량을 예약, 이용, 반납할 수 있도록 지원하고 차량 정보와 정비 이력을 관리하는 내부 운영 시스템',
    keywords: ['Vehicle Management', 'Reservation', 'Maintenance', 'CRUD', 'Internal System'],
    achievements: [
      '법인 차량 관리 업무의 시스템화',
      '차량 등록 및 정비 이력 관리 편의성 향상',
      '정비 주기 기준 관리로 차량 운영 안정성 개선',
    ],
    overview:
      '수기로 관리하던 법인 차량 이용 및 관리 업무를 시스템화하고 차량 예약, 이용, 반납, 차량 등록, 정비 내역, 정비 주기 정보를 관리하는 내부 운영 프로젝트',
    responsibilities: [
      '차량 등록 화면 개발',
      '차량 정보 CRUD 기능 구현',
      '정비 내역 관리 기능 구현',
      '정비 주기 관리 항목 구현',
      '차량 관리 데이터 구조 정리',
    ],
    implementations: [
      '법인 차량 기본 정보 등록, 수정, 조회 기능 구현',
      '차량별 정비 내역을 등록하고 관리할 수 있는 화면 구성',
      '정비 주기 기준 항목을 관리할 수 있는 기능 구현',
      '차량 상태와 관리 항목을 기준으로 운영자가 필요한 정보를 확인할 수 있는 UI 구성',
      '수기로 관리되던 차량 관리 정보를 시스템 데이터로 전환할 수 있도록 입력 구조 정리',
    ],
    problemSolving: [
      '수기로 관리하던 차량 정보와 정비 이력을 시스템에서 관리하는 화면과 데이터 흐름 구성',
      '차량별 정비 내역과 정비 주기 기준 분리를 통한 차량 상태 파악성 개선',
      '차량 등록, 정비 내역, 정비 주기 관리 항목 분리를 통한 유지보수 대응 구조 정리',
    ],
    results: [
      '차량 등록 및 정비 관리 업무의 수기 의존도 감소',
      '법인 차량 관리 정보 조회 및 변경 편의성 향상',
      '정비 이력과 주기 기준 관리를 통한 차량 운영 관리 기반 마련',
    ],
    technologies: ['Vue3', 'Spring Boot', 'PostgreSQL'],
    libraries: ['Vuetify', 'Jasper'],
  },
  {
    id: 'acs-web-ui',
    name: 'ACS Web UI',
    company: '벰로보틱스',
    thumbnailUrl: acsMonitoringImage,
    detailImageUrl: acsMonitoringImage,
    imageAlt: 'ACS Web UI 관제 화면',
    period: '2025.03 ~ 현재',
    contribution: '40%',
    summary: 'AGV/AMR의 위치, 상태, 명령, 이력 데이터를 통합 관제 화면에서 실시간으로 모니터링하고 제어할 수 있도록 고도화한 Web 기반 ACS 프로젝트',
    keywords: ['ACS', 'AGV/AMR', 'WebSocket', '2D/3D Map', 'Realtime Control', 'Enhancement'],
    achievements: [
      '대용량 맵 환경에서도 부드러운 렌더링 유지',
      '실시간 관제 정확도 향상',
      '네트워크 지연 환경에서도 끊김 없는 주행 표현 구현',
    ],
    overview:
      'AGV/AMR 위치, 배터리, 에러 상태를 실시간으로 동기화하고 공장 레이아웃 위에서 관제하는 Web 기반 ACS 시스템 및 운영성 중심 고도화',
    responsibilities: ['관제 UI 개발', '실시간 상태 동기화', '렌더링 최적화', '주행 애니메이션 구현', '운영 기능 고도화'],
    implementations: [
      '공장 레이아웃 2D/3D 시각화',
      'AGV/AMR 위치, 배터리, 에러 상태 실시간 동기화',
      'WebSocket 기반 실시간 관제 및 제어 인터페이스 구현',
      'Map 자료구조 기반 데이터 관리 구조 개선',
      'requestAnimationFrame 기반 렌더링 최적화',
      'Lerp/Slerp 보간 알고리즘 기반 주행 애니메이션 구현',
      '운영 편의성을 높이기 위한 화면 및 제어 기능 개선',
      '2026년 4월 이후 피드백 기반 고도화 진행 중',
    ],
    problemSolving: [
      '상태 데이터를 Map 구조로 관리한 갱신 비용 및 탐색 비용 감소',
      '프레임 단위 렌더링과 보간 적용을 통한 지연 환경의 주행 표현 개선',
    ],
    results: [
      '대용량 맵 환경에서도 부드러운 렌더링 유지',
      '실시간 관제 정확도 향상',
      '운영 가시성 및 제어 효율 향상',
    ],
    technologies: ['Vue3', 'TypeScript', 'Spring Boot', 'MariaDB'],
    libraries: ['Three.js', 'EChart', 'Vuetify', 'TuiGrid'],
  },
  {
    id: 'android-barcode-reader',
    name: 'BCR Handheld',
    company: '벰로보틱스',
    thumbnailUrl: bcrHandheldImageMap['page3.png'],
    detailImageUrl: bcrHandheldImageMap['barcodeScanning.png'],
    imageUrls: bcrHandheldImages,
    imageAlt: 'BCR Handheld Android 앱 화면',
    period: '2026.01 ~ 2026.02',
    contribution: '100%',
    summary: '산업 현장 단말에서 바코드를 스캔하고 작업 데이터를 빠르게 확인할 수 있도록 개발한 Android 앱',
    keywords: ['Android', 'Java', 'Barcode', 'Mobile App', 'Field Operation'],
    achievements: ['현장 입력 업무 간소화', '바코드 기반 데이터 조회 속도 개선', '모바일 단말 운영 편의성 향상'],
    overview:
      'Android Studio와 Java 기반의 바코드 리더기 단말용 현장 업무 애플리케이션',
    responsibilities: ['Android 앱 구조 설계', '바코드 스캔 흐름 구현', '조회 화면 개발', '현장 단말 테스트 및 개선'],
    implementations: [
      '바코드 스캔 이벤트 처리 및 결과 데이터 파싱 구현',
      '스캔 결과 기반 작업 정보 조회 화면 구성',
      '현장 사용 흐름에 맞춘 입력 단계 최소화',
      '단말 해상도와 사용 환경을 고려한 UI 구성',
    ],
    problemSolving: [
      '반복 입력이 많은 현장 업무를 바코드 스캔 중심 흐름으로 전환한 입력 부담 감소',
      '스캔 실패와 잘못된 데이터 입력 상황을 고려한 명확한 사용자 피드백 제공',
    ],
    results: ['현장 입력 업무 간소화', '바코드 기반 데이터 조회 속도 개선', '모바일 단말 운영 편의성 향상'],
    technologies: ['Android Studio', 'Java', 'Spring Boot', 'MariaDB'],
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
    contribution: '100%',
    summary:
      '2025년 3월 Web 기반 ACS 시스템 개발을 시작했고, 2026년 4월부터 AGV/AMR 관제 시스템을 고도화 중인 프로젝트',
    keywords: ['ACS', 'AGV/AMR', 'WebSocket', '2D/3D Map', 'Realtime Control', 'Enhancement'],
    achievements: [
      '대용량 맵 환경에서도 부드러운 렌더링 유지',
      '실시간 관제 정확도 향상',
      '네트워크 지연 환경에서도 끊김 없는 주행 표현 구현',
    ],
    overview:
      'AGV/AMR 위치, 배터리, 에러 상태를 실시간으로 동기화하고 공장 레이아웃 위에서 관제하는 Web 기반 ACS 시스템 및 운영성 중심 고도화',
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
      '상태 데이터를 Map 구조로 관리한 갱신 비용 및 탐색 비용 감소',
      '프레임 단위 렌더링과 보간 적용을 통한 지연 환경의 주행 표현 개선',
    ],
    results: [
      '대용량 맵 환경에서도 부드러운 렌더링 유지',
      '실시간 관제 정확도 향상',
      '운영 가시성 및 제어 효율 향상',
    ],
    technologies: ['Vue3', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
    libraries: ['Three.js'],
  },
  {
    id: 'apt-plan-app',
    name: '입주비용관리',
    company: 'Side Project',
    thumbnailUrl: aptAppThumbnailImage,
    detailImageUrl: aptAppDetailImage,
    imageUrls: aptAppImages,
    imageAlt: '입주비용관리 Flutter 앱 화면',
    period: '2026.06 ~ 최근',
    contribution: '100%',
    summary: '입주 비용과 후불 이자 데이터를 Google Sheets와 연동해 모바일에서 관리할 수 있도록 개발한 개인용 Flutter 앱',
    keywords: ['Flutter', 'Dart', 'Riverpod', 'GoRouter', 'Google Sheets API', 'Private Finance'],
    achievements: [
      'Google Sheets 기반 데이터 양방향 동기화 구현',
      '입주 비용과 후불 이자 현황을 모바일 대시보드로 구조화',
      '백엔드 없이 개인용 운영 가능한 앱 구조 구현',
    ],
    overview:
      '입주 비용 관리 대장을 Google Sheets와 연동해 모바일에서 확인하고 수정하는 개인용 Flutter 앱과 민감 금액을 제외한 화면 이미지 노출',
    responsibilities: ['Flutter 앱 구조 설계', 'Google Sheets 연동', '비용 항목 UI 개발', 'Riverpod 상태 관리', 'iOS 실기기 배포'],
    implementations: [
      '입주비용과 후불이자 화면을 하단 네비게이션으로 구성',
      'Google Sheets API 기반 데이터 조회 및 저장 구조 구현',
      'deleted 플래그 기준 데이터 제외 처리',
      '날짜 serial 값 파싱 처리',
      'Riverpod 기반 상태 관리와 GoRouter 기반 라우팅 적용',
    ],
    problemSolving: [
      '백엔드 없이 Google Sheets를 데이터 저장소처럼 활용한 개인용 운영 비용 감소',
      '시트 구조 변경에 대응하기 위한 datasource와 repository 계층 분리',
      '개인 금액이 포트폴리오에 노출되지 않도록 화면 이미지 비식별 처리',
    ],
    results: [
      '앱과 Google Sheets 간 양방향 데이터 변경 확인',
      '입주 비용과 후불 이자 현황을 모바일에서 확인 가능한 구조 완성',
      'App Store 없이 개인 아이폰에 직접 설치 가능한 운영 형태 구성',
    ],
    technologies: ['Flutter', 'Dart', 'Google Sheets API'],
    libraries: ['Riverpod', 'GoRouter', 'SharedPreferences', 'fl_chart', 'google_sign_in', 'googleapis'],
  },
]
