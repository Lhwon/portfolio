import type { SkillGroup } from '../types/portfolio'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['Vue 3', 'TypeScript', 'Vuetify', 'JavaScript', 'WebSocket'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'REST API', 'SQL', 'Data Migration', 'Batch Scheduling'],
  },
  {
    title: 'Mobile & Device',
    items: ['Flutter', 'Dart', 'Android Studio', 'Java', 'Barcode Scanner', 'Mobile UI'],
  },
  {
    title: 'Industrial Systems',
    items: ['MES', 'HSE', 'EMS', 'ACS', 'AGV/AMR Control', 'Realtime Monitoring'],
  },
  {
    title: 'Operations',
    items: ['Dashboard Performance', 'System Maintenance', 'CI/CD', 'Kubernetes', 'Docker'],
  },
]
