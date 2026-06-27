import type { CSSProperties } from 'vue'

export type TechnologyChipStyle = CSSProperties

const defaultChipStyle: TechnologyChipStyle = {
  backgroundColor: 'rgba(71, 85, 105, 0.12)',
  color: '#334155',
}

const technologyStyles: Record<string, TechnologyChipStyle> = {
  'Admin UI': { backgroundColor: '#e0f2fe', color: '#075985' },
  'Android Studio': { backgroundColor: '#dcfce7', color: '#166534' },
  'Backend API': { backgroundColor: '#ede9fe', color: '#5b21b6' },
  'Barcode Scanner': { backgroundColor: '#fef3c7', color: '#92400e' },
  Batch: { backgroundColor: '#e2e8f0', color: '#334155' },
  'Big Data': { backgroundColor: '#cffafe', color: '#155e75' },
  Canvas: { backgroundColor: '#ffedd5', color: '#9a3412' },
  Dart: { backgroundColor: '#dbeafe', color: '#075985' },
  Dashboard: { backgroundColor: '#e0f2fe', color: '#075985' },
  EChart: { backgroundColor: '#fee2e2', color: '#991b1b' },
  Flutter: { backgroundColor: '#dbeafe', color: '#075985' },
  fl_chart: { backgroundColor: '#fee2e2', color: '#991b1b' },
  GoRouter: { backgroundColor: '#e0e7ff', color: '#3730a3' },
  HSE: { backgroundColor: '#dcfce7', color: '#166534' },
  Java: { backgroundColor: '#ffedd5', color: '#9a3412' },
  JavaScript: { backgroundColor: '#fef9c3', color: '#713f12' },
  MariaDB: { backgroundColor: '#e0f2fe', color: '#164e63' },
  MES: { backgroundColor: '#ecfccb', color: '#365314' },
  'Mobile UI': { backgroundColor: '#fce7f3', color: '#9d174d' },
  MSSQL: { backgroundColor: '#dbeafe', color: '#1e40af' },
  Oracle: { backgroundColor: '#fee2e2', color: '#991b1b' },
  PostgreSQL: { backgroundColor: '#dbeafe', color: '#1e3a8a' },
  Riverpod: { backgroundColor: '#cffafe', color: '#155e75' },
  SharedPreferences: { backgroundColor: '#e2e8f0', color: '#334155' },
  Spring: { backgroundColor: '#dcfce7', color: '#166534' },
  'Spring Boot': { backgroundColor: '#dcfce7', color: '#166534' },
  SQL: { backgroundColor: '#dbeafe', color: '#1e40af' },
  'Three.js': { backgroundColor: '#f1f5f9', color: '#111827' },
  TypeScript: { backgroundColor: '#dbeafe', color: '#1e40af' },
  TuiGrid: { backgroundColor: '#ede9fe', color: '#5b21b6' },
  Vue: { backgroundColor: '#dcfce7', color: '#166534' },
  'Vue 3': { backgroundColor: '#dcfce7', color: '#166534' },
  Vue3: { backgroundColor: '#dcfce7', color: '#166534' },
  Vue2: { backgroundColor: '#dcfce7', color: '#166534' },
  WebSocket: { backgroundColor: '#ede9fe', color: '#5b21b6' },
}

const technologyIcons: Record<string, string> = {
  'Admin UI': 'mdi-monitor-dashboard',
  'Android Studio': 'mdi-android-studio',
  'Backend API': 'mdi-api',
  'Barcode Scanner': 'mdi-barcode-scan',
  Batch: 'mdi-clock-sync-outline',
  'Big Data': 'mdi-database-search-outline',
  Canvas: 'mdi-vector-square',
  Dart: 'mdi-language-dart',
  Dashboard: 'mdi-view-dashboard-outline',
  EChart: 'mdi-chart-box-outline',
  Flutter: 'mdi-flutter',
  fl_chart: 'mdi-chart-line',
  GoRouter: 'mdi-routes',
  HSE: 'mdi-shield-check-outline',
  Java: 'mdi-language-java',
  JavaScript: 'mdi-language-javascript',
  MariaDB: 'mdi-database',
  MES: 'mdi-factory',
  'Mobile UI': 'mdi-cellphone',
  MSSQL: 'mdi-database',
  Oracle: 'mdi-database',
  PostgreSQL: 'mdi-database',
  Riverpod: 'mdi-state-machine',
  SharedPreferences: 'mdi-content-save-cog-outline',
  Spring: 'mdi-leaf',
  'Spring Boot': 'mdi-leaf',
  SQL: 'mdi-database',
  'Three.js': 'mdi-cube-outline',
  TypeScript: 'mdi-language-typescript',
  TuiGrid: 'mdi-table-large',
  Vue: 'mdi-vuejs',
  'Vue 3': 'mdi-vuejs',
  Vue3: 'mdi-vuejs',
  Vue2: 'mdi-vuejs',
  WebSocket: 'mdi-lan-connect',
}

/**
 * 기술 이름에 맞는 칩 색상을 반환한다.
 */
export const getTechnologyChipStyle = (technology: string): TechnologyChipStyle => {
  return technologyStyles[technology] ?? defaultChipStyle
}

/**
 * 기술 이름에 맞는 MDI 아이콘 이름을 반환한다.
 */
export const getTechnologyChipIcon = (technology: string): string => {
  return technologyIcons[technology] ?? 'mdi-code-tags'
}
