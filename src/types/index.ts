// 个人信息类型
export interface PersonalInfo {
  name: string
  title: string
  phone: string
  email: string
  github?: string
  avatar?: string
}

// 教育背景类型
export interface Education {
  school: string
  major: string
  degree: string
  period: string
  mainCourses: string[]
  minorCourses: string[]
}

// 技能项类型
export interface SkillItem {
  name: string
  advanced?: boolean
}

// 技能分类类型
export interface SkillCategory {
  name: string
  icon: string
  skills: (string | SkillItem)[]
}

// 项目类型
export interface Project {
  id: number
  name: string
  subtitle: string
  period: string
  description: string
  highlights: string[]
  techStack: string[]
  image?: string
  images?: string[]
}

// 校园经历类型
export interface Experience {
  period: string
  school: string
  role: string
  achievements: string[]
}

// 校园角色类型
export interface CampusRole {
  title: string
  period: string
  achievements: string[]
}

// 实习经历类型
export interface Internship {
  company: string
  position: string
  period: string
  projects: string[]
}

// 导航项类型
export interface NavItem {
  id: string
  label: string
  icon?: string
}
