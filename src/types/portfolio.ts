export interface ContactLink {
  label: string
  href: string
  icon: string
}

export interface Profile {
  name: string
  title: string
  summary: string
  location: string
  imageUrl: string
  resumeUrl: string
  careerDescriptionUrl: string
  contacts: ContactLink[]
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface CareerItem {
  period: string
  company: string
  role: string
  summary: string
  highlights: string[]
}

export interface CareerStory {
  title: string
  paragraphs: string[]
}

export interface PortfolioProject {
  id: string
  name: string
  company: string
  thumbnailUrl?: string
  detailImageUrl?: string
  imageUrls?: string[]
  imageAlt?: string
  period: string
  role: string
  contribution: string
  summary: string
  keywords: string[]
  achievements: string[]
  overview: string
  responsibilities: string[]
  implementations: string[]
  problemSolving: string[]
  results: string[]
  technologies: string[]
}
