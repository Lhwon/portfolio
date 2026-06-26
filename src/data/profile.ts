import type { Profile } from '../types/portfolio'

const publicBaseUrl = import.meta.env.BASE_URL

export const profile: Profile = {
  name: 'Lee Hee won',
  title: 'Full-Stack Web Developer',
  summary:
    '산업 현장의 운영 데이터를 웹으로 연결하고, 실시간 관제와 대시보드 성능을 개선하는 개발자입니다.',
  location: 'South Korea',
  imageUrl: `${publicBaseUrl}profile/profile-placeholder.svg`,
  resumeUrl: `${publicBaseUrl}files/resume.pdf`,
  careerDescriptionUrl: `${publicBaseUrl}files/career-description.pdf`,
  contacts: [
    {
      label: 'GitHub',
      href: 'https://github.com/',
      icon: 'mdi-github',
    },
    {
      label: 'Blog',
      href: 'https://example.com',
      icon: 'mdi-post-outline',
    },
    {
      label: 'Email',
      href: 'mailto:hello@example.com',
      icon: 'mdi-email-outline',
    },
  ],
}
