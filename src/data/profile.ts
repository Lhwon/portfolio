import type { Profile } from '@/types/portfolio'
import profileImage from '@/assets/profile/profile-me.png'

const publicBaseUrl = import.meta.env.BASE_URL

export const profile: Profile = {
  name: 'Lee Hee won',
  title: 'Web/App Developer',
  summary:
    `새로운 환경과 업무 흐름을 빠르게 이해하고,
    실제 사용자가 편하게 쓸 수 있는 화면과 기능을 만드는 개발자입니다.
    운영 시스템, 관제 화면, 모바일 앱까지 다양한 형태의 서비스를 구현해왔습니다.`,
  location: 'South Korea',
  imageUrl: profileImage,
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
