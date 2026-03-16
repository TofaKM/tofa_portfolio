export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tech: string[]
  github: string
  demo: string
  featured: boolean
  category: string
  year: string
}

export interface Skill {
  name: string
  icon: string
  level: number
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools'
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  tags: string[]
  image: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  initials: string
  text: string
}

export interface WorkExperience {
  company: string
  role: string
  period: string
  location: string
  description: string
  achievements: string[]
  tech: string[]
}

export interface Education {
  school: string
  degree: string
  field: string
  period: string
  location: string
  grade?: string
  details: string[]
}

export interface Certification {
  name: string
  issuer: string
  date: string
  credentialUrl?: string
  icon: string
  skills: string[]
  status: 'completed' | 'in-progress'
}
